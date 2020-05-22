module.exports = (env={}) => {
    const { mode = 'development'} = env;

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    return {
        mode: isDev ? 'development' : isProd && 'production',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
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
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                },

                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                },
            ]
        }
    }
};
