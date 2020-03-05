import {Storage} from './Storage';

export const addSignature = async (text) => {
    const {signature, signaturePosition} = await Storage.get(['signature', 'signaturePosition']);

    if ('string' === typeof signature) {
        text = 'append' === signaturePosition
            ? `${text}${signature}`
            : `${signature}${text}`;
    }

    return text;
};