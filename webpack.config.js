module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, type: 'asset/resource'},
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    port: 8080
  },
  mode: 'development'
};
