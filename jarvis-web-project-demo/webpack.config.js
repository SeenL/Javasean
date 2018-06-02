var path = require('path')

var APP_DIRECTORY = path.join(__dirname, 'app')

var JS_DIRECTORY = path.join(__dirname, 'js')

module.exports = {
  context: JS_DIRECTORY,
  entry: './main',

  output: {
   path: APP_DIRECTORY,
   filename: 'bundle.js'
  },

resolve: {
  extensions: ['.js','.css']

}

}







