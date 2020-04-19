var express = require('express');
var router = express.Router();

var {aesDecrypt,keys}=require("../utils");//  解密

var {Bug,User} = require("../utils/schema");  //引入movie

/* GET home page. */


// router 路由模块
// get  请求方式  
// req  请求 request
// res  响应  response 
// next 执行下个中间件 
// render 服务器端渲染 
// router.get('/', function(req, res, next) {
//   res.render('./index.ejs', { title: 'wuhan1910-exp' });
// });

//主页home 路由
router.get('/', function(req, res, next) {
  res.render('./index.ejs', {
     msg:"这个bug管理系统用于记录日常开发bug",
     username:req.session.username,  //动态获取用户名 
    });
});

//注册跳转路由
router.get('/register',(req,res)=>{
  res.render('register');
})
//登录跳转路由  将req.query解析到页面
router.get('/login',(req,res)=>{

  var query =req.query;  //查询参数 ?后面的数据

  console.log(query);

  var  username=query.username?aesDecrypt(query.username,keys):query.username;  //判断用户名是否为空的情况下  解密到登录页面用户名input
  res.render('login',{username});
})

//设置路由判断session是否存在  为head.ejs服务
router.get('/checksession',(req,res)=>{
    res.json({   
        msg:"检验session 是否存在",
        code:200,
        flag:!!req.session.username ,  // 转换数值类型 
        code:!!req.session.username?"3000":"4000"  // 3000 登录  4000未登录  用来判断导航条功能的显示隐藏
    })
})
//将后端token发送到前端 
router.get("/sendToken",(req,res)=>{
  //发送一个json的响应。
  res.json({ //前端响应 JSON 数据
    msg:"发送token到前端",
    code:200,
    token:req.session.token
  })
})


// 退出登录 逻辑  退回到主页
router.get("/logout",(req,res)=>{
  //销毁session ,重定向到主页
  req.session.destroy(()=>{
      res.redirect("/");
  })
})

//bug页面路由设置以及列表渲染
router.get("/buglist",(req,res)=>{
  const query=req.query;
  var sortObj={};
  var  searchObj={};
  //有关键字的情况下进行搜索没有就排序
  if(query['keyword']){

    var keyword=query['keyword'];

    searchObj={
      $or:[
        {
          title:new RegExp(keyword)
        },
        {
          year:new RegExp(keyword)
        },
        {
          genres:new RegExp(keyword)
        },

      ]
    }
  }else{
    sortObj=query
  }
  //用户登录了的状态下才能进入电影页面
  if(req.session.username){
    //根据指定的搜索对象来按照指定的sortobj进行排序
      Bug.find(searchObj,{}).sort(sortObj).then(result=>{
        console.log(result); //拿到电影数据  是一个json 对象
        //res.render('ejs模板文件', {JSON对象格式的数据})
        res.render('buglist',{
          result
        });  //渲染电影页面


      })
  }else{
    res.send(`<script>alert("登录session失效 请重新登录");location.href='/login'</script>`)
  }
});

//修改密码
router.get('/changepwd',(req,res)=>{
  if(req.session.username){
      res.render('changepwd');
  }else{
    res.send(`<script>alert("登录session失效 请重新登录");location.href='/login'</script>`)
  }

})
//修改密码接口逻辑

router.post("/resetpwd", (req, res) => {
  var {
    oldpwd,
    newpwd
  } = req.body;

  console.log(req.body);

  if (req.session.username) {
    User.findOne({
      username: req.session.username
    }).then(result => {
      if (result.password == oldpwd) {
        User.updateOne({
          username: req.session.username
        }, {
          $set: {
            password: newpwd
          }
        }).then(data => {
          req.session.destroy(); //修改密码成功
          res.json({
            code: 200,
            msg: "密码修改成功",
            type: 1
          });
        })

      } else {
        res.json({
          code: 200,
          msg: "你输入的原始密码失败,请重新输入",
          type: 0
        });

      }
    })
  } else {
    res.send(`<script>alert("登录session失效 请重新登录");location.href='/login'</script>`)
  }
})
module.exports = router;
