import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const ApiKey = ({value, onChange}) => {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => setApiKey(value), [value]);

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