module.exports = {
  // entry: './src/main', // Vue App
  // entry: './notesapp/main', // Notes App
  entry: './testapp/main', // Test App
  output: {
    path: './build',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel',
    },
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}