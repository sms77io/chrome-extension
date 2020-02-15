import '../../assets/img/icon16.png';
import '../../assets/img/icon19.png';
import '../../assets/img/icon48.png';
import '../../assets/img/icon128.png';
import iconUrl from '../../assets/img/logo.svg';

chrome.runtime.onMessage.addListener(({action, notification}, sender, sendResponse) => {
    if ('NOTIFY' === action) {
        notification = {
            ...{
                iconUrl,
                type: 'basic',
                title: 'sms77io has something to say...',
            },
            ...notification
        };

        chrome.notifications.create(notification);
    }
});

chrome.contextMenus.onClicked.addListener( ({selectionText}) => {
    chrome.tabs.query({active: true}, tabs => {
        const activeTab = tabs.shift();

        chrome.tabs.sendMessage(activeTab.id, {selectionText});
    });
});

chrome.runtime.onInstalled.addListener(() => chrome.contextMenus.create({
    contexts: ['selection'],
    title: 'Send SMS via Sms77.io',
}));