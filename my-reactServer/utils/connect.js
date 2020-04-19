//nodejs 连接mongoDb

const  mongoose=require("mongoose");

// const  hostname="localhost";
const  hostname="0.0.0.0";

const port="27017";

// const  dbName="wh1910";

const  dbName="myreact";

const  CON_DB=`mongodb://${hostname}:${port}/${dbName}`;

mongoose.connect(CON_DB,{
	 useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
	if(err){
		console.log("连接失败");
	}else{
		console.log("连接成功")
	}
});

const connection=mongoose.connection;


// 连接成功
connection.on("connected",()=>{
    console.log('Mongoose connection open to ' + CON_DB);  
})

// 数据库开启
connection.on("open",()=>{
    console.log('mongoose open')
});

// 链接异常
connection.on('error',err=>{
    console.log('Mongoose connection error: ' + err);  
    // res.json()
})

// 断开链接
connection.on('disconnected',()=>{
    console.log('Mongoose connection fail 链接失败')
})


module.exports = connection;


