import {Storage} from './Storage';

export const getFrom = async from => {
    from = 'string' === typeof from && from.length
        ? from
        : await Storage.get('from');

    from = 'string' === typeof from && from.length
        ? from
        : prompt('Please enter a sender identifier.');

    if (!from || !from.length) {
        return 'sms77io';
    }

    return from;
};