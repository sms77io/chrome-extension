import {Storage} from './Storage';

export const getTo = async to => {
    to = 'string' === typeof to && to.length
        ? to
        : await Storage.get('to');

    to = to && to.length
        ? to
        : prompt(chrome.i18n.getMessage('prompt_to'));

    if (!to || !to.length) {
        throw new Error(chrome.i18n.getMessage('to_invalid'));
    }

    return to;
};