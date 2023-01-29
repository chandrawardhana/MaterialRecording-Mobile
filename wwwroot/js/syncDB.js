// Initialize method in JavaScript code
export function mountAndInitializeDbFile() {
    FS.mkdir('/database');
    FS.mount(IDBFS, {}, '/database');
    return syncDatabaseFiles();
}

export function syncDatabaseFiles() {

    return new Promise((resolve, reject) =&gt; {
        FS.syncfs((err) =&gt; {
            if (err) {
                console.log('syncfs failed. Error:', err);
                reject(err);
            }
            else {
                console.log('synced successfull.');
                resolve();
            }
        });
    });
}