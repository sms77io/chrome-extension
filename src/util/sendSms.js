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

    const opts = (async () => {
        const opts = {
            debug: Boolean(await Storage.get('debug')),
            json: 1,
            text,
            to,
        };

        if ('string' === typeof from && from.length) {
            opts.from = from;
        }

        return opts;
    })();

    const apiKey = await getApiKey();

    to = await getTo(to);

    from = await getFrom(from);

    text = await addSignature(text);

    if (errors.length) {
        errors.unshift('Error(s) while sending:');

        notify(errors.join('\n'));
    } else {
        const lines = [];

        res = await (new Sms77Client(apiKey, 'chrome')).sms(opts);

        const {balance, messages, sms_type, success, total_price} = res;

        if (100 === Number.parseInt(success)) {
            lines.push(
                `${messages.length} ${sms_type} SMS sent valued at ${total_price} €. Balance: ${balance}`
            );

            for (const sms of messages) {
                let line = '';

                if (sms.success) {
                    line += `#${sms.id} ${sms.parts}x valued at`;
                    line += ` ${sms.price} sent to ${sms.recipient} from ${sms.sender}: ${sms.text}`;
                } else {
                    line += `#${sms.id} failed sending to ${sms.recipient}`;
                    line += ` from ${sms.sender} with encoding ${sms.sender}: ${sms.encoding}`;
                }

                sms.messages && sms.messages.forEach(msg => line += ` / ${msg}`);

                lines.push(line);
            }
        } else {
            lines.push(`An error occured while sending SMS to "${to}": ${JSON.stringify(res)}`);
        }

        notify(lines.join('\n'));
    }

    window.dispatchEvent(new CustomEvent('sms77send', {detail: {opts, res, errors}}));
};