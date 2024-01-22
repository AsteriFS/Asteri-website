const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    main: { import: './src/js/main.js' },
    leverantorer: { import: './src/js/leverantorer.js' },
    home: { import: './src/js/home.js' },
    nyheter: { import: './src/js/nyheter.js' },
    medarbetare: { import: './src/js/medarbetare.js' },
    karriar: { import: './src/js/karriar.js' },
    karriarsArchive: { import: './src/js/karriarsArchive.js' },
    stads: { import: './src/js/stads.js' },
    services: { import: './src/js/services.js' },
  }, 
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader' ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
  ],
};