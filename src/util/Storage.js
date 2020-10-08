const storage = chrome.storage.sync;
const lastError = chrome.runtime.lastError;

export class Storage {
    static toPromise = (method, data) =>
        new Promise((res, rej) =>
            storage[method](data, result =>
                lastError
                    ? rej(Error(lastError))
                    : res(result ? data in result ? result[data] : result : data)
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

    static async  log(mixed = null) {
        // noinspection JSForgottenDebugStatementInspection
        console.log(await Storage.get(mixed));
    }


    static clear() {
        return new Promise((res, rej) =>
            storage.clear(() =>
                lastError
                    ? rej(Error(lastError))
                    : res(true)
            )
        );
    }
}