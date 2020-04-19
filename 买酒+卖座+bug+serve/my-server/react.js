
//用于vue  调用接口
var express = require("express");

var router = express.Router();  //设置路由名

var { Liuyan, Banner, Code, Pic } = require("./utils/schema");

var { sendCode } = require("./aly");

var { createToken, decodeToken, getMoblie } = require("./utils/token");  //引入token

//引入multer
var multer = require('multer');  //Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件


router.get("/index", (req, res) => {
    res.json({
        code: 200,
        msg: "这是react接口",
       
    })
});
//渲染留言
router.get("/getCommots", (req, res) => {
    Liuyan.find({}, {}).then(data => {
        console.log(data);
        res.json({
            code: 200,
            msg: "留言数据请求成功",
            result: data
        })
    })
})
//新增留言

router.post("/addCommots", (req, res) => {
    var body = req.body;
    console.log(body);
    Liuyan.insertMany(body).then(data => {

        Liuyan.find({}, {}).then(result => {

            res.json({
                code: 200,
                msg: "新增留言成功",
                result
            })
        })
    })
})
//删除留言
router.post("/delCommots", (req, res) => {
    var body = req.body;
    console.log(body);
    Liuyan.deleteOne({ _id: body.id }).then(data => {
        res.json({
            code: 200,
            msg: "删除留言成功",
            result: data
        })
    })
})


//电影轮播图 接口  http://localhost:1234/react/maizuo/banner
router.get("/maizuo/banner", (req, res) => {
    Banner.find().then(data => {
        console.log(data);
        res.json({
            code: 200,
            msg: "获取卖座轮播图成功",
            result: data
        })
    })

});
//阿里云短信
//得到随机四位数

function getCode() {
    // return 1000+Math.floor(Math.random()*(10000-1000));
    return 1000 + Math.floor((10000 - 1000) * Math.random())
}
//发送验证码
router.post("/aly/sendCode", (req, res) => {
    var { mobile } = req.body;
    const code = getCode();  //四位数的随机数

    if (!mobile) {
        res.json({
            code: 200,
            msg: "请先输入手机号",
        })
    }

    sendCode(mobile, code).then(result => {
        console.log(result);
        console.log(result.Code);
        if (result.Code == "OK") {
            Code.insertMany({
                mobile,
                code,
                time: new Date()
            }).then(data => {
                res.json({
                    code: 200,
                    param: code,
                    type: 1,
                    result: data,
                    msg: "验证码发送成功"
                })
            })
        } else {
            res.json({
                code: 200,
                msg: "验证码发送失败",
                type: 0
            })
        }
    }).catch(err => {
        res.json({
            code: 200,
            msg: "服务器错误",
            type: 0
        })
    })
})
//校验验证码
router.post("/aly/checkCode", (req, res) => {
    var {
        mobile,
        code
    } = req.body
    Code.findOne({
        mobile,
        code
    }).then(result => {
        console.log(result);
        if (result) {
            var time = new Date();
            if (time - result.time < 60 * 1000) {
                var token = createToken(mobile);  //将手机号加密成token
                console.log(token);
                res.json({
                    code: 200,
                    msg: "验证码有效",
                    type: 1,
                    token
                })
            } else {
                res.json({
                    code: 200,
                    msg: "验证码过期",
                    type: 0
                })
            }

        } else {
            res.json({
                code: 200,
                msg: "验证码错误",
                type: 0
            })
        }
    })
})

//获取用户信息在个人中心
router.post("/getMobile", (req, res) => {
    var token = req.headers.token;
    if (token) {
        decodeToken(token).then(result => {
            res.json({
                code: 200,
                msg: "token验证成功",
                result: result,
                type: 1,
            })
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
})

//头像上传硬件
//磁盘存储引擎 (DiskStorage)
//filename 用于确定文件夹中的文件名的确定
//destination 是用来确定上传的文件应该存储在哪个文件夹中
var storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public/upload')
    },
    filename(req, file, cb) {
        //   cb(null, "huyulin"+file.originalname + '-' + Date.now());
        cb(null, Date.now() + "huyulin" + file.originalname); //用户计算机上的文件的名称
    }
})
//创建上传对象
var upload = multer({ storage: storage }).any();    //接受一切上传的文件。文件数组将保存在 req.files。
//图片上传接口
router.post("/uploadImg", upload, (req, res) => {

    console.log(req.files[0]);
    var path = req.files[0].path;
    var time = new Date();

    getMoblie(req, res, (mobile) => {
        Pic.insertMany({
            mobile,
            time,        //保留时间
            pic: path          //图片路径

        }).then(result => {
            console.log(result);
            res.json({
                code: 200,
                msg: "图片上传成功",
                type: 1,
                mobile,
                pic: path    //给前端 
            })
        })
    })
})


//获取最近一张头像
router.post("/latestPic", (req, res) => {
    getMoblie(req, res, (mobile) => {
        Pic.findOne({
            mobile
        }).sort({ _id: -1 }).then(result => {
            if (result) {
                res.json({
                    code: 200,
                    msg: "获取用户头像成功",
                    type: 1,
                    result

                })
            } else {
                res.json({
                    code: 200,
                    msg: "暂无用户头像",
                    type: 0,
                    result     //null

                })
            }
        })
    })
})

// var title1 = req.query.title;
    // var d_title1 = req.query.d_title;
    // var miaoshu1 = req.query.miaoshu;
    // // console.log(title1);
    // var searchObj =  {}
    // if(title1){
    //     searchObj={
    //         $or: [
    //             {
    //                 title : new RegExp(title1)
    //             }
    //         ]
    //     }
    // }
    // if(d_title1){
    //     searchObj={
    //         $or: [
    //             {
    //                 d_title : new RegExp(d_title1)
    //             }
    //         ]
    //     }
    // }
    // if(miaoshu1){
    //     searchObj={
    //         $or: [
    //             {
    //                 miaoshu : new RegExp(miaoshu1)
    //             }
    //         ]
    //     }
    // }







module.exports = router;  //接口暴露