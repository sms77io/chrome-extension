import React from 'react';

import {Radios} from './Radios';

export const Debug = ({onChange, value}) => <Radios
    entries={[
        {
            label: chrome.i18n.getMessage('debug_enable'),
            value: 1,
        },
        {
            label: chrome.i18n.getMessage('debug_disable'),
            value: 0,
        },
    ]}
    label={chrome.i18n.getMessage('debug_enable')}
    name='debug'
    onChange={onChange}
    value={value}
/>;