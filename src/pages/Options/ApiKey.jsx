import React from 'react';
import TextField from '@material-ui/core/TextField';

export const ApiKey = ({apiKey, onChange}) => {
    return <TextField
        fullWidth
        label='API key from sms77.io required for sending'
        name='apiKey'
        onChange={onChange}
        placeholder='API key'
        required
        value={apiKey}
    />;
};