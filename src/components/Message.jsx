import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default ({children, handleSubmit, handleCancel, h1}) => <form
    onSubmit={handleSubmit}>
    <h1 style={{textAlign: 'center'}}>{chrome.i18n.getMessage(h1)}</h1>

    {children}

    <ButtonGroup fullWidth color='primary'>
        <Button type='button'
                onClick={handleCancel}>{chrome.i18n.getMessage('cancel')}</Button>

        <Button type='submit'>{chrome.i18n.getMessage(h1)}</Button>
    </ButtonGroup>
</form>;