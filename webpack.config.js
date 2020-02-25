const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Transpiling and Bundling config
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './app/App.tsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};

// For local development
module.exports.devServer = {
    contentBase: './build',
    port: 9000
};

module.exports.devtool = 'inline-source-map';
