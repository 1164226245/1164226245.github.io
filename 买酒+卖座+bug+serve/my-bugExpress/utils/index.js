

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
exports.keys = keys;        // 密钥 



exports.checkIsLogin = function (req, res, next) {
    if (req.session.username) {

    } else {

    }
}



exports.formateDate = function (date) {
    var tempDate = new Date(date);
    var year = tempDate.getFullYear();
    var mon = tempDate.getMonth() + 1;
    var day = tempDate.getDate();

    var hours = tempDate.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    var mins = tempDate.getMinutes();
    mins = mins < 10 ? "0" + mins : mins;

    var sec = tempDate.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;
    return  `${year}-${mon}-${day} ${hours}:${mins}:${sec}`;
}