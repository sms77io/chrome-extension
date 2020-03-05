import {Storage} from './Storage';

export const getTo = async to => {
    to = 'string' === typeof to && to.length
        ? to
        : await Storage.get('to');

    to = to && to.length
        ? to
        : prompt('Please enter a recipient phone number or address book entry.');

    if (!to || !to.length) {
        throw new Error('To: A valid phone number or address book entry expected.');
    }

    return to;
};