const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './assets/js/entry.js'), 
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '..'),    
        filename: 'dist/js/bundle.js'
    },
    plugins: [htmlWebpack],
    module: {

        test: /\.css$/,
        rules:['style-loader', 'css-loader']
    }
}


