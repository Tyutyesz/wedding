
        const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');
        const webpack = require('webpack');
        
        module.exports = {
            devServer: {
                host: '0.0.0.0',
                disableHostCheck: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
        
            },
            entry: './src/assets/scripts/app',
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'app.[contenthash:8].js',
                publicPath: '/',
            },
            resolve: {
                modules: [
                    'node_modules',
                    path.resolve(__dirname, 'src'),
                ],
                extensions: ['.js'],
                alias: {
                    '@scss': path.resolve(__dirname, './src/assets/styles'),
                    '@js': path.resolve(__dirname, 'src/assets/script'),
                    createjs: 'createjs/builds/1.0.0/createjs.js',
                },
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'Landing Page',
                    template: './src/index.html',
                    inject: true,
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                    },
                }),
        
        
                new MiniCssExtractPlugin({
                    filename: 'main.css',
                }),
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                    createjs: 'createjs',
                    Sound: 'sound',
                }),
            ],
            devtool: 'source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                            },
                        },
                    },
                    { test: /\.js$/, loader: 'imports-loader?define=>false' },
                    {
                        test: [/\.css$|.scss$/],
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/',
                            },
                        }],
                    },
                    {
                        test: /\.json$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/images/',
                                    publicPath: 'assets/images/',
                                },
                            },
                        ],
                    },
                    {
                        test: /\.html$/,
                        include: path.join(__dirname, 'src/views'),
                        loader: 'html-loader',
                        options: {
                            interpolate: true,
                        },
                    },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/images/',
                                    publicPath: 'assets/images/',
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(mp3|mov)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/media/',
                                    publicPath: 'assets/media/',
                                },
                            },
                        ],
                    },
                    /* {
                        test: /\.mp4$/,
                        use: 'file-loader?name=assets/media/[name].[ext]',
                    }, */
                    {
                        test: /\.mp4$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/media/',
                                    publicPath: 'assets/media/',
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(obj|mtl)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/objects/',
                            publicPath: 'assets/objects/',
                        },
                    },
                    {
                        test: /\.glsl$/,
                        use: [
                            {
                                loader: 'webpack-glsl-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/shaders/',
                                    publicPath: 'assets/shaders/',
                                },
                            },
                        ],
                    },
                    {
                        test: /\.mp4$/,
                        loader: 'url?limit=10000&mimetype=video/mp4',
                    },
                ],
            },
        };

        