const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    target: 'node',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'image-store',
            type: 'umd',
            umdNamedDefine: true
        }
    },
    externals: {
        sharp: 'commonjs sharp'
    }
};
