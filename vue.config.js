module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 是否使用包含运行时编译器的Vue核心的构建。
    runtimeCompiler: false,
    // 默认情况下babel-loader忽略其中的所有文件node_modules。
    transpileDependencies: [],
    // 生产环境sourceMap
    productionSourceMap: true,
    // webpack配置
    configureWebpack: () => {},
    chainWebpack: () => {},
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            //名字可以自定义，这里我用的是api/
            '/api/': {
                target: 'http://192.168.108.69/public/index.php/api/', //设置你调用的接口域名和端口号 别忘了加https
                ws: true, // 是否代理websockets
                changeOrigin: true, //这里设置是否跨域
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    },
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "windows.jQuery": "jquery"
    //     })
    // ]
}