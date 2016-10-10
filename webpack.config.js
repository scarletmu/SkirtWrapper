const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: [
    // 'webpack-dev-server/client?http://localhost:8080/',
    // 'webpack/hot/dev-server',
     __dirname + '/app/js/app.jsx'
    ],
    output: {
        path: __dirname + '/app/js/',
        filename: 'app.js'
    },
    // watch: process.env.NODE_ENV === 'development' ? true : false,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel']
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};