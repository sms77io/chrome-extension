import React from 'react';
import TextField from '@material-ui/core/TextField';

export const ApiKey = ({apiKey, onChange}) => {
    return <TextField
        fullWidth
        helperText='An API key is required in order to send SMS. Get yours now at www.sms77.io.'
        label='API key'
        name='apiKey'
        onChange={onChange}
        placeholder='API key'
        value={apiKey}
    />;
};