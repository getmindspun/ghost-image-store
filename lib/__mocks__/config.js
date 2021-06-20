const path = require('path');

const url = new URL('https://localhost:2368/blog');

module.exports = {
    url: url,
    getContentPath(name) {
        return path.resolve(process.cwd(), 'content', name);
    },

    getSiteUrl() {
        return url.origin;
    },

    getSubdir() {
        return url.pathname;
    }
};
