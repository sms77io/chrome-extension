import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Storage} from '../util/Storage';
import saveInput from '../util/saveInput';

export default ({onChange, persist}) => {
    const [value, setValue] = React.useState(86400000);

    const handleSliderChange = (e, v) => setValue(v);

    const handleInputChange = async e => {
        const ttl = e.target.value === '' ? '' : Number(e.target.value);
        setValue(ttl);
        onChange({ttl});

        if (persist) {
            const s = await Storage.get(null);
            s.sms.ttl = ttl;
            await Storage.set(s);
        }
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const inputProps = {
        'aria-labelledby': 'input-slider',
        max: 86400000,
        min: 300000,
        step: 10,
        type: 'number',
    };

    return <>
        <Grid container spacing={2} alignItems='center'>
            <Grid item>
                <Typography id='input-slider' variant='h6' component='span'>
                    TTL
                </Typography>
            </Grid>
            <Grid item xs>
                <Slider
                    aria-labelledby='input-slider'
                    onChange={handleSliderChange}
                    value={typeof value === 'number' ? value : 0}
                />
            </Grid>
            <Grid item>
                <Input
                    inputProps={inputProps}
                    margin='dense'
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    value={value}
                    {...saveInput(persist, 'sms.ttl', value)}
                />
            </Grid>
        </Grid>
    </>;
}