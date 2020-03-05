import {Storage} from './Storage';

export const getType = async type => {
    type = 'string' === typeof type && type.length
        ? type
        : await Storage.get('type');

    if (['direct', 'economy'].includes(type)) {
        return type;
    }

    return 'direct';
};