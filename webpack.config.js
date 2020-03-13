const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "app.bundle.js"
    },
    module: {
        rules: [
           //  {
           //      test: /\.js$/,
           //      exclude: /node_modules/,
           //      use: {
           //          loader: "babel-loader"
           //      }
           //  }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/templates/index.html',
            title: 'Template App'
        })
    ]
};
