var express = require('express');
var router = express.Router();

var { User, Uid } = require("../utils/schema");//引入schema

var { aesEncrypt, keys } = require("../utils");  //引入加密解密模块

// console.log(Uid)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//注册接口逻辑
router.post('/register', (req, res) => {
  var body = req.body;
  //逻辑顺序 :先判断用户名是否存在如果用户名存在就让用户重新注册
  //否则进行用户信息注册
  // console.log(body);
  // console.log(body.username);
  User.findOne({
    username: body.username
  }).then(result => {
    console.log(result);
    if (result) {
      
      res.send(`<script>alert("用户名已存在 请重新注册");location.href='/register'</script>`)
    } else {
      //找到uid表里面字段为names的数据,将id每次增加一个
      Uid.updateOne({
        names: "users"
      }, {
        $inc: {
          id: 1
        }
      }).then(data => {

        Uid.findOne({
          names: "users"
        }).then(last => {

          body.time = new Date();
          // console.log(body);
          body.uid = last.id;
          User.insertMany(body).then(data => {
            res.send(`<script>alert("注册成功 正在跳转登录");location.href='/login?username=${aesEncrypt(body.username, keys)}'</script>`)
          })
        })

      })

    }

  })

})

//登录接口逻辑
router.post('/login', (req, res) => {
  var body = req.body;  //req.body   POST  提交的数据
  console.log(body);

  User.findOne({
    username: body.username
  }).then(result => {
    if (result) {
      console.log(result);
      //如果输入的密码和数据库查询的密码一致将用户名 uid  手机号  用户名加密后存到session里面
      if (result.password == body.password) {
        req.session.username = result.username;
        req.session.uid = result.uid;
        req.session.mobile = result.mobile,
          req.session.token = aesEncrypt(result.username, keys);
        res.redirect("/");  //重定向到主页
      } else {
        res.send(`<script>alert("用户名和密码不匹配 请重新登录");location.href='/login'</script>`)
      }
    } else {
      res.send(`<script>alert("用户名不存在 请重新注册");location.href='/register'</script>`)
    }
  })
})



module.exports = router;
