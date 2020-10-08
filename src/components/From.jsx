import React from 'react';
import {TextOption} from './TextOption';

export const From = ({onChange, persist}) => <TextOption
    onChange={onChange}
    persist={persist}
    storagePath='sms.from'
/>;