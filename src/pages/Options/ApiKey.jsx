import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const ApiKey = ({value, onChange}) => {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => setApiKey(value), [value]);

    return <TextField
        fullWidth
        label={chrome.i18n.getMessage('api_key_required')}
        name='apiKey'
        onChange={onChange}
        placeholder={chrome.i18n.getMessage('api_key')}
        required
        value={apiKey}
    />;
};