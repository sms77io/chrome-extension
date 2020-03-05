export const getMetaData = async () => {
    await page.goto('chrome://extensions/');

    return await page.evaluate(() => {
        const sr1 = document
            .querySelector('body > extensions-manager')
            .shadowRoot;

        sr1
            .querySelector('#items-list')
            .shadowRoot
            .querySelector('extensions-item')
            .shadowRoot
            .querySelector('#detailsButton')
            .click();

        const detailView = sr1
            .querySelector('#viewManager extensions-detail-view')
            .shadowRoot;

        return {
            id: detailView
                .querySelector('#id-section .section-content')
                .innerHTML,
            name: detailView
                .querySelector('#name')
                .innerHTML
                .replace('\n', '')
                .trim(),
            permissions: [...detailView.querySelectorAll('#permissions-list li')]
                .filter(e => e)
                .map(e => e.textContent.replace('\n', '').trim()),
            version: detailView
                .querySelector('#container .page-content > div:nth-child(5) > .section-content')
                .innerHTML,
        };
    });
};