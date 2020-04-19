const express=require("express");

const app=express();

const hostname="0.0.0.0";
const port=1234;

const http=require("http");

const server=http.createServer(app);

var path = require('path');

const connection =require("./utils/connect");   //连接数据库

const  session= require("express-session");  //引入session模块

//解决跨域问题 ,使用跨域资源共享  cors

var cors=require("cors");

app.use(cors());  //使用中间件   

app.use(express.json());  // 获取 POST 请求的 FormData  $.POST 
app.use(express.urlencoded({ extended: false }));  // 表单 Form  action  name   req.body 
app.use(express.static(path.join(__dirname, 'public'))); // 静态目录 __dirname 根目录   public 拆分到 根目录

//设置session  中间件  后端可以req.session
app.use(session({
    name:"AppText",
    cookie:{maxAge:1000*60*60},  // 时长 60min 
    secret:"test",
    resave:false,
    saveUninitialized:true
}))

app.get("/index",(req,res)=>{
    res.send("前后端分离的项目")
});

app.get("/demo/:uid",(req,res)=>{
	res.json({
		msg:"this is a  simple  demo",
		code :200,
		headers:req.headers,
		path:req.path,
		query:req.query,
		body:req.body,
		param:req.param,
		url:req.url
	})
})
//如果模拟机数据需要关闭这个
var {checkToken}= require("./utils");  
// app.use(checkToken);   

var vueRouter=require("./vue");   //路由别名

app.use("/vue",vueRouter);   

var reactRouter=require("./react");   //react的路由别名

app.use("/react",reactRouter);  


server.listen(port,hostname,()=>{
    console.log(`my  server running  at  http://${hostname}:${port}`);
})
