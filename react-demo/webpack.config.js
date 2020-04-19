
// webpack 基本配置文件 

// 声明 入口 出口文件  
// 模块打包 模块module 规则定义  rules
// js&jsx
// css/less/scss/sass
// png/jpg
// react 代码
// .vue 单文件组件 (vue)

// 配置服务器 

const path = require("path");   // Node 内部的模块 无需安装 
const htmlWebpackPlugin  = require("html-webpack-plugin");   // 打包处理 html 
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");  // 自动打开浏览器 
const extractTextPlugin = require("extract-text-webpack-plugin");   // 抽离样式 
const webpack = require("webpack");

module.exports = {
    entry:['./src/main.js'], // 多个入口文件
    output:{
        path:path.resolve(__dirname,"dist"),  // resolve 成功处理方式 
        filename:"js/[name].[hash:8].js",   // hash:8 长度为8 哈希算法得到的永远不会重复的随机字符串   阻止浏览器缓存
        publicPath:"",  // 公共路径  打包设置的路径  
    },

    devtool:"source-map", // 方便调试文件 debugger 

    resolve:{   // 解决方案
        alias:{   // 别名
            "@":path.resolve("src"), 
            "&":path.resolve("src/utils"),
            "~":path.resolve("src/scripts")
        }   
    },

    module:{  // 模块打包
        rules:[  // 规则定义 
            {
                test:/\.(js|jsx)$/,  // javascript XML 
                use:["babel-loader"],
                exclude:/node_modules/,
            },
            {
                test:/\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,  //打包图片和矢量图标
                use:{
                    loader:"url-loader",
                    options:{
                        limit:8192,   // 1024*8 8M 图片大小限制
                        name:"img/[name].[hash:8].[ext]"  // my.jpg ==> my.qwer1234.jpg
                    }
                }
            },
            {
                test:/\.(css|scss|sass)$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',  // 把 JS字符串代码转化为Node风格的css样式代码
                    use:[
                        "css-loader",  // 转化为 commonJS 规范的模块
                        {
                            loader:"postcss-loader",  // 处理 CSS代码 
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // css代码美化优化
                                        require("autoprefixer"),  // 自动补全  -webkit -mos -ms 
                                        require("postcss-px2rem-exclude")(  // px 转为 rem 
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/gi
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "sass-loader",   // 编译 sass 为  css 代码
                    ]
                })
            },
            {
                test:/\.(css|less)$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',  // 把 JS字符串代码转化为Node风格的css样式代码
                    use:[
                        "css-loader",  // 转化为 commonJS 规范的模块
                        {
                            loader:"postcss-loader",  // 处理 CSS代码 
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // css代码美化优化
                                        require("autoprefixer"),  // 自动补全  -webkit -mos -ms 
                                        require("postcss-px2rem-exclude")(  // px 转为 rem 
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/gi
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "less-loader",   // 编译 less 为  css 代码
                    ]
                })
            }
        ]
    },


    // 开发环境的服务器
    devServer:{  
        contentBase:path.join(__dirname,"dist"), // 服务器直接作用dist 
        compress:true,  
        hot:true,
        inline:true,
        host:"0.0.0.0",
        port:7000,
        // open:true, // 自动打开浏览器 
        publicPath:"", // 公共路径
        proxy:{   // 反向代理 
            "/gateway": {
                target:"https://m.maizuo.com",
                changeOrigin: true,
            },
        }
    },

    // webpack 插件 
    plugins:[
        new htmlWebpackPlugin({
            title:'react-app',
            template:"./public/index.html",
            inject:true   // 自动引入 打包好的 css/js文件 
        }),
        new openBrowserWebpackPlugin({
            url:"http://localhost:7000"
        }),
        new extractTextPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true ,  // 打包所有样式 
            disable:false,  // true 插件不起作用 样式不抽离   Disables the plugin
        }),
        // 自动引入 插件
        new webpack.ProvidePlugin({
            React:"React",
            Component:["react","Component"]
        })
    ]
}