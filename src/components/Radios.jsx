import React, {useEffect, useState} from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Storage} from '../util/Storage';

export const Radios = ({entries, onChange, label, name, storagePath, persist}) => {
    const [storageProp, prop] = storagePath.split('.');
    const [value, setValue] = useState('');

    useEffect(() => {
        Storage.get(storageProp).then(o => setValue(o[prop]));
    }, []);

    const handleChange = async e => {
        const v = e.target.value;
        setValue(v);
        onChange({[name]: v});

        if (persist) {
            const s = await Storage.get(null);

            s[storageProp][prop] = v;

            await Storage.set(s);
        }
    };

    return <FormControl
        component='fieldset'
        fullWidth
        style={{textAlign: 'center'}}
    >
        <FormLabel
            aria-label={label}
            component='legend'
            style={{display: 'none'}}
        >{label}</FormLabel>

        <RadioGroup
            aria-label={label}
            name={name}
            onChange={handleChange}
            value={value}
        >
            {entries.map(({value, label}) => <FormControlLabel
                control={<Radio/>}
                key={value}
                label={label}
                labelPlacement='end'
                value={value}
            />)}
        </RadioGroup>
    </FormControl>;
};
