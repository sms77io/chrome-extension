import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const To = ({onChange, value}) => {
    const [to, setTo] = useState('');

    useEffect(() => setTo(value), [value]);

    return <TextField
        fullWidth
        label={chrome.i18n.getMessage('to')}
        name='to'
        onChange={e => onChange(e.target.value)}
        placeholder={chrome.i18n.getMessage('to')}
        value={to}
    />;
};