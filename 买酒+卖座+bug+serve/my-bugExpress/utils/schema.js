// Schema主要用于定义MongoDB中集合Collection里文档document的结构,可以理解为mongoose对表结构的定义(不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、静态模型方法、复合索引等)，每个schema会映射到mongodb中的一个collection，schema不具备操作数据库的能力

//定义Schema 指定字段名和类型即可，支持的类型包括以下8种
// String      字符串
// Number      数字    
// Date        日期
// Buffer      二进制
// Boolean     布尔值
// Mixed       混合类型
// ObjectId    对象ID    
// Array       数组

const mongoose=require("mongoose");

const  Schema=mongoose.Schema;

const user_Schema=new Schema({
    username:String,
    mobile:Number,
    password:String,
    dbpwd:String,
    time:Date,
    uid:Number,


    age:Number,
    word:String,
    address:String
})
//如果需要在schema里面加入其它字段可以使用add用法
//var MySchema = new Schema;
//MySchema.add({ name: 'string', color: 'string', price: 'number' });

//Model是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为。Model的每一个实例（instance）就是一个document，document可以保存到数据库和对数据库进行操作。简单说就是model是由schema生成的模型，可以对数据库的操作。

//使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称
// mongoose.model(`文档名称`, Schema)
exports.User= mongoose.model('user',user_Schema)   //user  就是数据里面的users


const  wh1910_Schema=new Schema({
    name:String,
    password:String,
    time:Date
})
exports.WH1910=mongoose.model('wh1910',wh1910_Schema);


const  bug_Schema=new  Schema({
    genres:Array,
    title:String,
    year:String,
    directors:Array,
    rating:Object,
    id:String,
    casts:Array,
    images:Object
})
exports.Bug=mongoose.model('bug',bug_Schema);

//暴露uid模块 db.createCollection("uid");  先创建一个表
// db.uids.insert([{names:"huahua"},{id:1}])
var uid_Schema=new Schema({
    names:String,
    id:Number

});
//评论的模块
var common_Schema=new Schema({
  
    cid:Number,  //表本身的id
    content:String,  //评论内容
    title:String,  //评论标题
    uid:Number,  //关联的id
    time:Date,
    mid:Number,  //bug类型id
    uname:String,//用户名
    mtitle:String,  //bug标题
    mpic:String  //bug图片
})



exports.Uid=mongoose.model('uid',uid_Schema);

exports.Comment=mongoose.model('comment',common_Schema);

