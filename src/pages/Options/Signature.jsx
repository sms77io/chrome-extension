import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Signature = ({onChange, signature}) => {
    return <TextField
        fullWidth
        label={chrome.i18n.getMessage('signature_label')}
        multiline
        name='signature'
        onChange={onChange}
        placeholder={chrome.i18n.getMessage('signature')}
        rows={3}
        value={signature}
    />;
};
