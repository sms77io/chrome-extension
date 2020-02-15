import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Signature = ({onChange, signature}) => {
    return <TextField
        fullWidth
        label='Signature added to all outgoing messages'
        multiline
        name='signature'
        onChange={onChange}
        placeholder='Signature'
        rows={3}
        value={signature}
    />;
};
