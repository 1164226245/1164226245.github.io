import {axios} from "&";


//得到首页轮播图的异步数据
export async function getBanner({url,cb}){
    const res= await axios.get(url)
    return{
        type:"getBanner",
        payload:res.data.result
    }
} 
//得到手机号
export async function getMobile({url}){
    const res= await axios.post(url)
    return{
        type:"changeUser",
        payload:{
          mobile:  res.data.result
        }
    }
} 
//得到用户的数据
export  const changeUser=(payload)=>{
      return{
          type:"changeUser",
          payload
      }
}
//得到首页中间轮播图的异步数据
export async function getMiddleBanner({url,cb}){
    const res= await axios.get(url)
    return{
        type:"getMiddleBanner",
        payload:res.data.result
    }
} 
//获取品牌热卖图标
export async function getBrandbanner({url,cb}){
    const res=await axios.get(url);

    return {
        type:"getBrandbanner",
        payload:res.data.result
    }
}
//获取中间小图标
export async function getSmallbanner({url,cb}){
    const res =await axios.get(url);
    return {
        type:"getSmallbanner",
        payload:res.data.result
    }
}
//获取noticebar
export async function getNoticebar({url,cb}){
    const res =await axios.get(url);
    return {
        type:"getNoticebar",
        payload:res.data.result
    }
}
//获取首页列表  http://localhost:4321/react/home/indexlist
export async function getIndexList({url,cb}){
    const res =await axios.get(url);
    return {
        type:"getIndexList",
        payload:res.data.result
    }
}
//获取首页列表的详情页
export async function getIndexDetail({url,params}){
    const res =await axios.get(url,{params});
    return {
        type:"getIndexDetail",
        payload:res.data.result
    }
}

//商品类型
export async function getGoodsType({url,params}){
    const res =await axios.get(url,{params});
    return {
        type:"getGoodsType",
        payload:res.data.result
    }
}
//商品列表
export async function getGoodsList({url,params}){
    const res =await axios.get(url,{params});
    return {
        type:"getGoodsList",
        payload:res.data.result
    }
}

//得到列表页的详情
export async function getListDetail({url,params}){
    const res =await axios.get(url,{params});
    return {
        type:"getListDetail",
        payload:res.data.result
    }
}
//根据长标题短标题以及描述拿到搜索结果
export async function getSearchDetail({url,params}){
    const res =await axios.get(url,{params});
    // console.log(params);
    return{
        type:"getSearchDetail",
        payload:res.data.result
    }
}

//点击按钮加入购物车

export async function addShoppingCar({url,params}){
    const res =await axios.get(url,{params});
    console.log(params);
    return {
        type:"addShoppingCar",
        payload:res.data.result
    }
}

//显示购物车商品信息
export async function showShoppingCarInfo({url,params}){
    const res=await axios.get(url,{params});
    console.log(params);

    return {
        type:"showShoppingCarInfo",
        payload:res.data.result
    }
}

//反转商品列表页数据实现下拉刷新
export  function ChangeGoodListReverse(){
     return {
         type:"ChangeGoodListReverse"
     }
}
//反转数据结构实现首页的列表页下拉刷新
export function ChangeIndexListReverse(){
    return {
        type:"ChangeIndexListReverse"
    }
}
//反转搜索列表页的数据结构实现前端页面的前端刷新
export function ChangeSerchListReverse(){
    return {
        type:"ChangeSerchListReverse"
    }
}

