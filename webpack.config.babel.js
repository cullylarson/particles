'use strict'

import path from "path"

export default {
    entry: './src/apps/web/main.js',
    output: {
        path: path.join(__dirname, "www"),
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel',
            }
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