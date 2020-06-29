import React from 'react';

import {Radios} from '../../components/Radios';

export const SignaturePosition = ({onChange, signaturePosition}) => <Radios
    entries={[
        {
            label: chrome.i18n.getMessage('signature_position_append'),
            value: 'append',
        },
        {
            label: chrome.i18n.getMessage('signature_position_prepend'),
            value: 'prepend',
        },
    ]}
    label={chrome.i18n.getMessage('signature_position')}
    name='signaturePosition'
    onChange={onChange}
    value={signaturePosition}
/>;