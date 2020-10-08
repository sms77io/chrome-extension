import React, {useEffect, useState} from 'react';
import {To} from './To';
import {From} from './From';
import {Storage} from '../util/Storage';
import {Text} from './Text';
import {sendVoice} from '../util/sendVoice';
import {xmlDefaults} from '../defaults';
import {Bool} from './Bool';
import Message from './Message';

export const Voice = ({onSubmit, onCancel}) => {
    const [options, setOptions] = useState(xmlDefaults);

    useEffect(() => {
        Storage.get('sms').then(({from, to}) => {
            setOptions({...options, from, to});
        });
    }, []);

    const setValueState = o => setOptions({
        ...options,
        ...o
    });

    const handleSubmit = async e => {
        e.preventDefault();

        await sendVoice(options);

        onSubmit();
    };

    return <Message h1='send_voice' handleSubmit={handleSubmit}
                    handleCancel={onCancel}>
        <Text value={options.text} onChange={setValueState}/>

        <To onChange={setValueState}/>

        <From onChange={setValueState}/>

        <Bool yes='xml_enable' name='xml'
              onChange={setValueState}
              value={options.xml}/>
    </Message>;
};