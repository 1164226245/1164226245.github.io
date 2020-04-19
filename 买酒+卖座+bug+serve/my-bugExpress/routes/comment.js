var express = require('express');
var router = express.Router();

var { Bug, Comment, Uid,User } = require("../utils/schema");  //引入movie

var { formateDate } = require("../utils");  //引入时间格式化

router.get('/', function (req, res, ) {
    console.log(req.session);
    res.send("评论模块...");
});


router.get("/index", function (req, res) {
    Bug.findOne({
        id: req.query.mid
    }).then(result => {
        // console.log(result);
        req.session.mid = result.id;
        res.render('comment', { result })
    })
})

///
//提交评论接口逻辑
router.post("/submit", (req, res) => {
    const body = req.body;
    const mid = req.query.mid;
    //   console.log(body);
    //   console.log(mid);

    Bug.findOne({
        id: mid
    }).then(buglist => {
        console.log(buglist);
        Uid.updateOne({
            names: "comments"
        }, {
            $inc: {
                id: 1
            }
        }).then(data => {
            Uid.findOne({
                names: "comments"
            }).then(last => {
                console.log(last);
                body.mid = buglist.id;
                body.mtitle = buglist.title;
                body.mpic = buglist.images.large;
                body.cid = last.id;
                body.uname = req.session.username;
                body.uid = req.session.uid;
                body.time = new Date()
                Comment.insertMany(body).then(result => {
                    // res.send("提交评论成功...");
                    //此时将数据带到评论列表页
                    res.redirect("/comment/mlist");
                })

            })
        })
    })
    //db.uids.insert([{names:"commons"},{id:0}])
})
//评论列表页  分页 渲染  排序  搜索
router.get("/mlist", (req, res) => {
    // res.render('mlist');
    //完成分页 以及搜索功能
    // 当前页码 pageNo
    // 总条数  total
    // 每页显示的条数  pageSize
    // 总页数 totalPage 

    var query = req.query;
    var pageNo = req.query.pageNo * 1 || 1;//当前页码
    var total = 0;//总数
    var pageSize = req.query.pageSize * 1 || 10;  //一页显示10个
    var totalPage = 0;//总页数

    let obj = {};
    if (query.mid) {
        obj.mid = query.mid;
    }

    Comment.find(obj, {}).sort({ _id: -1 }).then(result => {
        if (result.length > 0) {
            total = result.length;
            totalPage = Math.ceil(total / pageSize);
            pageNo = pageNo <= 1 ? 1 : pageNo;
            pageNo = pageNo >= totalPage ? totalPage : pageNo;

        }
        //分页渲染
        Comment.find(obj, {}).sort({ _id: -1 }).skip((pageNo - 1) * pageSize).limit(pageSize).then(data => {
            // data = data.map((item) => {
            //     var obj = { ...item._doc };
            //     obj.time = formateDate(obj.time);
            //     return obj
            // });
            //将该电影的评论信息渲染
            Bug.find().then(mv => {
             
                res.render("mlist", {
                    result: data,
                    pageNo,
                    total,
                    pageSize,
                    totalPage,
                    mv,
                    username:req.session.username
                });
                // console.log(mv);

            })
        })
    })
})


//bug提交详情  路由  后端查询逻辑   先查找bug类型 在此基础上查找该类型的所有bug
router.get("/mybugdetail", (req, res) => {

    var mid = req.query.mid || "";
    Bug.findOne({ id: mid }).then(buglist => {
        console.log(buglist);
        Comment.find({
            mid
        }, {}).sort({ _id: -1 }).then(comments => {
            comments = comments.map((item) => {
                var obj = { ...item._doc };
                obj.time = formateDate(obj.time);
                return obj
            });

            res.render("mybugdetail", {
                buglist,
                comments
            })
        })
    })

})

//我的个人中心的所有bug提交
router.get("/my",(req,res)=>{
    var uid=req.query.uid*1;

    Comment.find({
        uid
    }).sort({ _id: -1 }).then(comments=>{
        console.log(comments);
        // // 转时间格式
        // comments = comments.map((item) => {
        //     var obj = { ...item._doc };
        //     obj.time = formateDate(obj.time);
        //     return obj
        // });

        User.findOne({
            uid:uid
        }).then(userInfo=>{
            res.render("my",{
                comments,
                userInfo
            })
        })
    })

})
//当前这个bug的详情 接口逻辑
router.get("/detail",(req,res)=>{
    var  cid=req.query.cid*1;

    Comment.findOne({
        cid
    }).then(item=>{
        // 转时间格式
        // item = item.map((item1) => {
        //     var obj = { ...item1._doc };
        //     obj.time = formateDate(obj.time);
        //     return obj
        // });
        User.findOne({
            uid:item.uid
        }).then(userInfo=>{
            Bug.findOne({
                id:item.mid
            }).then(buglist=>{
                res.render("detail",{
                    item,
                    userInfo,
                    buglist,
                  
                })
            })
        })
    })
})

//删除接口逻辑
router.post("/delComment",(req,res)=>{
    var _id=req.body._id;
    var uname=req.body.uname;   //用户名
    console.log(_id);
    var query={};
    // if(_id!==-1){
    //     query._id=_id;
    // }
    if(_id==-1){
        query={}
    }else{
        query._id = _id;   // 删除一条 
        // query.uname=uname;
    }
    Comment.remove(query).then(result=>{
        res.json({
            code:200,
            msg:"删除成功",
            result,

        })
    })
})

//修改接口逻辑

router.post("/updateComment",(req,res)=>{
    Comment.updateOne({
        _id:req.body._id
    },{
        $set:{
            title:req.body.title,
            content:req.body.content,
            time:new Date()
        }
    }).then(result=>{
        res.json({
            code:200,
            msg:"更新成功",
            result
        })
    })
})

//上传图片业务逻辑
var multiparty=require("multiparty");
console.log(multiparty);
var  fs= require("fs");

router.post("/uploadImg",(req,res)=>{
    const form=new multiparty.Form();  //提交的表单
    form.encoding="UTF-8";  //设置编码 

    form.uploadDir="./uploadtemp";  //设置文件中转站

    form.maxFilesSize=2*1024*1024;  //设置上传的最大文件质量

    form.parse(req,function(err,fields,files){
        if(err)  throw err;

        console.log(files);  //文件集合

        var uploadUrl="/images/upload/",  //设置最终文件上传的位置
        file=files['filedata'],     //文件数据
        originalFilename=file[0].originalFilename,  //文件名称
       
        tempPath= file[0].path;  //临时文件信息

        console.log(file);
        console.log(originalFilename);

        var timestemp=new Date().getTime();
        console.log(timestemp);
        uploadUrl+=timestemp+originalFilename;
        var  newPath="./public"+uploadUrl;  //最终上传路径

        var  redFile=fs.createReadStream(tempPath);  //读临时文件

        var writeFile=fs.createWriteStream(newPath);  //写入文件

        redFile.pipe(writeFile);  //管道流读完后写入

        writeFile.on("close",()=>{
            fs.unlinkSync(tempPath);
            res.json({
                err:"",
                msg:uploadUrl
            })

        })
    })    
})

module.exports = router;