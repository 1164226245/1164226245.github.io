var jwt = require("jsonwebtoken");

const secretKey = "huyulin898";  //秘钥

//加密
exports.createToken = function (data) {
   return jwt.sign(data, secretKey)
}

//解密
const decodeToken = function (token) {
   return new Promise(function (resolve, reject) {
      jwt.verify(token, secretKey, function (err, data) {
         if (err) {
            console.log(err);
            reject(err);
         } else {
            resolve(data);
         }
      });
   })

}

exports.decodeToken = decodeToken;

//获取手机号

exports.getMoblie = function (req, res, callback) {
   var token = req.headers.token;
   if (token) {
      decodeToken(token).then(mobile => {
         //成功回调
         callback(mobile);
      }).catch(err => {
         res.json({
            code: "3000",
            msg: "token验证失败",
            err,
            type: 0
         })
      })


   } else {
      res.json({
         code: "3000",
         msg: "token不存在,请重新登录",
         type: 0
      })
   }
}