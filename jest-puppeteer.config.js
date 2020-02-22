const extensionPath = `${__dirname}/build`;

module.exports = {
    launch: {
        args: [
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`,
            '--window-size=1920,1080',
        ],
        headless: false,
    },
};