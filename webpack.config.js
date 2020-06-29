process.env.BABEL_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const fileExtensions = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'eot',
    'otf',
    'svg',
    'ttf',
    'woff',
    'woff2',
];
const PORT = process.env.PORT || 3000;
const isDev = 'development' === process.env.NODE_ENV;
const outDir = path.join(__dirname, 'build');

const pageTemplate = title => {
    const name = title.toLowerCase();

    return new HtmlWebpackPlugin({
        cache: false,
        chunks: [name],
        filename: `${name}.html`,
        template: path.join(__dirname, 'src', 'pages', 'template.ejs'),
        title,
    });
};

module.exports = {
    devServer: isDev ? {
        contentBase: outDir,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: false,
        port: PORT,
        writeToDisk: true,
    } : {},
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: (() => {
        const prod = {
            background: path.join(__dirname, 'src', 'pages', 'Background', 'index.js'),
            contentScripts: path.join(__dirname, 'src', 'contentScripts.js'),
            options: path.join(__dirname, 'src', 'pages', 'Options', 'index.jsx'),
            popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.jsx'),
        };

        if (isDev) {
            for (const entryName in prod) {
                prod[entryName] = [
                    `webpack-dev-server/client?http://localhost:${PORT}`,
                    'webpack/hot/dev-server',
                ].concat(prod[entryName]);
            }
        }

        return prod;
    })(),
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules\/(?!(roboto-fontface)).*/,
            },
            {
                test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
                loader: 'file-loader?name=[name].[ext]',
                exclude: /node_modules\/(?!(roboto-fontface)).*/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: outDir,
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({verbose: true}), // clean the build folder
        new webpack.EnvironmentPlugin(['NODE_ENV']), // expose and write the allowed env vars on the compiled bundle
        new CopyWebpackPlugin({
            patterns: [
                {
                    force: true,
                    from: 'src/manifest.json',
                    to: outDir,
                    transform(content) {
                        return Buffer.from( // generate manifest.json using package.json information
                            JSON.stringify({
                                description: process.env.npm_package_description,
                                version: process.env.npm_package_version,
                                ...JSON.parse(content.toString()),
                            })
                        );
                    },
                },
                {
                    force: true,
                    from: 'src/_locales',
                    to: `${outDir}/_locales`,
                    toType: 'dir',
                },
            ],
        }),
        pageTemplate('Options'),
        pageTemplate('Popup'),
        new WriteFilePlugin(),
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {
        },
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: fileExtensions.map(ext => '.' + ext).concat(['.jsx', '.js', '.css']),
    },
};