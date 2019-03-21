// webpack.config.js
var path          = require('path');
var webpack       = require('webpack');
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: './app/index.jsx',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: '[name]-[hash].js'
    },
    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' })
    ],
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};
