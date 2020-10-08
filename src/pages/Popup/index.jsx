import 'roboto-fontface/css/roboto/sass/roboto-fontface-black.scss';
import {render} from 'react-dom';
import React, {useState} from 'react';
import TextsmsIcon from '@material-ui/icons/Textsms';
import CallIcon from '@material-ui/icons/Call';
import Settings from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

import logo from '../../assets/img/logo.svg';
import {Sms} from '../../components/Sms';
import {Voice} from '../../components/Voice';

export const Popup = () => {
    const [stage, setStage] = useState('root');

    const classes = makeStyles({
        container: {
            paddingBottom: '15px',
            paddingTop: '15px',
        },
        logo: {
            display: 'block',
            margin: '0 auto',
            maxWidth: '150px',
            paddingBottom: '15px',
        },
    })();

    const switcher = () => {
        switch (stage) {
            case 'send':
                return <Sms onSubmit={() => setStage('root')}
                            onCancel={() => setStage('root')}/>;
            case 'voice':
                return <Voice onSubmit={() => setStage('root')}
                              onCancel={() => setStage('root')}/>;
            default:
                return <ButtonGroup fullWidth orientation={'vertical'}>
                    <Button onClick={() => chrome.runtime.openOptionsPage()}
                            color={'secondary'}
                            startIcon={
                                <Settings/>}>{chrome.i18n.getMessage('options')}</Button>

                    <Button onClick={() => setStage('send')}
                            startIcon={
                                <TextsmsIcon/>}>{chrome.i18n.getMessage('send_sms')}</Button>

                    <Button onClick={() => setStage('voice')}
                            startIcon={
                                <CallIcon/>}>{chrome.i18n.getMessage('send_voice')}</Button>
                </ButtonGroup>;
        }
    };

    return <Container className={classes.container}>
        <CssBaseline/>

        <a href='https://www.sms77.io' target='_blank' rel='noopener'>
            <img src={logo} alt={chrome.i18n.getMessage('sms77_logo')}
                 className={classes.logo}/>
        </a>

        {switcher()}
    </Container>;
};

render(
    <Popup/>, window.document.body.appendChild(document.createElement('div')));