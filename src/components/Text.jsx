import React from 'react';
import {TextOption} from './TextOption';

export const Text = ({onChange, persist}) => <TextOption
    label='msg'
    multiline
    onChange={onChange}
    persist={persist}
    placeholder='msg_placeholder'
    required
    rows='3'
    storagePath='sms.text'
/>;