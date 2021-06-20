const path = require('path');
var urljoin = require('url-join');

const utils = require('./utils');

const STATIC_IMAGE_URL_PREFIX = 'content/images';

module.exports = Object.assign(utils.loadConfig(__dirname), {
    getContentPath(name) {
        if (this.paths && this.paths.contentPath) {
            return path.join(this.paths.contentPath, name);
        }

        return path.join(path.dirname(this._configPath), 'content', name);
    },

    getContentUrl(filePath) {
        const url = new URL(this.url);
        return urljoin(url.pathname, STATIC_IMAGE_URL_PREFIX, filePath);
    }
});
