import {notify} from './notify';
import {addSignature} from './addSignature';
import sendMessage from './sendMessage';

export const sendVoice = async opts => {
    const voiceParams = {
        ...opts,
        text: await addSignature(opts.text),
    };

    const handler = (res, lines) => {
        res = '100\n136316131\n15.55';
        // res = await (new Sms77Client(await getApiKey(), 'chrome')).voice(voiceParams); TODO: remove
        const [code, id, total_price] = res.split('\n');
        console.log({code, id, total_price});

        if (100 === Number.parseInt(code)) {
            lines.push(chrome.i18n.getMessage('msg_sent',
                [1, chrome.i18n.getMessage('voice'), total_price, null]));
        } else {
            lines.push(messageErrorLine(voiceParams, res));
        }

        notify(lines.join('\n'));
    };

    sendMessage(voiceParams, handler);
};