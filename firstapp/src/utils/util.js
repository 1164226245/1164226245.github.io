
// const baseURL = "https://huyulin.top:4321";
const baseURL = "https://huyulin.top:1717";
exports.http  = function({url,method,data,headers,success}){
    mpvue.showLoading({
        title: '加载中...',
    })
    mpvue.request({
    url:baseURL+url,
    method:method,
    data:data,
    header:headers,
    success:res=>{
        console.log(res.data);
        success(res);
        mpvue.hideLoading();
        mpvue.showToast({
            title:res.data.msg
        })
    }
    })
}