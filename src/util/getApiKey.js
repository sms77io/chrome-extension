import {Storage} from './Storage';

export const getApiKey = async () => {
    let apiKey = await Storage.get('apiKey');

    apiKey = 'string' === typeof apiKey && apiKey.length
        ? apiKey
        : prompt('Please enter your sms77.io API key.');

    if (!apiKey) {
        throw new Error('Your API key must be set in order to send SMS.');
    }

    return apiKey;
};