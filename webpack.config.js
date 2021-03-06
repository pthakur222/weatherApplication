var path = require('path');
var webpack = require('webpack');
    
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public', 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
				test: /\.css$/,
				loaders: 'style-loader!css-loader',
			},
        ]
    },
    devtool: 'source-map'
};
