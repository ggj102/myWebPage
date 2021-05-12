module.exports = {
    webpack: config =>{
        config.module.rules.push({
            test: /.(png|jpg)$/,
            use:[
                {
                    loader: 'file-loader',
                    options:{
                        name: '[path][name].[ext]?[hash]',
                        emiFile: false,
                        publicPath: '/',
                    },
                },
            ],
        });
        return config;
    },
}