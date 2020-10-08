import Button from '@material-ui/core/Button';
import {Save} from '@material-ui/icons';
import React from 'react';
import {Storage} from './Storage';

export default (persist, storagePath, value) => {
    const [storageProp, prop] = storagePath.split('.');

    const handleClick = async () => {
        const s = await Storage.get(null);

        s[storageProp][prop] = value;

        await Storage.set(s);
    };

    return {
        endAdornment: persist
            ? <Button aria-label={chrome.i18n.getMessage('save')}>
                <Save onClick={handleClick}/>
            </Button>
            : <></>
    };
}