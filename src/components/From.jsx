import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';

export const From = ({value, onChange}) => {
    const [from, setFrom] = useState('');

    useEffect(() => setFrom(value), [value]);

    return <TextField
        fullWidth
        label='Sender Identifier'
        name='from'
        onChange={e => onChange(e.target.value)}
        placeholder='Sender Identifier'
        value={from}
    />;
};