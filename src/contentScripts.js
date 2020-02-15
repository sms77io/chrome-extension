import {sendSms} from './util/sendSms';

chrome.runtime.onMessage.addListener(async ({selectionText: text}) => {
    await sendSms({text});
});
