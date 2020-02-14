import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const SignaturePosition = ({onChange, signaturePosition}) => <FormControl component='fieldset'
                                                                                 style={{textAlign: 'center'}}>
    <FormLabel component='legend'>Positioning</FormLabel>

    <RadioGroup aria-label='Signature position'
                name='signaturePosition'
                onChange={onChange}
                value={signaturePosition}>
        <FormControlLabel value='append' control={<Radio/>} label='Append after text'/>
        <FormControlLabel value='prepend' control={<Radio/>} label='Prepend before text'/>
    </RadioGroup>
</FormControl>;