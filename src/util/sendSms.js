import {Sms77Client} from 'sms77-client';

import {Storage} from './Storage';
import {notify} from './notify';

export const sendSms = async ({text, to, from, type}) => {
    const errors = [];

    let apiKey = await Storage.get('apiKey');
    apiKey = apiKey && apiKey.length ? apiKey : window.prompt('Please enter your sms77.io API key.');
    if (!apiKey || !apiKey.length) {
        errors.push('Your API key must be set in order to send SMS.');
    }

    to = to && to.length ? to : await Storage.get('to');
    to = to && to.length ? to : window.prompt('Please enter a recipient phone number or address book entry.');
    if (!to || !to.length) {
        errors.push('You must specify a valid recipient phone number or address book entry.');
    }

    from = from && from.length || await Storage.get('from');

    type = type && type.length || await Storage.get('type');

    const signature = await Storage.get('signature');

    if (signature && signature.length) {
        const signaturePosition = await Storage.get('signaturePosition');

        text = 'append' === signaturePosition ? `${text}${signature}` : `${signature}${text}`;
    }

    if (errors.length) {
        errors.unshift('Error(s) while sending:');

        notify(errors.join('\n'));
    } else {
        const client = new Sms77Client(apiKey, 'chrome');
        const res = await client.send({apiKey, to, text, from, type});

        console.log({res});

        notify('100' === res
            ? `SMS successfully sent to "${to}" from "${from}": ${text}`
            : `An error occured while sending SMS to "${to}". The returned error code is: "${res}".`);
    }
};