import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {Storage} from '../../util/Storage';
import {ApiKey} from './ApiKey';
import {From} from '../From';
import {To} from '../To';
import {SignaturePosition} from './SignaturePosition';
import {Signature} from './Signature';

export const Options = () => {
    const [state, setState] = useState({
        apiKey: '',
        to: '',
        from: '',
        signature: '',
        signaturePosition: 'append',
    });

    const onSubmit = async ev => {
        ev.preventDefault();

        await Storage.set(state);
    };

    const handleChange = ({target: {name, value}}) => setState({...state, [name]: value});

    useEffect(() => {
        Storage.get(null).then(s => setState(s));
    }, []);

    return <Container>
        <form onSubmit={onSubmit}>
            <ApiKey onChange={handleChange} apiKey={state.apiKey}/>

            <From onChange={handleChange} from={state.from}/>

            <To onChange={handleChange} to={state.to}/>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Signature onChange={handleChange} signature={state.signature}/>

                <SignaturePosition onChange={handleChange} signaturePosition={state.signaturePosition}/>
            </div>

            <Button type='submit'>Submit</Button>
        </form>
    </Container>;
};

render(<Options/>, document.body.appendChild(document.createElement('div')));