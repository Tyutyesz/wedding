
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(webpackBaseConfig, {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin(),
        ],
    },
    output: {
        publicPath: '',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify('Prod'),
        }),
    ],
});
        