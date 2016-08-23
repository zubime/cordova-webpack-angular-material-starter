var webpack = require("webpack");
var CordovaPlugin = require('webpack-cordova-plugin');

module.exports = {
  entry: {
    vendor:[
      'angular-material',
      'angular-material/angular-material.css',
      'animate.css',
      'webpack-material-design-icons'
    ],
    app:["./app/app-module.es6"]},
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new CordovaPlugin({
      config: 'config.xml',                     // Location of Cordova' config.xml (will be created if not found)
      src: 'index.html',            // Set entry-point of cordova in config.xml
      version: true,                            // Set config.xml' version. (true = use version from package.json)
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/,
        loader: "style!css"
      },
      { test: /\.es6$/, exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      },{
        test: /\.html$/,
        loader: "ng-cache"
      },{
        test: /\.json$/,
        loader: "json-loader"
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
