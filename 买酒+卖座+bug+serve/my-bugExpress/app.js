var createError = require('http-errors');   //报错模块
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var moment = require('moment');  //时间格式化

var indexRouter = require('./routes/index'); //首页路由
var usersRouter = require('./routes/users');  //用户路由

var commonRouter=require("./routes/comment"); //引入评论



var app = express();

var connection = require("./utils/connect");  //创建数据库连接

var session=require("express-session");  // 导入session模块

// view engine setup   设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views')); //__dirname 根目录   views 拆分到 根目录 
app.set('view engine', 'ejs');  //设置模板引擎文件
app.locals.dateFormat = function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //静态服务   指定静态目录文件


//session存放位置  使用session中间件
app.use(session({
  name:"AppText",
  cookie:{maxAge:1000*60*60},  //存放时间
  secret:"test",
  resave:false,
  saveUninitialized:true

}))


// 路由中间件 设置路由别名  避免路由命名冲突
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req,res,next){
  if(req.session.username){
      next();
  }else{
    res.send(`<script>alert("登录session失效 请重新登录");location.href='/login'</script>`)
  }
})

app.use("/comment",commonRouter);  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
