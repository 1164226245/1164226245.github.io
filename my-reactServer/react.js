
//用于vue  调用接口
var express = require("express");

var router = express.Router();  //设置路由名

var { Banner, Code, Pic, IndexBanner, MiddleBanner, Brandbanner, Smallbanner, Noticebar, Indexlist, GoodsType, GoodList, Shoppingcar, Collect, Address,Comment } = require("./utils/schema");

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

//测试电影轮播图 接口  http://localhost:1234/react/maizuo/banner
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
            if (time - result.time < 60 * 1000 * 60 * 12) {
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

//首页轮播图地址
//IndexBanner  http://localhost:4321/react/home/banner
router.get("/home/banner", (req, res) => {
    IndexBanner.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "获取首页轮播图成功",
            result: data
        })
    })

});

//获取中间的轮播图  http://localhost:4321/react/home/middlebanner
router.get("/home/middlebanner", (req, res) => {
    MiddleBanner.find().then(data => {
        //   console.log(data);
        res.json({
            code: 200,
            msg: "获取middle轮播图成功",
            result: data
        })
    })
})
//获取品牌特卖小图标  http://localhost:4321/react/home/brandbanner
router.get("/home/brandbanner", (req, res) => {
    Brandbanner.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "获取brandbanner轮播图成功",
            result: data
        })
    })
})
//获取中间小图标  http://localhost:4321/react/home/smallbanner
router.get("/home/smallbanner", (req, res) => {
    Smallbanner.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "获取中间小图标数据成功",
            result: data
        })
    })
})
//获取通告栏大的接口   http://localhost:4321/react/home/noticebar
router.get("/home/noticebar", (req, res) => {
    Noticebar.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "获取通告栏信息成功",
            result: data
        })
    })
})
//首页列表页  Indexlist  http://localhost:4321/react/home/indexlist
router.get("/home/indexlist", (req, res) => {
    Indexlist.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "获取首页列表信息成功",
            result: data
        })
    })
})

//商品类型接口   根据cid的不同拿不同列表数据   http://localhost:4321/react/classfily/goodstype
router.get("/classfily/goodstype", (req, res) => {
    GoodsType.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "商品类型数据获取成功",
            result: data
        })
    })
})
//商品总列表    直接先查询出来
// GoodList  http://localhost:4321/react/classfily/goodslist
router.get("/classfily/goodslist", (req, res) => {
    GoodList.find().then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "商品总列表数据获取成功",
            result: data
        })
    })
})

//根据首页的商品id拿到该商品的详情   http://localhost:4321/react/home/indexlist/detail?goodsId=611159083948
router.get("/home/indexlist/detail", (req, res) => {
    //goodsId
    var goodsId = req.query.goodsId
    Indexlist.findOne({
        goodsId: goodsId
    }).then(data => {
        res.json({
            code: 200,
            msg: "首页详情数据获取成功",
            result: data
        })
    })

})
//根据列表页的商品id渲染详情页  http://localhost:4321/react/classfily/detail?goodsid=549522644779
router.get("/classfily/detail", (req, res) => {
    var goodsid = req.query.goodsid
    GoodList.find({
        goodsid: goodsid
    }).then(data => {
        // console.log(data);
        res.json({
            code: 200,
            msg: "列表页详情数据获取成功",
            result: data
        })
    })
})

//列表页搜索功能跳详情页  通过标题搜索title拿到具体的商品名称
//http://localhost:4321/react/classfily/search?miaoshu=不起球
router.get("/classfily/search", (req, res) => {
    const query = req.query;
    console.log(query);
    var searchObj = {};
    var sortobj = {}
    if (query.keyword) {
        var keyword = query.keyword;
        console.log(keyword);
        searchObj = {
            $or: [
                {
                    title: new RegExp(keyword)
                },
                {
                    d_title: new RegExp(keyword)
                },
                {
                    miaoshu: new RegExp(keyword)
                }
            ]
        }
    } else {
        sortobj = query
    }

    GoodList.find(
        searchObj
    ).then(data => {
        // console.log(data)
        if (data.length > 0) {
            res.json({
                code: 200,
                msg: "搜索成功",
                result: data
            })
        } else {
            res.json({
                code: 200,
                msg: "抱歉,暂无结果",
                result: data
            })
        }

    })

})

//加入购物车  表名Shoppingcar
router.get("/shopcar/addshoppingcar", (req, res) => {
    var reqData = req.query;
    var mobliep = req.query.mobile;
    var goodsid = req.query.goodsid;

    getMoblie(req, res, (mobile) => {
        Shoppingcar.findOne({
            mobile: mobliep,
            goodsid: goodsid
        }).then(item => {
            console.log("888")
            console.log(item);
            if (item) {
                if (item.mobile == mobliep && item.goodsid == goodsid) {
                    Shoppingcar.updateMany({
                        goodsid: req.query.goodsid
                    }, {
                        $inc: {
                            goodsnum: 1
                        }
                    }).then(updatedata => {
                        console.log(updatedata);
                        res.json({
                            code: 200,
                            msg: "商品数量更新成功",
                            result: updatedata
                        })
                    })
                }
            } else {
                Shoppingcar.insertMany(reqData).then(data => {
                    console.log(data);
                    res.json({
                        code: 200,
                        msg: "加入购物车成功",
                        result: data
                    })
                })
            }
        })
    })
})

//新的加入购物车
router.post("/addshoppingcar", (req, res) => {
    const {
        count,
        goodsid,
        good
    } = req.body;
    getMoblie(req, res, mobile => {
        Shoppingcar.findOne({
            mobile,
            goodsid
        }).then(result => {
            if (result) {
                Shoppingcar.updateOne({
                    mobile,
                    goodsid
                }, {
                    $inc: {
                        count: count
                    },
                    $set: {
                        time: new Date()
                    }

                }).then(data => {
                    res.json({
                        code: 200,
                        msg: "商品数量更新成功",
                        result: data
                    })
                })
            } else {
                Shoppingcar.insertMany({
                    mobile,
                    count,
                    time: new Date(),
                    goodsid,
                    good
                }).then(data => {
                    console.log(data);
                    res.json({
                        code: 200,
                        msg: "加入购物车成功",
                        result: data
                    })
                })
            }
        })
    })
})


//查询购物车列表数据的接口   直接判断后端
router.get("/shopcar/showshoppingcar", (req, res) => {
    getMoblie(req, res, mobile => {
        Shoppingcar.find({
            mobile
        }).then(data => {
            res.json({
                code: 200,
                msg: "购物车列表信息渲染ok",
                result: data
            })
        })
    })

})

//选中状态checked  选中一条,选中全部
router.post("/changeChecked", (req, res) => {
    const {
        checked,
        goodsid
    } = req.body
    getMoblie(req, res, mobile => {
        var obj = { mobile }
        if (goodsid) {
            obj = {
                mobile,
                goodsid
            }
        }
        Shoppingcar.updateMany(obj, {
            $set: {
                checked: checked
            }
        }).then(result => {
            res.json({
                code: 200,
                msg: goodsid ? "修改单挑数据成功" : "修改多条数据成功",
                result: result
            })
        })
    })
})
//选中数量  利用flag传正值还是负值进行加减
router.post("/changeCount", (req, res) => {
    const {
        goodsid,
        count,
        flag
    } = req.body

    getMoblie(req, res, mobile => {
        var obj = {}
        if (count) {
            obj = {
                $set: {
                    count
                }
            }
        } else {
            obj = {
                $inc: {
                    count: flag ? 1 : -1
                }
            }
        }
        Shoppingcar.updateOne({
            goodsid,
            mobile
        }, obj).then(result => {
            res.json({
                code: 200,
                msg: "商品数量修改成功",
                result
            })
        })

    })
})
//删除购物车里面选中的数量
router.post("/delSelect", (req, res) => {
    getMoblie(req, res, mobile => {
        Shoppingcar.deleteMany({
            mobile,
            checked: true
        }).then(result => {
            res.json({
                code: 200,
                msg: "删除选中数量成功",
                result
            })
        })
    })
})



//加入收藏  通过商品id和商品对象
router.post("/collect", (req, res) => {
    const {
        goodsid,
        good,
        tag
    } = req.body;
    getMoblie(req, res, mobile => {
        Collect.findOne({
            goodsid,
            mobile
        }).then(result => {
            console.log(result);
            if (result) {
                res.json({
                    code: 200,
                    msg: "该商品已收藏",
                    result: result
                })
            } else {
                Collect.insertMany({
                    mobile,
                    time: new Date(),
                    goodsid,
                    good,
                    tag
                }).then(result => {
                    res.json({
                        code: 200,
                        msg: "商品收藏成功",
                        result: result
                    })
                })
            }
        })
    })
})
//查询收藏列表数据的接口   直接判断后端
router.get("/showcollect", (req, res) => {
    getMoblie(req, res, mobile => {
        Collect.find({
            mobile
        }).then(data => {
            console.log(data);
            console.log(data.length);
            if (data == []) {
                console.log("huhuhuh");
                res.json({
                    code: 200,
                    msg: "暂无收藏商品",
                    result: null
                })

            } else {
                res.json({
                    code: 200,
                    msg: "收藏列表商品信息渲染ok",
                    result: data
                })
            }

        })
    })

})

//取消收藏
router.post("/cancelcollect", (req, res) => {
    const {
        goodsid,
        mobile
    } = req.body;
    Collect.deleteMany({
        mobile,
        goodsid
    }).then(result => {
        res.json({
            code: 200,
            msg: "取消收藏成功",
            result
        })
    })
})

//加入地址
router.post("/addaddress", (req, res) => {
    const {
        // mobile,
        // province,
        // town,
        // district,   //区
        // specific,  //具体地址
        // defaulta,     //默认地址
        mobile,
        addresobj
    } = req.body;
    // getMoblie(req, res, mobile => {
    Address.insertMany({
        // province,
        // town,
        // district,   //区
        // specific,  //具体地址
        // defaulta,     //默认地址
        mobile,
        time: new Date(),  //时间  
        addresobj
    }).then(result => {
        res.json({
            code: 200,
            msg: "地址新增成功",
            result: result
        })
    })
    // })
})
//查询显示地址  直接判断后端
router.get("/showaddress", (req, res) => {
    getMoblie(req, res, mobile => {
        Address.find({
            mobile
        }).then(data => {
            res.json({
                code: 200,
                msg: "地址列表信息渲染ok",
                result: data
            })
        })
    })

})

///
////
//设置默认地址
router.post("/defaultChecked", (req, res) => {
    const {
       checked,
        mobile,
        id
    } = req.body
    console.log(req.body);
    // let mobile = 13277094511
    // getMoblie(req, res, mobile => {
    console.log(id);
    Address.updateMany({
        mobile
    }, {
        $set: {
            checked: false
        }
    }).then(data => {

        Address.updateMany(
            {
                _id: id
            },

            {
                $set: {
                    checked: checked
                }
            }).then(resultfinally => {
                // console.log(resultfinally);
                if (checked) {
                    Address.find({}).then(result => {
                        res.json({
                            code: 200,
                            msg: "默认地址设置成功",
                            result
                        })
                    })

                } else {
                    // console.log(resultfinally);
                    Address.find({}).then(result => {
                        res.json({
                            code: 200,
                            msg: "取消默认地址设置成功",
                            result
                        })
                    })
                }
            })
    })
    // })
})

//让订单页面的地址只显示默认地址一条
router.get("/showdefaultone", (req, res) => {

    getMoblie(req, res, mobile => {
        Address.findOne({
            mobile,
            checked: true
        }).then(data => {
            console.log(data);
            res.json({
                code: 200,
                msg: "订单页默认地址显示成功",
                result: data
            })
        })
    })
})
//删除地址接口
router.post("/deleteoneaddress", (req, res) => {
    const {
        mobile,
        id
    } = req.body
    getMoblie(req, res, mobile => {
        Address.findOne({
            mobile
        }).then(result => {
            if (result) {
                Address.deleteMany({
                    mobile,
                    _id: id
                }).then(result => {
                    console.log(result);
                    res.json({
                        code: 200,
                        msg: "地址删除成功",
                        result: result
                    })
                })
            }
        })

    })
})
//地址修改

//取消设置默认地址
router.post("/react/canceldefault", (req, res) => {
    const {
        mobile,
        id,
        checked
    } = req.body
    Address.updateMany({
        mobile
    }, {
        $set: {
            checked: false
        }
    }).then(data => {

        res.json({
            code: 200,
            msg: "取消默认地址成功",
            result: data
        })
    })

})

//修改地址
router.post("/modifyaddress", (req, res) => {
    const {
        mobile,
        id,
        addresobj
    } = req.body.mobile;
    console.log(req.body.mobile);
    // getMoblie(req, res, mobile => {
        Address.updateOne({
            _id: id
        },
            {
                $set:{
                    mobile,
                    addresobj,
                    time: new Date(),  //时间
                }
            }
        ).then(result => {
            console.log(result)
            res.json({
                code: 200,
                msg: "修改成功",
                result: result
            })
        })
    // })
})
//新增评论
router.post("/addCommots", (req, res) => {
    const {
        mobile,
        goodsId,
        title,
        content
    }=req.body
    // var body = req.body;
    console.log(req.body);
    Comment.insertMany({
        mobile,
        goodsId,
        title,
        content,
        time:new Date()
    }).then(data => {
        console.log(data);
        Comment.find({}, {}).then(result => {
            res.json({
                code: 200,
                msg: "新增评论成功",
                result
            })
        })
    })
})
//渲染显示评论
router.get("/getCommots", (req, res) => {
    const {
        mobile,
        goodsId
    }=req.query
    console.log(req.query);
    console.log( req.query.mobile);
    // getMoblie(req, res, mobile => {
        Comment.find({
            mobile:mobile,
            goodsId:goodsId
            
        }).then(data => {
            console.log(data);
            res.json({
                code: 200,
                msg: "留言列表信息渲染ok",
                result: data
            })
        })
    // })
})

//删除留言
router.post("/delCommots", (req, res) => {
    const {
        mobile,
        id
    }=req.body
    console.log(req.body);
    Comment.deleteOne({
          mobile,
         _id: id 
        }).then(data => {
            console.log(data);
        res.json({
            code: 200,
            msg: "删除留言成功",
            result: data
        })
    })
})
//通过手机号将带用户的所有评论渲染出来
router.get("/showCommotsBymoblie", (req, res) => {
    const {
        mobile,
    }=req.query
    console.log(req.query);
    console.log( req.query.mobile);
    // getMoblie(req, res, mobile => {
        Comment.find({
            mobile:mobile,
        }).then(data => {
            console.log(data);
            res.json({
                code: 200,
                msg: `用户${mobile}所有评论显示成功`,
                result: data
            })
        })
    // })
})

//////
// router.post("/modifyaddress", (req, res) => {
//     const {
//         mobile,
//         id,
//         addresobj
//     } = req.body.mobile;
//     console.log(req.body);
//     // getMoblie(req, res, mobile => {
//         Address.updateOne({
//             _id: id
//         },
//             {
//                 $set:{
//                     mobile,
//                     addresobj,
//                     time: new Date(),  //时间
//                 }
//             }
//         ).then(result => {
//             console.log(result)
//             res.json({
//                 code: 200,
//                 msg: "修改成功",
//                 result: result
//             })
//         })
//     // })
// })
//追加评价  通过id更新每条评论
router.post("/updateOneCommots",(req,res)=>{
    const {
        mobile,
        id,
        content
    }=req.body.mobile
    console.log(req.body);
    Comment.updateOne({
        _id:id
     },
        {
            $set:{
                mobile,
                content,
                time: new Date(),  //时间
            } 
        }
    ).then(result => {
        console.log(result)
        res.json({
            code: 200,
            msg: "您的追加评价成功",
            result
        })
    })
})


module.exports = router;  //接口暴露