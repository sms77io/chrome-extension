import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

import {Storage} from '../../util/Storage';
import {ApiKey} from './ApiKey';
import {From} from '../../components/From';
import {To} from '../../components/To';
import {SignaturePosition} from './SignaturePosition';
import {Signature} from './Signature';
import {Type} from '../../components/Type';

export const Options = () => {
    const classes = makeStyles(t => ({
        root: {
            '& .MuiTextField-root, .MuiFormControl-root': {
                marginBottom: t.spacing(0),
            },
        },
    }))();

    const [state, setState] = useState({
        apiKey: '',
        from: '',
        signature: '',
        signaturePosition: 'append',
        to: '',
        type: 'direct',
    });

    const onSubmit = async ev => {
        ev.preventDefault();

        await Storage.set(state);
    };

    const handleChange = ({target: {name, value}}) => setState({...state, [name]: value});

    useEffect(() => {
        Storage.getBytesInUse(null).then(b => {
            if (0 !== b) { // dont load store values before init
                Storage.get(null).then(s => setState(s));
            }
        });
    }, []);

    return <Container>
        <form className={classes.root} onSubmit={onSubmit}>
            <ApiKey onChange={handleChange} apiKey={state.apiKey}/>

            <Type onChange={handleChange} type={state.type}/>

            <From onChange={from => setState({...state, from})} value={state.from}/>

            <To onChange={to => setState({...state, to})} value={state.to}/>

            <Signature onChange={handleChange} signature={state.signature}/>

            <SignaturePosition onChange={handleChange} signaturePosition={state.signaturePosition}/>

            <Button fullWidth type='submit'>Submit</Button>
        </form>
    </Container>;
};

render(<Options/>, document.body.appendChild(document.createElement('div')));