module.exports = {
    devServer: {
        proxy:{
            '/api':{
                target:'http://10.10.0.55:3000',
                // changeOrigin:true,
                // pathRewrite: {"^/api" : ""}
             },
        }
        // proxy: 'http://10.10.0.55:3000'
    }
}