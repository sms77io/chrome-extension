export const generalDefaults = {
    apiKey: '',
    signature: '',
    signaturePosition: 'append',
};

const messageDefaults = {
    from: '',
    text: '',
    to: '',
};

export const smsDefaults = {
    debug: 0,
    delay: '',
    flash: 0,
    foreign_id: '',
    label: '',
    no_reload: 0,
    performance_tracking: 0,
    ttl: 86400000,
    udh: '',
    unicode: 0,
    utf8: 0,
    ...messageDefaults,
};

export const xmlDefaults = {
    xml: 0,
    ...messageDefaults,
};