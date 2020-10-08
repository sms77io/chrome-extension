import React from 'react';
import {TextOption} from './TextOption';

export const To = ({onChange, persist}) =>
    <TextOption storagePath='sms.to' persist={persist} onChange={onChange}/>;