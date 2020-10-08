import React, {useEffect, useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Storage} from '../util/Storage';
import {smsDefaults} from '../defaults';

export const Bool = ({onChange, name, persist, yes}) => {
    const [checked, setChecked] = useState(smsDefaults[name]);
    const yesLabel = chrome.i18n.getMessage(yes);

    const handleChange = async e => {
        const checked = e.target.checked;

        setChecked(checked);

        if (persist) {
            const s = await Storage.get(null);
            s.sms[name] = checked;
            await Storage.set(s);
        }

        onChange({[name]: checked});
    };

    useEffect(() => {
        Storage.get('sms').then(o => setChecked(o[name]));
    }, []);

    return <FormControlLabel
        control={<Switch checked={Boolean(checked)}
                         onChange={handleChange} name={name}/>}
        label={yesLabel}
    />;
};