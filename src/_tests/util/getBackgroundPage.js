export const getBackgroundPage = () => new Promise(resolve => {
    const pathName = '_generated_background_page.html';

    const target = browser.targets().find(
        t => t.type() === 'background_page' && t.url().endsWith(pathName)
    );

    if (target) {
        return resolve(target);
    }

    const listener = target => {
        if (target.type() === 'background_page' && target.url().endsWith(pathName)) {
            browser.removeListener('targetcreated', listener);

            browser.removeListener('targetchanged', listener);

            resolve(target);
        }
    };

    browser.on('targetcreated', listener);

    browser.on('targetchanged', listener);
});