const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    mode: 'development',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    module : {
        rules : [
            {
                test: /\.js/,
                include: path.resolve(__dirname, 'frontend'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: { modules: true }
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-loaded.[ext]',
                    },
                }],
            },
        ]
    }
};