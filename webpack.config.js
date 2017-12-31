const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/bundle.js"
    },

    resolve: {
        modules: [__dirname + 'src', "node_modules"],
        extensions: [".js", ".jsx", ".scss", ".css", ".html"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['dist/bundle.js', 'index.html'],
            server: {baseDir: ['./']}
        })
    ]
};