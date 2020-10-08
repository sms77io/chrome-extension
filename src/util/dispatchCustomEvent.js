export default (res, errors, params) =>
    window.dispatchEvent(new CustomEvent('sms77send', {
        detail: {
            errors,
            params,
            res,
        }
    }));