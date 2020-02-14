process.env.BABEL_ENV = process.env.NODE_ENV;

const webpack = require('webpack'),
    path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WriteFilePlugin = require('write-file-webpack-plugin');

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

module.exports = {
    devServer: isDev ? {
        contentBase: path.join(__dirname, './build'),
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: false,
        port: PORT,
    } : {},
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: (() => {
        const prod = {
            options: path.join(__dirname, 'src', 'pages', 'Options', 'index.jsx'),
            popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.jsx'),
            background: path.join(__dirname, 'src', 'pages', 'Background', 'index.js'),
        };

        if (isDev) {
            for (const entryName in prod) {
                prod[entryName] = [
                    'webpack-dev-server/client?http://localhost:' + PORT,
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
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {
        },
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({ // clean the build folder
            verbose: true
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']), // expose and write the allowed env vars on the compiled bundle
        new CopyWebpackPlugin(
            [
                {
                    from: 'src/manifest.json',
                    to: path.join(__dirname, 'build'),
                    force: true,
                    transform(content) {
                        return Buffer.from( // generates the manifest file using the package.json information
                            JSON.stringify({
                                description: process.env.npm_package_description,
                                version: process.env.npm_package_version,
                                ...JSON.parse(content.toString()),
                            })
                        );
                    },
                },
            ],
            {
                logLevel: 'info',
                copyUnmodified: true,
            }
        ),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'template.html'),
            filename: 'options.html',
            chunks: ['options'],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'template.html'),
            filename: 'popup.html',
            chunks: ['popup'],
        }),
        new WriteFilePlugin(),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: fileExtensions.map(ext => '.' + ext).concat(['.jsx', '.js', '.css']),
    },
};