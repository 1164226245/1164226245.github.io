
//用于vue  调用接口
var express = require("express");

var router = express.Router();  //设置路由名

var { Movie, Uid, User, Banner, Hot, Comingsonn, Cinema,
	Town, OneweekFilms, Vipcinema, Singel_cinema,
	Goods, Shoppingcar
} = require("./utils/schema");  //引入schema  查询用户,注册登录模块

var { aesEncrypt, keys } = require("./utils/index");  //引入utils里面的加密模块

//引入axios
var axios = require("axios");  //引入axios 发起请请求

//引入multer
var multer = require('multer');  //Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件

var Mock = require('mockjs');   //模拟数据

//设置路由接口
router.get("/index", (req, res) => {
	res.send("这是一个vue的项目总接口文件");
});

//电影页路由接口
//http://localhost:1234/vue/movie
router.get("/movie", (req, res) => {
	var limit = req.query.limit * 1 || 0; //显示限制的页面条数
	console.log(limit);
	console.log(Movie);
	Movie.find().limit(limit).then(result => {
		res.json({
			msg: "电影页面数据请求成功",
			code: 200,
			result
		})
	})
})

//卖座电影轮播图接口https://m.maizuo.com/gateway?type=2&cityId=420100&k=3936966
//http://localhost:1234/vue/maizuo/movie  接口地址
router.get("/maizuo/movie", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway?type=2&cityId=420100&k=3936966",
		method: "GET",
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1574295263734439407931","bc":"420100"}',
			'X-Host': 'mall.cfg.common-banner'
		}
	}).then(result => {
		console.log(result);
		res.json({
			msg: "电影轮播图数据请求成功",
			code: 200,
			result: result.data
		})
	})

});

//电影轮播图 接口
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

//正在热映的接口  http://localhost:1234/vue/maizuo/hots
router.get("/maizuo/hots", (req, res) => {
	Hot.find().then(data => {
		console.log(data);
		res.json({
			code: 200,
			msg: "获取正在热映电影数据成功",
			result: data
		})
	})
})
//即将上映的电影接口
//http://localhost:1234/vue/maizuo/comingsonn
router.get("/maizuo/comingsonn", (req, res) => {
	console.log("999");
	Comingsonn.find().then(data => {
		res.json({
			code: 200,
			msg: "获取即将上映电影成功",
			result: data
		})
	})

})
//电影院地址接口  Cinema  接口地址 http://localhost:1234/vue/maizuo/theater
router.get("/maizuo/theater", (req, res) => {
	Cinema.find({}).then(data => {
		console.log(data);
		res.json({
			code: 200,
			msg: "获取电影院数据成功",
			result: data
		})
	})
})
//带参查询渲染电影详情页
router.get("/maizuo/detail", (req, res) => {
	var query = req.query;
	console.log(query);
	var movieId = query.filmId;  //拿到后端查询到的电影详情
	console.log(movieId);
	console.log(req.query.filmId);
	Hot.findOne({
		filmId: req.query.filmId,
	}).then(data1 => {
		console.log(data1);
		res.json({
			code: 200,
			msg: "电影详情数据查询成功",
			result: data1
		})
	});
})
//查询所有城市接口
//http://localhost:1234/vue/maizuo/town  别人接口
router.get("/maizuo/town", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway?k=1494545",
		methods: "GET",
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1574295263734439407931","bc":"110100"}',
			'X-Host': 'mall.film-ticket.city.list'
		}
	}).then(result => {
		// console.log(result);
		res.json({
			code: 200,
			msg: "城市列表数据请求成功",
			result: result.data
		})
	})
})
//查询城市接口  
router.get("/maizuo/towncity", (req, res) => {
	Town.find({
	}).then(result => {
		// console.log(result);
		res.json({
			code: 200,
			msg: "所有城市数据请求成功",
			result: result
		})
	})
})

//一周电影数据接口   卖座接口
//https://m.maizuo.com/gateway/?cinemaId=4948&k=2849241
//http://localhost:1234/vue/maizuo/oneweekfile
router.get("/maizuo/oneweekfile", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway/?cinemaId=4948&k=2849241",
		method: "GET",
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1574295263734439407931","bc":"110100"}',
			'X-Host': 'mall.film-ticket.film.cinema-show-film'
		}
	}).then(result => {
		res.json({
			code: 200,
			meg: "一周电影数据请求成功",
			result: result.data
		})
	})
})
//一周电影数据真实接口1  http://localhost:1234/vue/maizuo/oneweekfilms
router.get("/maizuo/oneweekfilms", (req, res) => {
	OneweekFilms.find().then(result => {
		// console.log(result);
		res.json({
			code: 200,
			meg: "一周电影数据请求成功",
			result: result
		})
	})
})

//查询Vip电影院的接口  http://localhost:1234/vue/maizuo/vipcinema
router.get("/maizuo/vipcinema", (req, res) => {
	Vipcinema.find().then(result => {
		console.log(result);
		res.json({
			code: 200,
			msg: "高级设备电影院数据请求成功",
			result: result
		})
	})
});

//查询默认电影院的接口   http://localhost:1234/vue/maizuo/singercinema
router.get("/maizuo/singercinema", (req, res) => {
	Singel_cinema.find().then(result => {
		console.log(result);
		res.json({
			code: 200,
			msg: "获取单个电影院的数据成功",
			result: result
		})
	})
});

//电影周边商品  http://localhost:1234/vue/maizuo/goods
router.get("/maizuo/goods", (req, res) => {
	Goods.find().then(result => {
		console.log(result);
		res.json({
			code: 200,
			msg: "获取电影商品成功",
			result: result
		})
	})
});
//带参查询渲染商品详情页  http://localhost:1234/vue/maizuo/goodsdetail?goodsId=13710668
router.get("/maizuo/goodsdetail", (req, res) => {
	var query = req.query;
	// console.log(query);
	var goodsId = query.goodsId;  //拿到后端查询到的电影详情
	console.log(goodsId);
	// console.log(req.query.goodsId);
	Goods.findOne({
		productId: req.query.goodsId,
	}).then(data1 => {
		// console.log(data1);
		res.json({
			code: 200,
			msg: "商品详情数据查询成功",
			result: data1
		})
	});
});




// router.get("/maizuo/goodonedelate",(req,res)=>{
// 	var query =req.query;
// })




//注册接口
router.post("/register", (req, res) => {
	const body = req.body;
	console.log(body);
	//先判断手机号或者用户名是否有人注册
	User.findOne({
		$or: [
			{
				username: body.username
			},

			{
				mobile: body.mobile
			}
		]
	}).then(data => {
		if (data) {
			console.log(data);
			//说明已经被注册过
			res.json({
				msg: "用户名或手机号已存在",
				code: 200,
				result: null,
				type: 0
			})
		} else {

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
					//将数据掺入
					console.log(last);
					body.time = new Date();
					body.uid = last.id;
					console.log(body);
					User.insertMany(body).then(result => {
						console.log("pp");
						console.log(result);
						res.json({
							msg: "注册成功",
							code: 200,
							result,
							type: 1
						})
					})
				})
			})
			// //将数据掺入
			// body.time = new Date();
			// User.insertMany(body).then(result => {
			// 	res.json({
			// 		msg: "注册成功",
			// 		code: 200,
			// 		result,
			// 		type: 1
			// 	})
			// })
		}
	})
})

//登陆接口
router.post("/login", (req, res) => {
	const body = req.body;
	console.log(body);
	//先查询手机号在不在
	User.findOne({
		mobile: body.mobile,
	}).then(data => {
		if (data) {
			if (data.password == body.password) {
				//将手机号和密码拼接起来加密后生成token
				var str = body.password + "+" + body.mobile;
				var token = aesEncrypt(str, keys);
				req.session.token = token;
				req.session.username = data.username;
				req.session.uid = data.uid;
				req.session.mobile = body.mobile;

				res.json({
					msg: "登录成功",
					code: 200,
					type: 1,
					result: data,
					token
				})
			} else {
				res.json({
					msg: "登录失败,手机号或密码输入有误",
					code: 200,
					type: 0,
					result: data
				})
			}
		} else {
			res.json({
				msg: "登陆失败,手机号不存在!",
				code: 200,
				type: 0,
				result: data
			})
		}
	})
})
//个人中心 接口通过手机号查询到用户所有数据
router.get("/getInfo", (req, res) => {
	User.findOne({
		mobile: req.session.mobile
	}).then(data => {
		res.json({
			msg: "用户信息请求成功",
			code: 200,
			type: 1,
			result: data
		})
	})
})

//购物车逻辑  加入购物车
// router.get("/maizuo/addshoppingcar", (req, res) => {
// 	var getData = req.query;
// 	console.log(getData);
// 	var mobliep = req.query.mobile;
// 	console.log(mobliep);
// 	Shoppingcar.findOne({
// 		mobile: mobliep
// 	}).then(shoppinglist => {
// 		console.log("888")
// 		console.log(shoppinglist);
// 		Uid.updateOne({
// 			names: "shoppingcars"
// 		}, {
// 			$inc: {
// 				id: 1
// 			}
// 		}).then(last => {
// 			 console.log(last);
// 			// getData.mobile = shoppinglist.mobile;
// 			// getData.title = shoppinglist.title;
// 			// getData.activeImage = shoppinglist.activeImage;
// 			// getData.productId = shoppinglist.productId;
// 			// getData.goodsnum = shoppinglist.goodsnum;
// 			// getData.price = shoppinglist.price;
// 			// getData.time = new Date();
//             Uid.findOne({
// 				names:'shoppingcars'
// 			}).then(res1=>{
// 				console.log("0000")
// 				console.log(res1);
// 			    console.log(res1.uid);
// 				getData.uid = res1.id;
// 				Shoppingcar.insertMany(getData).then(data => {
// 					console.log(data);
// 					res.json({
// 						code: 200,
// 						msg: "加入购物车成功",
// 						result: data
// 					})
// 				})
// 			})
// 			//  getData.uid = shoppinglist.uid;
// 			// Shoppingcar.insertMany(getData).then(data => {
// 			// 	console.log(data);
// 			// 	res.json({
// 			// 		code: 200,
// 			// 		msg: "加入购物车成功",
// 			// 		result: data
// 			// 	})
// 			// })
// 		})
// 	})

	

// 	/// 
// 	// Shoppingcar.insertMany(getData).then(data=>{
// 	// 	console.log(res);
// 	// 	res.json({
// 	// 		code:200,
// 	// 		msg:"加入购物车成功",
// 	// 		result:data
// 	// 	})
// 	// })

// });





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

var upload = multer({ storage: storage }).any();    //接受一切上传的文件。文件数组将保存在 req.files。
//图片上传接口
router.post("/uploadImg", upload, (req, res) => {

	console.log(req.files[0]);
	var path = req.files[0].path;
	User.updateOne({
		mobile: req.session.mobile
	}, {
		$set: {
			pic: path
		}
	}).then(result => {
		res.json({
			msg: '图片上传成功',
			code: 200,
			result,
			type: 1,
			pic: path,                    //将手机号和路径发给前端
			mobile: req.session.mobile

		})
	})


})
// 根据手机号获取头像 接口
router.post("/getAvatarImg", (req, res) => {
	User.findOne({
		mobile: req.session.mobile
	}).then(result => {
		if (result.pic) {
			res.json({
				msg: '获取头像成功',
				code: 200,
				result,
				type: 1
			})
		} else {
			res.json({
				msg: '获取头像失败',
				code: 200,
				result,
				type: 0
			})
		}
	})
})
//模拟数据请求
//借助于Mock.Random 是一个工具类，用于生成各种随机数据
//paragraph 段落
//sentence判断语句//随机生成一个句子，第一个单词的首字母大写。
var Random = Mock.Random;
router.get("/mock/data", (req, res) => {
	var result = [];
	for (var i = 0; i <= 200; i++) {
		result.push(
			{
				uid: Random.id(),
				name: Random.cname(2, 5),  //随机生成一个常见的中文姓名
				title: Random.csentence(8, 20),  //中文  语句
				// image:Random.image( '300x600', 'red','#723', 'huyulin mock-word'+i ),
				image: Random.image('200x100', '#00405d', '#FFF', 'Mock.js'),
				time: Random.date('yyyy-MM-dd'),  //时间
				city: Random.city(true),  //布尔值。指示是否生成所属的省。
			}
		)
	}
	res.json({
		msg: '模拟数据成功',
		code: 200,
		result,
		type: 1
	})
})
//卖座电影首页的接口  //https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7696201
//http://localhost:1234/vue/maizuo/films
router.get("/maizuo/films", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7696201",
		method: "GET",
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1574295263734439407931","bc":"110100"}',
			'X-Host': 'mall.film-ticket.film.list'
		}
	}).then(result => {
		console.log(result);
		res.json({
			msg: "电影首页数据请求成功",
			code: 200,
			result: result.data.data.films
		})
	})

});

//资讯接口
//https://m.maizuo.com/gateway?actId=ElzMZU125260

router.get("/maizuo/news", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway?actId=ElzMZU125260",
		method: "GET",
		headers: {
			'X-Client-Info': '',
			'X-Host': 'mall.act.static-page.info'
		}
	}).then(result => {
		console.log(result);
		res.json({
			msg: "电影资讯请求成功",
			code: 200,
			result: result.data.data
		})
	})
});

//影院接口
//https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4112646
router.get("/maizuo/cinema", (req, res) => {
	axios({
		url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4112646",
		method: "GET",
		headers: {
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1574295263734439407931","bc":"110100"}',
			'X-Host': 'mall.film-ticket.cinema.list'
		}
	}).then(result => {
		console.log(result);

		res.json({
			msg: "影院信息获取成功",
			code: 200,
			result: result.data.data.cinemas
		})
	})
})

//购物车页面接口逻辑  http://localhost:1234/vue/maizuo/shoppinglist?mobile=13477887878
router.get("/maizuo/shoppinglist",(req,res)=>{
	var query =req.query;
	console.log(query);

	var mobile=query.mobile;

	console.log(mobile);

	Shoppingcar.find({
		mobile:req.query.mobile
	}).then(data2=>{
		res.json({
			code:200,
			msg:"购物车数据成功",
			result:data2
		})
	})

});

//新的购物车数量接口
router.get("/maizuo/addshoppingcar",(req,res)=>{
	var  reqData=req.query;
	// console.log(reqData);
	var mobliep=req.query.mobile;
	var goodsId=req.query.productId;
	
	// console.log(goodsId);
	Shoppingcar.findOne({
		mobile:mobliep,
		productId:goodsId

	}).then(item=>{
		console.log(item);
		// console.log(item.mobile);
		if(item){
			if(item.mobile==mobliep&&item.productId==goodsId){
				Shoppingcar.updateMany({
					productId:req.query.productId
				},{
					$inc:{
						goodsnum:1
					}
				}).then(updatedata=>{
					console.log(updatedata);
					res.json({
						code:200,
						msg:"商品数量更新成功",
						result:updatedata
					})
				})
			 }
		}else{
			Shoppingcar.insertMany(reqData).then(data => {
				console.log(data);
				res.json({
					code: 200,
					msg: "加入购物车成功",
					result: data
				})
			})
		}
		//  if(item.mobile==mobliep&&item.productId==goodsId){
		// 	Shoppingcar.updateMany({
		// 		productId:req.query.productId
		// 	},{
		// 		$inc:{
		// 			goodsnum:1
		// 		}
		// 	}).then(updatedata=>{
		// 		console.log(updatedata);
		// 		res.json({
		// 			code:200,
		// 			msg:"商品数量更新成功",
		// 			result:updatedata
		// 		})
		// 	})
		//  }else{
		// 	Shoppingcar.insertMany(reqData).then(data => {
		// 		console.log(data);
		// 		res.json({
		// 			code: 200,
		// 			msg: "加入购物车成功",
		// 			result: data
		// 		})
		// 	})
		//  }
	})
})

//购物车列表页   //实际接口地址  http://localhost:1234/vue/maizuo/shopingcarlist?mobile=13477887878
router.get("/maizuo/shopingcarlist", (req, res) => {
	console.log("88");
	//通过手机号来带到购物车列表页
	Shoppingcar.findOne({
		mobile: req.query.mobile
	}).then(data => {
		res.json({
			msg: "用户信息请求成功",
			code: 200,
			type: 1,
			result: data
		})
	})

})

// //购物车单删接口删除接口逻辑  http://localhost:1234/vue/maizuo/goodonedelate?productId=27667852
router.get("/maizuo/goodonedelate",(req,res)=>{
    var productId=req.query.productId; //用户名
    console.log(productId);
    var query={};
    // if(_id!==-1){
    //     query._id=_id;
    // }
    if(productId==-1){
        query={}
    }else{
        query.productId = productId;   // 删除一条 
    }
    Shoppingcar.deleteMany(query).then(result=>{
        res.json({
            code:200,
            msg:"删除成功",
            result,
        })
    })
});

//新增商品数量接口
//http://localhost:1234/vue/maizuo/checknum?productId=13710668&goodsnum=12
router.get("/maizuo/checknum",(req,res)=>{
	var goodsId=req.query.productId; //商品id
	console.log(goodsId);  //商品id
	var goodsnum11=req.query.goodsnum;
	console.log(goodsnum11);  //商品数量
	Shoppingcar.findOne({
		productId: req.query.productId,
	}).then(result=>{
		console.log(result);
		var goodsnum=result.goodsnum;
		console.log(goodsnum);
		Shoppingcar.updateOne({
			productId:req.query.productId
		},{
			$set:{
				goodsnum:goodsnum11
			}
		}).then(result=>{
			res.json({
				code:200,
				msg:"数量更新成功",
				result
			})
		})
	})
})





















module.exports = router;  //接口暴露