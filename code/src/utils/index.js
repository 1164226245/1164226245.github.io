// es6  一个模块暴露多个接口
import url from "url";

import {createHashHistory} from "history";
//再次暴露
// export {msg} from "./msg";

export {config} from "./config";



export const commonCss={
    init:{
        padding:0,
        margin:0
    },
    init1:{
        color:"red",
        boxShadow:"1px 2px 3px 4px green"
    }
}

export const commonEvent={
    move(){
    console.log("这是鼠标移动事件")
    },
    touch(){
        console.log("这是touch事件")
    }
}

export {axios,baseURL} from "./axios";



export function getQuery(search){

    return url.parse(search,true).query

}
//下面一句话相当于   history =this.PaymentResponse.history
export const history =new createHashHistory();

