import Sms77Client from 'sms77-client';

import {notify} from './notify';
import {getApiKey} from './getApiKey';
import {getTo} from './getTo';
import {addSignature} from './addSignature';
import {getFrom} from './getFrom';
import {Storage} from './Storage';

export const sendSms = async ({text, to, from}) => {
    let res = null;
    const errors = [];

    const smsParams = {
        debug: Boolean(await Storage.get('debug')) ? 1 : 0,
        from: 'string' === typeof from && from.length ? from : await getFrom(from),
        json: 1,
        text: await addSignature(text),
        to: await getTo(to),
    };

    if (errors.length) {
        errors.unshift(chrome.i18n.getMessage('error_sending'));

        notify(errors.join('\n'));
    } else {
        const lines = [];

        res = await (new Sms77Client(await getApiKey(), 'chrome')).sms(smsParams);

        const {balance, messages, sms_type, success, total_price} = res;

        if (100 === Number.parseInt(success)) {
            lines.push(chrome.i18n.getMessage('msg_sent',
                [messages.length, `${sms_type} SMS`, total_price, balance]));

            for (const sms of messages) {
                let line = '';

                if (sms.success) {
                    line += chrome.i18n.getMessage('msg_n_value', [sms.id, sms.parts]);
                    line += chrome.i18n.getMessage('msg_n_to_from',
                        [sms.price, sms.recipient, sms.sender, sms.text]);
                } else {
                    line += chrome.i18n.getMessage('msg_n_failed', [sms.id, sms.recipient]);
                    line += chrome.i18n.getMessage('msg_n_from_with', [sms.sender, sms.encoding]);
                }

                sms.messages && sms.messages.forEach(msg => line += ` / ${msg}`);

                lines.push(line);
            }
        } else {
            lines.push(chrome.i18n.getMessage('sms_error', [smsParams.to]) + JSON.stringify(res));
        }

        notify(lines.join('\n'));
    }

    window.dispatchEvent(new CustomEvent('sms77send', {detail: {smsParams, res, errors}}));
};