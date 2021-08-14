const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        /* The following line to ask babel
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel.
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'Wrapper',
        filename:
          'remoteEntry.js',
        exposes: {
          './Reducer':
            './src/store/models',
        },
        remotes: {
          UIComponent:
            'UIComponent@http://localhost:8085/remoteEntry.js',
          DomainComponent:
            'DomainComponent@http://localhost:8082/remoteEntry.js',
          Page1:
            'Page1@http://localhost:8083/remoteEntry.js',
          Page2:
            'Page2@http://localhost:8084/remoteEntry.js',
          LibApp: "libApp@http://localhost:8087/remoteEntry.js",
        },
        shared: [
          {
            "@mfe/sharedapp": {
              import: "../LibApp/src",
              requiredVersion: require("../LibApp/package.json").version,
            },
          },
        ],
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};
