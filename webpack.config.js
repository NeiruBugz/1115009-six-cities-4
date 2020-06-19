const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: `/node_modules/`,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
