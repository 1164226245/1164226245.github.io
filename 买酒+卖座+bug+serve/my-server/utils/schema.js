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
    pic:String,
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


const  movie_Schema=new  Schema({
    genres:Array,
    title:String,
    year:String,
    directors:Array,
    rating:Object,
    id:String,
    casts:Array,
    images:Object
})
exports.Movie=mongoose.model('movie',movie_Schema);

//卖座轮播图的schema  
const bannner_Schema=new Schema({
    imgUrl:String,
    actionData:String,
    name:String,

});

exports.Banner=mongoose.model('banner',bannner_Schema);

//正在热映的schema
const hots_Schema= new Schema({
    name:String,
    poster:String,
    grade:String,  //评分
    category:String,
    synopsis:String,
    nation:String,
    runtime:Number,  //时间
    actors:Array ,  //演员表
    item:Object,   //3d或者2D
    filmId:Number,  
});
exports.Hot=mongoose.model('hot',hots_Schema);
//即将上映的schema
const commingsoons_Schema =new Schema({
    name:String,
    poster:String,
    grade:String,  //评分
    category:String,
    synopsis:String,
    nation:String, //国家
    runtime:Number,   //时间
    premiereAt:Number,  //上映时间
    item:Object,   //3d或者2D
   
});
exports.Comingsonn=mongoose.model('comingsonn',commingsoons_Schema);
//电影院信息
const cinema_Schema=new Schema({
    name:String,
    address:String,
    lowPrice:Number,
});
exports.Cinema=mongoose.model('city1',cinema_Schema);  //moose里面如果定义schema里面的名称带有y,就无法渲染  没有findMany这个写法
//城市集合Schema  
const town_Schema= new Schema({
    name:String,
    cityId:Number,
    pinyin:String,
    isHot:Number
})
exports.Town=mongoose.model('town',town_Schema);

//一周电影Schema
const oneweekFilms_Schema= new Schema({
    name:String,
    poster:String,
    synopsis:String,
    nation:String, //国家
    runtime:Number,   //时间
    premiereAt:Number,  //上映时间
    item:Object,      //3d或者2D
})
exports.OneweekFilms=mongoose.model('oneweekfilm',oneweekFilms_Schema);
//vip电影院的Schema
const vipcinema_Schema=new Schema({
    hallName:String,
    imagery:String,
    filmLanguage:String,
    advanceStopMins:Number
});
exports.Vipcinema= mongoose.model('member',vipcinema_Schema);
//定义单个电影院的schema
const singer_Schema=new Schema({
    cinemaId:Number,
    name:String,
    address:String,
    districtName:String,
    cityId:Number
});
exports.Singel_cinema=mongoose.model('singelcinema',singer_Schema)
//电影周边商品

const goods_Schema= new Schema({
    activeImage:String,
    describe:String,
    maxAvailableInventory:Number,
    title:String,
    productId:Number  //商品id
})
exports.Goods=mongoose.model('good',goods_Schema)
//购物车Schema

const shopping_Schema= new Schema({
    username:String,
    mobile:Number,
    activeImage:String,  //商品图片
    title:String,     //商品标题
    productId:Number,  //商品id
    uid:Number,   
    goodsnum:Number,  //商品数量
    price:Number

})
exports.Shoppingcar= mongoose.model('shoppingcar',shopping_Schema);
//暴露uid模块 db.createCollection("uid");  先创建一个表
// db.uids.insert([{names:"huahua"},{id:1}])
var uid_Schema=new Schema({
    names:String,
    id:Number,
    mobile:Number

});
exports.Uid=mongoose.model('uid',uid_Schema);
//评论的模块
var common_Schema=new Schema({
    cid:Number,  //表本身的id
    content:String,  //评论内容
    title:String,  //评论标题
    uid:Number,  //关联的id
    time:Date,
    mid:Number,  //电影id
    uname:String,//用户名
    mtitle:String,  //电影标题
    mpic:String  //电影图片
})
exports.Comment=mongoose.model('comment',common_Schema);

//react留言功能的数据规范
var liuyan_Schema= new Schema({
     title:String,    //标题
     content:String ,  //内容
     time:Date,

});
exports.Liuyan=mongoose.model('liuyan',liuyan_Schema);


//新建验证码的表
var code_Schema= new Schema({
    mobile:Number,    //手机号
    code:Number ,  //验证码
    time:Date,
});
exports.Code=mongoose.model('code',code_Schema);

//新建存储头像的验证码
var pic_Schema= new Schema({
    mobile:Number,    //手机号
    pic:String ,  //图片
    time:Date,
});
exports.Pic=mongoose.model('pic',pic_Schema);





