import {Storage} from './Storage';

export const getFrom = async from => {
    from = 'string' === typeof from && from.length
        ? from
        : await Storage.get('from');

    from = 'string' === typeof from && from.length
        ? from
        : prompt(chrome.i18n.getMessage('prompt_from'));

    if (!from || !from.length) {
        return 'sms77io';
    }

    return from;
};