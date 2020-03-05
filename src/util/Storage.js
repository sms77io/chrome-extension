const storage = chrome.storage.sync;
const lastError = chrome.runtime.lastError;

export class Storage {
    static toPromise = (method, data) =>
        new Promise((resolve, reject) =>
            storage[method](data, result =>
                lastError
                    ? reject(Error(lastError))
                    : resolve(result ? result[data] ? result[data] : result : data)
            )
        );

    static get(mixed) {
        return Storage.toPromise('get', mixed);
    }

    static getBytesInUse(mixed) {
        return Storage.toPromise('getBytesInUse', mixed);
    }

    static set(obj) {
        return Storage.toPromise('set', obj);
    }
}