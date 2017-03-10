/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-18T23:58:38+01:00
* @Email:  me@andreeray.se
* @Filename: webpack.config.js
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T06:57:16+01:00
*/


var webpack = require('webpack')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        './app/app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jquery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components'
        ],
        alias: {
            styles: 'app/styles/app',
            api: 'app/api/api',
            fakeApi: 'app/api/fakeApi'
        },
        extensions: ['','.js','.jsx','.scss']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheep-module-eval-source-map'
}
