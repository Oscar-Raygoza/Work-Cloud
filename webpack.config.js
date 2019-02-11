const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry: './assets/js/entry.js', 
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),    
        filename: 'dist/js/bundle.js'
    },
    plugins: [htmlWebpack],
    module: { }
}