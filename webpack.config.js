module.exports = {
  // entry: './src/main', // Vue App
  entry: './notesapp/main', // Notes App
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
}