import dispatchCustomEvent from './dispatchCustomEvent';

export default (params, handler) => {
    console.log({params});

    let res = null;
    const lines = [];

    handler(res, lines);

    dispatchCustomEvent(res, [], params);
}