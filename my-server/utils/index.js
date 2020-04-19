//连接数据库

const crypto = require("crypto");   // Node 主要功能是加密解密。

// 加密函数  data 需要加密的字段 
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;  // 密文  
}

// 解密 
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;  // 明文 
}

const keys = "wuhan1910";   //   zklabc ==> zklabcwuhan1910 

exports.aesEncrypt = aesEncrypt;   // 加密
exports.aesDecrypt = aesDecrypt;   // 解密
exports.keys = keys;


exports.formateDate = function (date) {
    var temptime = new Date();

    var year = temptime.getFullYear();

    var month = temptime.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    var day = temptime.getDate();

    day = day < 10 ? "0" + day : day;

    var hour = temptime.getHours();

    hour = hour < 10 ? "0" + hour : hour;


    var min = temptime.getMinutes();

    min = min < 10 ? "0" + min : min;

    var sec = temptime.getSeconds();

    sec = sec < 10 ? "0" + sec : sec;

    return `${year}--${month} --${day} ${hour}--${min}--${sec}`

}

//后端校验证token
exports.checkToken = function (req, res, next) {
    console.log("使用checkToken中间件");
    const Client_token = req.headers.token;  //客服端token
    const Serve_token = req.session.token;  //服务端token
    console.log("客户端token" + Client_token);

    console.log("服务端token" + Serve_token);

    console.log(req.path);

    if (req.path !== "/vue/login" && req.path !== "/vue/register") {
        if (Client_token) {
            if (Serve_token) {
                if (Serve_token == Client_token) {
                    next();  //前后端验证成功
                } else {
                    res.json({
                        msg: "token效验失败,请重新登录",
                        code: "3000",
                        type: 0,
                       
                    })
                }

            } else {
                res.json({
                    msg: "服务端token已过期,请重新登录",
                    code: "3000",
                    type: 0,
                   
                })
            }

        } else {
            res.json({
                msg: "客户端token不存在,请重新登录",
                code: "3000",
                type: 0,
               
            })
        }

    } else {
        next();
    }

}
