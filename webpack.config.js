const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    main: { import: './src/js/main.js' },
    home: { import: './src/js/home.js' },
    nyheter: { import: './src/js/nyheter.js' },
    karriar: { import: './src/js/karriar.js' },
    stads: { import: './src/js/stads.js' },
    services: { import: './src/js/services.js' },
    lokalvard: { import: './src/js/lokalvard.js' },
    medarbetare: { import: './src/js/medarbetare.js' },
    leverantorer: { import: './src/js/leverantorer.js' },
    contactUs: { import: './src/js/contactUs.js' },
    faOffert: { import: './src/js/faOffert.js' },
    karriarTemplate: { import: './src/js/karriarTemplate.js' },
    arbetsplatsservice: { import: './src/js/arbetsplatsservice.js' },
    visselblasning: { import: './src/js/visselblasning.js' },
    omOss: { import: './src/js/omOss.js' },
    hotellservice: { import: './src/js/hotellservice.js' },
    personuppgiftspolicy: { import: './src/js/personuppgiftspolicy.js' },
    cookiePolicy: { import: './src/js/cookiePolicy.js' },
    nyheterSingle: { import: './src/js/nyheterSingle.js' },
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