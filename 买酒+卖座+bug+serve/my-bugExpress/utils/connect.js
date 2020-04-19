//mongoDB连接
//Mongoose是在node.js环境下对mongodb进行便捷操作的对象模型工具
//connect 用于创建数据库连接

const  mongoose=require("mongoose");

// const hostname="0.0.0.0" ; //主机名

// const hostname="localhost";
const hostname="0.0.0.0";
 const port=27017;  //mongoDB的端口

 const dbName="wuhan1910";  //数据库名

 //目前没有对moogoDB设置密码  直接连接
//mongoose.connect('mongodb://数据库地址(包括端口号)/数据库名称')

// const CONN_DB_STR = `mongodb://${hostname}:${port}/${dbName}?authSource=admin`;  //定义一个url


const CONN_DB_STR = `mongodb://${hostname}:${port}/${dbName}`;


//  const CONN_DB_STR = 'mongodb://127.0.0.1:27017/wh1910';

// console.log(mongoose);
//对象里面是属性:属性值,不是赋值
mongoose.connect(CONN_DB_STR,{

    useNewUrlParser:true,
    useUnifiedTopology:true

},(err)=>{
    if(err){
        console.log("连接失败")
    }else{
        console.log("连接成功")
    }
})

const  connection =mongoose.connection;

connection.on('connected',()=>{
    console.log('Mongoose connection open to ' +CONN_DB_STR);
});

// 数据库开启
connection.on("open",()=>{
    console.log('mongoose open')
});
//连接异常
connection.on('error',(err)=>{
    console.log('Mongoose connection error: ' + err);
})
//disconnected  连接断开
connection.on('disconnected',()=>{
    console.log('Mongoose connection disconnected');
})


