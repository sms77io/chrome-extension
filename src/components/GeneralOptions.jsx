import React from 'react';
import {TextOption} from './TextOption';
import {Radios} from './Radios';

const signaturePositions = [
    {
        label: chrome.i18n.getMessage('signaturePosition_append'),
        value: 'append',
    },
    {
        label: chrome.i18n.getMessage('signaturePosition_prepend'),
        value: 'prepend',
    },
];

export default ({handleChange}) => <>
    <TextOption
        label='apiKeyRequired'
        persist={true}
        required
        storagePath='general.apiKey'
    />

    <TextOption
        label='signature_label'
        multiline
        onChange={handleChange}
        persist={true}
        rows={3}
        storagePath='general.signature'
    />

    <Radios
        entries={signaturePositions}
        label={chrome.i18n.getMessage('signaturePosition')}
        name='signaturePosition'
        onChange={handleChange}
        storagePath='general.signaturePosition'
    />
</>;