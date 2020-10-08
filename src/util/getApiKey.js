import {Storage} from './Storage';

export const getApiKey = async () => {
    let apiKey = await Storage.get('apiKey');

    apiKey = 'string' === typeof apiKey && apiKey.length
        ? apiKey
        : prompt(chrome.i18n.getMessage('prompt_apiKey'));

    if (!apiKey) {
        throw new Error(chrome.i18n.getMessage('apiKeyRequired'));
    }

    return apiKey;
};