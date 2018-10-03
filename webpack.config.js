const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './frontend/index.js',
    mode: 'development',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    // plugins: [
    //     new HtmlWebpackPlugin({template : './static/index.tm'})
    // ],
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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash:8].[ext]',
                    },
                }],
            }
        ]
    }
};