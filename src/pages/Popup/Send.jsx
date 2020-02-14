import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {Sms} from '../../util/Sms';
import {To} from '../To';
import {From} from '../From';
import {Storage} from '../../util/Storage';

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

    const handleSubmit = async () => {
        await Sms.send(text, to, from);

        onSubmit();
    };

    return <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <h2 style={{textAlign: 'center'}}>Send SMS</h2>

        <TextField
            fullWidth
            label='Message content'
            multiline
            onChange={ev => setText(ev.target.value)}
            placeholder='Enter message content here.'
            required
            rows='3'
            value={text}
        />

        <To onChange={e => setTo(e.target.value)} to={to}/>

        <From onChange={e => setFrom(e.target.value)} from={from}/>

        <ButtonGroup fullWidth color='primary'>
            <Button type='button' onClick={onCancel}>Cancel</Button>

            <Button type='submit'>Send</Button>
        </ButtonGroup>
    </form>;
};