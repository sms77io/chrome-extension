import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const From = ({value, onChange}) => {
    const [from, setFrom] = useState('');

    useEffect(() => setFrom(value), [value]);

    return <TextField
        fullWidth
        label={chrome.i18n.getMessage('from')}
        name='from'
        onChange={e => onChange(e.target.value)}
        placeholder={chrome.i18n.getMessage('from')}
        value={from}
    />;
};