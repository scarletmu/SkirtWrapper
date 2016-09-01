const webpack = require('webpack');

module.exports = {
    context: __dirname + "/app/js",
    entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080/html',
    './app.jsx'
    ],
    output: {
        path: __dirname + '/app/js/',
        filename: 'app.js'
    },
    watch: process.env.NODE_ENV === 'development' ? true : false,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': `"${process.env.NODE_ENV}"`
            }
        })
    ]
};