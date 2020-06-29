import {Storage} from './Storage';

export const getApiKey = async () => {
    let apiKey = await Storage.get('apiKey');

    apiKey = 'string' === typeof apiKey && apiKey.length
        ? apiKey
        : prompt(chrome.i18n.getMessage('prompt_api_key'));

    if (!apiKey) {
        throw new Error(chrome.i18n.getMessage('api_key_required'));
    }

    return apiKey;
};