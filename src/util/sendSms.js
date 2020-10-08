import {notify} from './notify';
import {getTo} from './getTo';
import {addSignature} from './addSignature';
import {getFrom} from './getFrom';
import messageErrorLine from './messageErrorLine';
import sendMessage from './sendMessage';

export const sendSms = async ({sms: smsParams, general}) => {
    for (const [k, v] of Object.entries(smsParams)) {
        if (typeof v === 'boolean') {
            smsParams[k] = true === v ? 1 : 0;
        }
    }
    const {text, to, from} = smsParams;

    smsParams.from = 'string' === typeof from && from.length
        ? from
        : await getFrom(from);
    smsParams.text = await addSignature(text, general);
    smsParams.to = await getTo(to);
    smsParams.json = 1;

    const handler = (res, lines) => {
        res = {
            balance: 124.42,
            messages: [],
            sms_type: 'direct',
            success: '100',
            total_price: 1.23
        };
        // res = await (new Sms77Client(await getApiKey(), 'chrome')).sms(smsParams); TODO: remove
        const {balance, messages, sms_type, success, total_price} = res;

        if ([100, 101].includes(Number.parseInt(success))) {
            lines.push(chrome.i18n.getMessage('msg_sent',
                [messages.length, `${sms_type} SMS`, total_price, balance]));

            for (const msg of messages) {
                let line = '';

                if (sms.success) {
                    line += chrome.i18n.getMessage('msg_n_value', [msg.id, msg.parts]);
                    line += chrome.i18n.getMessage('msg_n_to_from',
                        [msg.price, msg.recipient, msg.sender, msg.text]);
                } else {
                    line += chrome.i18n.getMessage('msg_n_failed', [msg.id, msg.recipient]);
                    line += chrome.i18n.getMessage('msg_n_from_with', [msg.sender, msg.encoding]);
                }

                msg.messages && msg.messages.forEach(m => line += ` / ${m}`);

                lines.push(line);
            }
        } else {
            lines.push(messageErrorLine(smsParams, res));
        }

        notify(lines.join('\n'));
    };

    sendMessage(smsParams, handler);
};