'use strict'

import path from "path"

export default {
    entry: './src/apps/web/main.js',
    output: {
        path: path.join(__dirname, "www", "app"),
        filename: "app.js",
        publicPath: "app",
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            particles: 'src/particles',
        },
        extensions: ['', '.js', '.jsx']
    },
}