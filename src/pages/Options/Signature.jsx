import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Signature = ({onChange, signature}) => {
    return <TextField
        helperText='A signature gets added to all sent messages'
        label='Signature'
        name='signature'
        onChange={onChange}
        placeholder='Signature'
        rows={3}
        value={signature}
    />;
};
