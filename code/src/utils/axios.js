import axios from "axios";
import  {Toast} from 'antd-mobile';
import  {history}  from "&";
// const baseURL="http://localhost:4321/"; 
// const baseURL="http://47.105.44.9:4321/"; 
const baseURL="https://huyulin.top:4321/"; 

let token=""
// const baseURL="http://47.105.44.9:1234/";   //http://localhost:1234/vue/movie
// axios.defaults.baseURL = 'https://api.example.com';  //设置基路径
 axios.defaults.baseURL=baseURL;
 axios.defaults.headers.common['token'] =token;   //设置token AUTH_TOKEN  将token设置到请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//将键值对的参数用&连接起来，如果有空格，将空格转换为+加号；有特殊符号，将特殊符号转换为ASCII HEX值

export  function loadingToast(msg,time) {
    msg=msg||"正在请求";
    time=time||1;
    Toast.hide();  //先清空
    Toast.loading(msg, time, () => {
        // console.log('加载完成 !!!');
      });
  }

//失败
 export function fail(msg) {
    Toast.hide();  //先清空
    Toast.fail(msg, 1);
  } 
//网络原因
  export function offline(msg) {
    Toast.offline(msg, 1);
  }

//  请求成功
export  function success(msg) {
    Toast.success(msg, 1);
  }
  
//请求之前拦截   //interceptors拦截器  
axios.interceptors.request.use(function (config) {
    // Do something before request is sent 在发送请求之前做些什么
    // console.log("进入请求之前拦截");
     // 配置动画
     loadingToast();
      token=sessionStorage.token?sessionStorage.token:"";
    //  //设置请求头
      config.headers['token']=token;  
      //前端 得到 token 会把这个 token (存储到sessionStorage ) 配置 请求头 里面 request.headers.token = token  

     return config;
  }, function (error) {
    // Do something with request error  处理请求错误
    offline("请求失败,网络异常")
    return Promise.reject(error);
  });

//请求之后响应拦截
  axios.interceptors.response.use(function (response) {
    // Do something with response data    对响应数据做些什么
    // console.log("进入请求之后拦截");
    console.log(response);
    if(response.data.code=="3000"){
       //  router.push({name:'login',query:{active:'login'}})
       history.push("/login");
  }
     // type  不存在    success
    // type = 0  fail
    // type = 1  success 
    //设置不同请求type类型下的数据
    if(!!response.data.type){
      success(response.data.msg);
    }else{
      if(response.data.type==0){
        fail(response.data.msg);
      }else{
        success(response.data.msg);
      }
      
    }
    return response;
  }, function (error) {
    // Do something with response error   //处理响应错误
    fail("响应失败,服务异常")
    return Promise.reject(error);
  });

  export {axios,baseURL} //模块暴露
