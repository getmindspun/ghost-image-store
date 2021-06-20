const path = require('path');

const fs = require('fs-extra');

const config = require('./config');

/**
 * Saves a buffer in the targetPath
 * - buffer is an instance of Buffer
 * - returns a Promise which returns the full URL to retrieve the data
 */
function saveRawAs(buffer, targetPath) {
    const storagePath = path.join(this.storagePath, targetPath);
    const targetDir = path.dirname(storagePath);

    return fs.mkdirs(targetDir)
        .then(() => {
            return fs.writeFile(storagePath, buffer);
        })
        .then(() => {
            // For local file system storage can use relative path so add a slash
            return {
                url: config.getContentUrl(targetPath).replace(
                    new RegExp(`\\${path.sep}`, 'g'), '/'
                ),
                path: storagePath
            };
        });
}

module.exports = function (Store) {
    Object.assign(Store.prototype, {
        saveRawAs
    });
};
