import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

export default {
  mode: 'production',
  entry: [
    './src/js/index.js',
    './src/css/index.css',
  ],
  output: {
    path: path.resolve('public'),
    filename: 'js/bundle.js',
  },
  optimization: {
    emitOnErrors: true,
    moduleIds: 'named',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'src/css/index.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('src/img'),
          to: path.resolve('public/img'),
        },
        {
          from: path.resolve('src/favicon.ico'),
          to: path.resolve('public/'),
        },
    ]
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve('src/index.html'),
        filename: path.resolve('public/index.html'),
    }),
  ],
};