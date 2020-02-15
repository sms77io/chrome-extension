import React from 'react';

import {Radios} from './Radios';

export const Type = ({onChange, type}) => <Radios
    entries={[{value: 'direct', label: 'Direct SMS'}, {value: 'economy', label: 'Economy SMS'}]}
    label='Defines the SMS Type'
    name='type'
    onChange={onChange}
    value={type}
/>;