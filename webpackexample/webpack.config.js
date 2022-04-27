const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
              test:/\.js$/,
              use:'babel-loader',
              exclude :/node_modules/
          }
        ],
      },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })
  ]
}