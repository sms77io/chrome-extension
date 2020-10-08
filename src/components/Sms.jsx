import React, {useState} from 'react';
import {sendSms} from '../util/sendSms';
import SmsOptions from './SmsOptions';
import {defaultStorage} from '../util/setDefaults';
import Message from './Message';

export const Sms = ({onSubmit, onCancel}) => {
    const [options, setOptions] = useState(defaultStorage);

    const handleChange = o => {
        const newState = options;
        newState.sms = {...newState.sms, ...o};

        setOptions(newState);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await sendSms(options);

        onSubmit();
    };

    return <Message h1='send_sms' handleSubmit={handleSubmit}
                    handleCancel={onCancel}>
        <SmsOptions handleChange={handleChange} setOptions={setOptions}/>
    </Message>;
};