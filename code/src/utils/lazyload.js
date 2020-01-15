//指向路由懒加载  需要下插件

import React from "react";
import Loadable from "react-loadable";

//  import {Toast} from "antd-mobile";
//通用的懒加载
const loadingComponent = () => {
    //ui库的弹框
    //  Toast.loading('Loading...', 1, () => {
    //     console.log('Load complete !!!');
    // });
    return (
        <div>
            loadingComponent000
        </div>
    )
}
//loading 组件通用,
export default (loader, loading = loadingComponent) => {

    return Loadable({
        loader,   //需要懒加载的组件
        loading
    })
            
}
