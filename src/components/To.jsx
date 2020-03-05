import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const To = ({onChange, value}) => {
    const [to, setTo] = useState('');

    useEffect(() => setTo(value), [value]);

    return <TextField
        fullWidth
        label='Recipient'
        name='to'
        onChange={e => onChange(e.target.value)}
        placeholder='Recipient'
        value={to}
    />;
};