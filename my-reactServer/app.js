const express=require("express");

const app=express();

const hostname="0.0.0.0";
//  const  hostname="localhost";
//const port=1234;
//myreact的端口
const port=4321


// const http=require("http");
var http = require("http");
var https = require('https');
var fs = require("fs");
// 第一步：https
var privateKey  = fs.readFileSync('./cert/huyulin.key', 'utf8');  
var certificate = fs.readFileSync('./cert/huyulin.pem', 'utf8');  
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials,app);   // https
var httpServer = http.createServer(app);   // http

const path = require("path")//静态服务器path

const server=http.createServer(app);


const connection =require("./utils/connect");   //连接数据库

const  session= require("express-session");  //引入session模块

//解决跨域问题 ,使用跨域资源共享  cors
var cors=require("cors");

app.use(cors());  //使用中间件   

app.use(express.json());  // 获取 POST 请求的 FormData  $.POST 
app.use(express.urlencoded({ extended: false }));  // 表单 Form  action  name   req.body 
app.use(express.static(path.join(__dirname, 'public'))); // 静态目录 __dirname 根目录   public 拆分到 根目录

//后端的聊天  开始

//引入socket
const io = require("socket.io")(httpServer)
let clients = []
let friends = []
io.sockets.on('connection',(client)=>{
	console.log('有客户端连接')
	clients.push(client)
	//接收用户的信息
	client.on('message',(params)=>{
		switch(params.type){
			case 'online':{
				client.name = params.name;
				client.broadcast.emit('ON_LINE',{time:params.time,txt:'用户'+client.name+'加入聊天'})
				//发送在线的所有客户端
				friends.push(params.name)
				io.sockets.emit('broadcast',{friends})
				// console.log(params)
			};break;
			case 'content':{
				client.broadcast.emit('CONTENT',{user:client.name,txt:params.content})
			};break;
		}
	})
	client.on('disconnect',()=>{
		console.log("客户端退出",client.name)
		let index = friends.findIndex(v=>v===client.name)
		friends.splice(index,1)
		io.sockets.emit('broadcast',{friends})
		client.broadcast.emit('CLOSE',{time:new Date().toLocaleString(),txt:"用户"+client.name+"离开了群聊"})
	})

})


//后端的聊天结束

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

// var vueRouter=require("./vue");   //路由别名

//app.use("/vue",vueRouter);    

var reactRouter=require("./react");   //react的路由别名

app.use("/react",reactRouter);  


httpsServer.listen(port,hostname,()=>{
    console.log(`my  server running  at  http://${hostname}:${port}`);
})
