import React from 'react';
import TextField from '@material-ui/core/TextField';

export const From = ({from, onChange}) => {
    return <TextField
        value={from}
        fullWidth
        helperText='Please notice that if you set a "from" value you will not be asked again before sending SMS.'
        label='From'
        placeholder='From'
        name='from'
        onChange={onChange}
    />;
};