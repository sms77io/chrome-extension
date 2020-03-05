export const notify = message => chrome.runtime.sendMessage({
    action: 'NOTIFY',
    notification: {message}
});