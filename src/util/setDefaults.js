import {Storage} from './Storage';
import {generalDefaults, smsDefaults} from '../defaults';

export const defaultStorage = {
    general: generalDefaults,
    sms: smsDefaults,
};

export default async () => await Storage.set(defaultStorage);