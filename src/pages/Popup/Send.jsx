import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {To} from '../../components/To';
import {From} from '../../components/From';
import {Storage} from '../../util/Storage';
import {sendSms} from '../../util/sendSms';

export const Send = ({onSubmit, onCancel}) => {
    const [text, setText] = useState('');
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');

    useEffect(() => {
        Storage.get(['from', 'to']).then(({from, to}) => {
            setFrom(from);
            setTo(to);
        });
    }, []);

    return <form onSubmit={async e => {
        e.preventDefault();

        await sendSms({text, to, from});

        onSubmit();
    }}>
        <h2 style={{textAlign: 'center'}}>{chrome.i18n.getMessage('send_sms')}</h2>

        <TextField
            fullWidth
            label={chrome.i18n.getMessage('msg')}
            multiline
            onChange={ev => setText(ev.target.value)}
            placeholder={chrome.i18n.getMessage('msg_placeholder')}
            required
            rows='3'
            value={text}
        />

        <To onChange={to => setTo(to)} value={to}/>

        <From onChange={from => setFrom(from)} value={from}/>

        <ButtonGroup fullWidth color='primary'>
            <Button type='button' onClick={onCancel}>{chrome.i18n.getMessage('cancel')}</Button>

            <Button type='submit'>{chrome.i18n.getMessage('send_sms')}</Button>
        </ButtonGroup>
    </form>;
};