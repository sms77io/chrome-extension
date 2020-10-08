import {From} from './From';
import {To} from './To';
import Ttl from './Ttl';
import React, {useEffect} from 'react';
import {Storage} from '../util/Storage';
import setDefaults from '../util/setDefaults';
import {Bool} from './Bool';
import {TextOption} from './TextOption';
import {Text} from './Text';

export default ({handleChange, persist, setOptions}) => {
    useEffect(() => {
        Storage.get(null).then(async s => {
            if (0 === Object.keys(s).length) {
                await setDefaults();
            }

            setOptions(s);

            await Storage.log();
        });
    }, []);

    return <>
        <Text persist={persist} onChange={handleChange}/>

        <From persist={persist} onChange={handleChange}/>

        <To persist={persist} onChange={handleChange}/>

        <Bool yes='debug_enable'
              name='debug'
              onChange={handleChange}
              persist={persist}/>

        <Bool yes='flash_enable' name='flash'
              onChange={handleChange}
              persist={persist}/>

        <Bool yes='noReload_enable'
              name='no_reload'
              onChange={handleChange}
              persist={persist}/>

        <Bool yes='unicode_enable'
              name='unicode'
              onChange={handleChange}
              persist={persist}/>

        <Bool yes='utf8_enable'
              name='utf8'
              onChange={handleChange}
              persist={persist}/>

        <Bool
            yes='performanceTracking_enable'
            name='performance_tracking'
            onChange={handleChange}
            persist={persist}/>

        <TextOption storagePath='sms.foreign_id' persist={persist}
                    onChange={handleChange}/>

        <TextOption persist={persist} storagePath='sms.label'
                    onChange={handleChange}/>

        <Ttl persist={persist} onChange={handleChange}/>

        <TextOption persist={persist} storagePath='sms.delay'
                    onChange={handleChange}/>

        <TextOption persist={persist} storagePath='sms.udh'
                    onChange={handleChange}/>
    </>;
}