const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env={}) => {
    const { mode = 'development'} = env;

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const getStyleLoders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'CosmeticsStore',
                template: 'public/index.html'
            }),
        ];

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                filename: '[name]-[hash:5].css'
            }))
        }

        return plugins;
    };

    return {
        mode: isDev ? 'development' : isProd && 'production',

        output: {
            filename: isProd ? 'main-[hash:3].js' : undefined,
            publicPath: '/'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },

                {
                    test: /\.(png|jpeg|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[path][name].[ext]'
                            }
                        }
                    ]
                },

                {
                    test: /\.(ttf|eot|otf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },

                {
                    test: /\.s[ca]ss$/,
                    use: [...getStyleLoders(), 'sass-loader']
                },

                {
                    test: /\.css$/,
                    use: getStyleLoders()
                },
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true,
            historyApiFallback: true
        }
    }
};
