var webpack = require("webpack");
var CordovaPlugin = require('webpack-cordova-plugin');
var path = require("path");

module.exports = {
  entry: {
    vendor:[
      'angular-material',
      'angular-material/angular-material.css',
      'animate.css',
      'material-design-icons',
      'angular-resource',
      'angular-messages',
      'angular-ui-router',
      'ng-file-upload',
      'angular-translate',
      'angular-translate-storage-local',
      'angular-translate-loader-partial',
      'angular-translate-interpolation-messageformat',
      'angular-dynamic-locale',
      'ngstorage',
      'font-awesome/css/font-awesome.min.css',
      'svg-morpheus',
      'angular-material-icons'
    ],
    app:["./app/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "[name].bundle.js"
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
      { test: /\.js$/, exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      },{
        test: /\.html$/,
        loader: "html"
      },{
        test: /\.json$/,
        loader: "json-loader"
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },{
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
}
