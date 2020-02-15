import React from 'react';

import {Radios} from '../../components/Radios';

export const SignaturePosition = ({onChange, signaturePosition}) => <Radios
    entries={[{value: 'append', label: 'Append Signature'}, {value: 'prepend', label: 'Prepend Signature'}]}
    label='Signature Positioning'
    name='signaturePosition'
    onChange={onChange}
    value={signaturePosition}
/>;