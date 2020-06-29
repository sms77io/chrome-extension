import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Storage} from '../../util/Storage';
import {From} from '../../components/From';
import {To} from '../../components/To';
import {Signature} from './Signature';
import {SignaturePosition} from './SignaturePosition';
import {ApiKey} from './ApiKey';
import {Debug} from '../../components/Debug';

const defaultState = {
    apiKey: '',
    debug: 0,
    from: '',
    signature: '',
    signaturePosition: 'append',
    to: '',
};

export const Options = () => {
    const classes = makeStyles(t => ({
        root: {
            '& .MuiTextField-root, .MuiFormControl-root': {
                marginBottom: t.spacing(0),
            },
        },
    }))();

    const [state, setState] = useState(defaultState);

    const onSubmit = async ev => {
        ev.preventDefault();

        await Storage.set(state);
    };

    const handleChange = ({target: {name, value}}) => setState({...state, [name]: value});

    useEffect(() => {
        Storage.get(null).then(s => {
            const isStorageEmpty = 0 === Object.keys(s).length;

            if (isStorageEmpty) {
                Storage.set(defaultState);
            } else {
                setState(s);
            }
        });
    }, []);

    return <Container>
        <CssBaseline/>

        <form className={classes.root} onSubmit={onSubmit}>
            <ApiKey onChange={handleChange} value={state.apiKey}/>

            <From onChange={from => setState({...state, from})} value={state.from}/>

            <To onChange={to => setState({...state, to})} value={state.to}/>

            <Signature onChange={handleChange} signature={state.signature}/>

            <SignaturePosition onChange={handleChange} signaturePosition={state.signaturePosition}/>

            <Debug onChange={() => setState({...state, debug: Boolean(e.target.checked)})}
                   value={state.debug}/>

            <Button fullWidth type='submit'>{chrome.i18n.getMessage('submit')}</Button>
        </form>
    </Container>;
};

render(<Options/>, document.body.appendChild(document.createElement('div')));