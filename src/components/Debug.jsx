import React from 'react';

import {Radios} from './Radios';

export const Debug = ({onChange, value}) => <Radios
    entries={[{value: 1, label: 'Enable Debug'}, {value: 0, label: 'Disable Debug'}]}
    label='Enable Debug'
    name='debug'
    onChange={onChange}
    value={value}
/>;