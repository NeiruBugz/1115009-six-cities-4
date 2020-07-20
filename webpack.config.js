const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
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
      {
        test: /\.(ts|tsx)?$/,
        loader: `ts-loader`,
      }
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.json`]
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
