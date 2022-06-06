const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      tittle: 'Carousel Example',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
