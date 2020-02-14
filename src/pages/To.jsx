import React from 'react';
import TextField from '@material-ui/core/TextField';

export const To = ({onChange, to}) => {
    return <TextField
        fullWidth
        helperText='Please notice that if you set a "to" value you will not be asked again before sending SMS.'
        label='To'
        name='to'
        onChange={onChange}
        placeholder='To'
        value={to}
    />;
};