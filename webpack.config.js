const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ],
};
