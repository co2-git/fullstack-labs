module.exports = {
  entry: "./dist/client.js",
  output: {
    path: __dirname + '/assets/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" }
    ]
  }
};
