module.exports = {
    devServer: {
        proxy:{
            '/':{
                target:'http://10.10.0.55:3000',
                // changeOrigin:true,
                // pathRewrite: {"^/api" : ""}
             },
        }
        // proxy: 'http://10.10.0.55:3000'
    }
}