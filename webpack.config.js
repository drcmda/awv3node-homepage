const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    const DEV_BABEL_PRESETS = env.dev
        ? [['env', { modules: false, loose: true, useBuiltIns: true, targets: { chrome: 55 } }]]
        : [];

    const DEV_BABEL_PLUGINS = env.dev
        ? ['react-hot-loader/babel', ['transform-object-rest-spread', { useBuiltIns: true }]]
        : [];

    const DEV_WEBPACK_ENTRIES = env.dev
        ? ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server']
        : [];

    const DEV_WEBPACK_PLUGINS = env.dev
        ? [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
        : [];

    const PROD_BABEL_PRESETS = env.prod
        ? [['env', { modules: false, loose: true, useBuiltIns: true, targets: { ie: 11 } }]]
        : [];

    const PROD_BABEL_PLUGINS = env.prod
        ? [
              ['transform-object-rest-spread', { useBuiltIns: true }],
              ['transform-runtime', { helpers: false, polyfill: false, regenerator: true }]
          ]
        : [];

    const PROD_WEBPACK_ALIASES = env.prod ? { react: 'react-lite', 'react-dom': 'react-lite' } : {};

    const PROD_WEBPACK_PLUGINS = env.prod
        ? [
              new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
              new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
              new webpack.optimize.UglifyJsPlugin({
                  compress: {
                      warnings: false,
                      screw_ie8: true,
                      drop_console: true,
                      drop_debugger: true,
                      dead_code: true,
                      global_defs: { __REACT_HOT_LOADER__: undefined }
                  },
                  mangle: { screw_ie8: true },
                  output: { comments: false, screw_ie8: true }
              })
          ]
        : [];

    return {
        entry: { app: [...DEV_WEBPACK_ENTRIES, __dirname + '/index.js'] },
        output: {
            filename: 'build/[name].js',
            chunkFilename: 'build/chunk.[id].js',
            path: __dirname
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        cacheDirectory: true,
                        presets: [...DEV_BABEL_PRESETS, ...PROD_BABEL_PRESETS, 'react'],
                        plugins: [
                            ...DEV_BABEL_PLUGINS,
                            ...PROD_BABEL_PLUGINS,
                            'syntax-dynamic-import',
                            'transform-class-properties',
                            ['transform-es2015-classes', { loose: true }]
                        ]
                    }
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/,
                    use: ['file-loader?hash=sha512&digest=hex&name=build/images/[hash].[ext]', 'image-webpack-loader']
                }
            ]
        },
        resolve: {
            modules: [path.resolve('./'), 'node_modules'],
            extensions: ['.js', '.jsx'],
            alias: PROD_WEBPACK_ALIASES
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    optipng: { optimizationLevel: 7 },
                    gifsicle: { interlaced: false },
                    pngquant: { quality: '65-90', speed: 4 },
                    mozjpeg: { quality: 65 }
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'build/vendor.js',
                minChunks: module => /(node_modules)/.test(module.resource)
            }),
            ...DEV_WEBPACK_PLUGINS,
            ...PROD_WEBPACK_PLUGINS
            //new BundleAnalyzerPlugin()
        ],
        devServer: { hot: env.dev, contentBase: __dirname, stats: 'errors-only' },
        performance: { hints: false }
    };
};
