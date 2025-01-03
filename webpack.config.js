const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    // Точка входа — главный файл приложения
    entry: [
        './src/index.tsx'
    ],
    output: {
        // Папка для выходных файлов
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            // Обработка JavaScript/JSX файлов
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            // Обработка TypeScript/TSX файлов
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            // Обработка модульных PostCSS файлов
            {
                test: /\.module\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                            importLoaders: 1,
                            esModule: false, // Для экспорта объекта классов как default
                        },
                    },
                    'postcss-loader',
                ],
            },
            // Обработка PostCSS файлов
            {
                test: /\.pcss$/,
                exclude: /\.module\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            // Обработка обычных CSS файлов
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // Обработка изображений
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                // Копирование файлов в выходную папку
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        // Включение горячей перезагрузки (HMR)
        hot: true,
        // Открытие приложения в браузере при запуске
        open: false,
        // Порт разработки
        port: 3000,
        static: [
            {
                // Папка для файлов сборки
                directory: path.join(__dirname, 'dist'),
                // Доступные пути
                publicPath: '/',
            },
            {
                // Папка для статических файлов (например, favicon)
                directory: path.join(__dirname, 'public'),
                publicPath: '/',
                // Отслеживание изменений в файлах
                watch: true,
            },
        ],
        client: {
            // Показ ошибок сборки прямо в браузере
            overlay: true
        }
    },
    resolve: {
        // Расширения для поиска файлов
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Шаблон для HTML-файла
            template: './public/index.html',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    // Копирование всех файлов из public
                    from: 'public',
                    // В корень выходной папки
                    to: '',
                    globOptions: {
                        // Исключение, чтобы не копировать index.html (им занимается HtmlWebpackPlugin)
                        ignore: ['**/index.html'],
                    }
                }
            ],
        }),
        // Извлечение CSS в отдельные файлы
        new MiniCssExtractPlugin(),
        // Поддержка React Fast Refresh для HMR
        new ReactRefreshWebpackPlugin()
    ],
    optimization: {
        // Выделение runtime в отдельный файл
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // Выделение сторонних библиотек
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = (env, argv) => {
    if (argv.hot) {
        // При использовании горячей перезагрузки contenthash не работает
        config.output.filename = '[name].[hash].js';
    }

    return config;
};