import {version} from '../../package.json';
import {getBackgroundPage} from './util/getBackgroundPage';
import {getMetaData} from './util/getMetaData';

describe('Sms77Chrome', () => {
    let metaData = {};

    beforeAll(async () => {
        await (await (await getBackgroundPage()).page())
            .evaluate(() => new Promise((res, rej) => {
                document.body.addEventListener('click', () => chrome.permissions.request({
                    origins: ['<all_urls>'],
                    permissions: [
                        'activeTab',
                        'contextMenus',
                        'declarativeContent',
                        'storage',
                        'tabs',
                        'notifications'
                    ],
                }, granted => granted ? res(true) : rej(false)), {once: true});

                document.body.click();
            }));

        metaData = await getMetaData();
    });

    describe('meta data', () => {
        it('is object of type', () => expect(metaData).toEqual(expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            version: expect.any(String),
        })));

        it('has a 32 character long id', () => expect(metaData.id).toHaveLength(32));

        it(`equals version "${version}"`, () => expect(metaData.version).toMatch(version));
    });

    it('should set plugin options', async () => {
        await page.evaluateHandle(`
            document
                .querySelector("body > extensions-manager")
                .shadowRoot
                .querySelector("#viewManager > extensions-detail-view")
                .shadowRoot
                .querySelector("#extensions-options")
                .shadowRoot
                .querySelector("#icon")
                .click();
        `);

        const optionsPage = await (await browser.waitForTarget(
            t => `chrome-extension://${metaData.id}/options.html` === t.url())).page();

        await expect(optionsPage).toFillForm('form', {
            apiKey: process.env.SMS77_API_KEY || '!123DUMMY_API_KEY456!',
            from: 'sms77io',
            to: process.env.SMS77_TO || '+4901234567890',
            signature: ' Greetings from sms77.io',
            signaturePosition: 'append',
        });

        await optionsPage.click('button[type="submit"]');

        await optionsPage.close();
    });

    it('sends a SMS or returns an error', async onSent => {
        await page.exposeFunction('onSent', sent => {
            if (process.env.SMS77_API_KEY) {
                expect(sent.res.success).toMatch('100');
            } else {
                expect(sent.res).toMatch('900');
            }

            onSent();
        });

        await page.goto(`chrome-extension://${metaData.id}/popup.html`);
        await page.click('body > div > div > div > button:nth-child(2)'); // click send button
        await page.type('textarea', 'This is just a test SMS.');

        await page.evaluateHandle(
            () => window.addEventListener('sms77send', e => window.onSent(e.detail)));

        await page.click('button[type="submit"]');
    });
});