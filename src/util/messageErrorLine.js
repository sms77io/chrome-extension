export default (params, res) => chrome.i18n.getMessage('send_msg_error', [params.to])
    + JSON.stringify(res)