import {Storage} from './Storage';

export const addSignature = async (text, general = null) => {
    if (!general) {
        general = (await Storage.get(null)).general;
    }
    const {signature, signaturePosition} = general;

    if ('string' === typeof signature) {
        text = 'append' === signaturePosition
            ? `${text}${signature}`
            : `${signature}${text}`;
    }

    return text;
};