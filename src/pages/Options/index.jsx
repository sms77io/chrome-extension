import React, {useState} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Storage} from '../../util/Storage';
import SmsOptions from '../../components/SmsOptions';
import setDefaults, {defaultStorage} from '../../util/setDefaults';
import GeneralOptions from '../../components/GeneralOptions';

export const Options = () => {
    const classes = makeStyles(t => ({
        root: {
            '& .MuiTextField-root, .MuiFormControl-root': {
                marginBottom: t.spacing(0),
            },
        },
    }))();

    const [options, setOptions] = useState(defaultStorage);

    const handleChange = o => setOptions({...options, ...o});

    const handleRestoreDefaults = async () => {
        await Storage.clear();

        await setDefaults();
    };

    return <Container>
        <CssBaseline/>

        <form className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Sms77.io {chrome.i18n.getMessage('options')}</h1>

                <Button onClick={handleRestoreDefaults}>
                    {chrome.i18n.getMessage('restore_defaults')}</Button>
            </div>

            <h2>General</h2>
            <GeneralOptions handleChange={handleChange}/>

            <h2>SMS</h2>
            <SmsOptions handleChange={handleChange} setOptions={setOptions}
                        persist/>
        </form>
    </Container>;
};

render(<Options/>, document.body.appendChild(document.createElement('div')));