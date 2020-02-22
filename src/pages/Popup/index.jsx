import 'roboto-fontface/css/roboto/sass/roboto-fontface-black.scss';
import {render} from 'react-dom';
import React, {useState} from 'react';
import Textsms from '@material-ui/icons/Textsms';
import Settings from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

import logo from '../../assets/img/logo.svg';
import {Send} from './Send';

export const Popup = () => {
    const [stage, setStage] = useState('root');

    const classes = makeStyles({
        container: {
            paddingTop: '15px',
            paddingBottom: '15px',
        },
        logo: {
            display: 'block',
            margin: '0 auto',
            maxWidth: '150px',
            paddingBottom: '15px',
        },
    })();

    return <Container className={classes.container}>
        <CssBaseline/>

        <a href='https://www.sms77.io' target='_blank' rel='noopener'>
            <img src={logo} alt='sms77io Logo' className={classes.logo}/>
        </a>

        {
            'send' === stage ?
                <Send onSubmit={() => setStage('root')} onCancel={() => setStage('root')}/>
                : <ButtonGroup fullWidth orientation={'vertical'}>
                    <Button onClick={() => chrome.runtime.openOptionsPage()} color={'secondary'}
                            startIcon={<Settings/>}>Options</Button>

                    <Button onClick={() => setStage('send')} startIcon={<Textsms/>}>Send SMS</Button>
                </ButtonGroup>
        }
    </Container>;
};

render(<Popup/>, window.document.body.appendChild(document.createElement('div')));