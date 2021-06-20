const path = require('path');
var urljoin = require('url-join');

const url = new URL('https://localhost:2368/blog');
const STATIC_IMAGE_URL_PREFIX = 'content/images';

module.exports = {
    url: url.href,
    getContentPath(name) {
        return path.resolve(process.cwd(), 'content', name);
    },

    getContentUrl(filePath) {
        return urljoin(url.pathname, STATIC_IMAGE_URL_PREFIX, filePath);
    }
};
