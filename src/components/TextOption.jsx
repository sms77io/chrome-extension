import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Storage} from '../util/Storage';
import saveInput from '../util/saveInput';

export const TextOption = ({label, placeholder, storagePath, onChange, persist, ...props}) => {
    const [storageProp, prop] = storagePath.split('.');
    const [value, setValue] = useState('');

    useEffect(() => {
        Storage.get(storageProp).then(o => setValue(o[prop]));
    }, []);

    const handleChange = e => {
        const v = e.target.value;

        setValue(v);

        onChange && onChange({[prop]: v});
    };

    return <TextField
        fullWidth
        InputProps={saveInput(persist, `${storageProp}.${prop}`, value)}
        label={chrome.i18n.getMessage(label ? label : prop)}
        name={prop}
        onChange={handleChange}
        placeholder={chrome.i18n.getMessage(placeholder ? placeholder : prop)}
        value={value}
        {...props}
    />;
};