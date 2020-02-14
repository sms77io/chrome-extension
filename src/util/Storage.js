export class Storage {
    static get(mixed) {
        return Storage._toPromise('get', mixed);
    }

    static set(obj) {
        return Storage._toPromise('set', obj);
    }

    static _toPromise(method, data) {
        return new Promise((resolve, reject) =>
            chrome.storage.sync[method](data, result =>
                chrome.runtime.lastError
                    ? reject(Error(chrome.runtime.lastError))
                    : resolve(result ? result[data] ? result[data] : result : data)
            )
        );
    }
}