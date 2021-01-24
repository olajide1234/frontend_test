const path = require('path');

module.exports = {
  target: 'web',
  entry:  { WisePops: './src/demo.tsx' },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ],
  },
  mode: "production",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/demo.js'),
    port: 8000
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, './dist'),
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  },
};