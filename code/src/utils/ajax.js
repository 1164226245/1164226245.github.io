//promise封装ajax请求
import {stringify} from "querystring";  //node自带模块
// import { rejects } from "assert";

export const http={
    get(url,{params}){
        const promise= new Promise(function(resolve,reject){
            //状态码判断
            const handel=function(){
                if(this.readyState!=4){
                    return "";   //前端OK
                }

                if(this.status==200){
                    resolve({data:this.response})
                }else{
                    reject(new Error(this.statusText))
                }
            }

            var  client= new XMLHttpRequest();
            params=stringify(params);
            console.log(params);
            client.open("GET",url+"?"+params);
            client.responseType="json";
            client.setRequestHeader("Accept","application/json");  //请求头
            client.onreadystatechange=handel;
            client.send();
        })
        return promise;
    }
}