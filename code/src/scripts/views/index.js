// 配置所有路由

import React, { Component } from "react";

import {
    HashRouter as Hash,
    Redirect,
    NavLink,
    Link,
    Route,
    Switch
} from "react-router-dom";

// import Guide from "./guide";

// import Login from "./login"

import LazyLoad from "&/lazyload";
import PropTypes from "prop-types"


export default class MainLayout extends Component {
    getChildContext(){
        return {
            history:this.props.history,
            location:this.props.location
        }
    }
    render() {
        return (
            <div className="main">
                {/* <h3>MainLayout组件</h3> */}
                <Switch>
    
                    <Route path="/" exact render={() => (<Redirect to="/guide" />)} />
                    <Route path="/guide" component={LazyLoad(()=>import("./guide"))}></Route>
                    <Route path="/login" component={LazyLoad(()=>import("./login"))}></Route>
                    <Route path="/search" component={LazyLoad(()=>import("./search"))} />
                    <Route path="/main" component={LazyLoad(()=>import("./main"))} />
                    <Route path="/scan" component={LazyLoad(()=>import("./scan"))} />
                    {/* 详情页 */}
                    {/* http://localhost:3000/#/detail/goodid=ooo */}
                    <Route path="/detail/:goodsId" component={LazyLoad(()=>import("./detail"))} />
                    {/* 购物车 */}
                    {/* <Route path="/shopcar/:mobile" component={LazyLoad(()=>import("./shopcar"))} /> */}
                    {/* 列表页经过的详情页 */}
                    <Route path="/listdetail/:goodsid" component={LazyLoad(()=>import("./listdetail"))} />
                    {/* 订单页 */}
                    <Route path="/orderfrom" component={LazyLoad(()=>import("./orderfrom"))} />
                    {/* 收藏中心 */}
                    <Route path="/collect" component={LazyLoad(()=>import("./collect"))} />
                    {/* 地址编辑页面 address */}
                    <Route path="/address" component={LazyLoad(()=>import("./address"))} />
                    {/* 地址修改 */}
                    <Route path="/modifyaddress"  component={LazyLoad(()=>import("./modifyaddress"))}></Route>
                    {/* 评论页面  comment*/}
                    <Route path="/comment/:goodsId"  component={LazyLoad(()=>import("./comment"))}></Route>
                    {/* 我的评价中心 */}
                    <Route path="/evaluate"  component={LazyLoad(()=>import("./evaluate"))}></Route>
                    {/* 填写追评  addeval*/}  
                    <Route path="/addeval"  component={LazyLoad(()=>import("./addeval"))}></Route>
                    {/* 聊天室 */}
                    <Route path="/chat"  component={LazyLoad(()=>import("./chat"))}></Route>
                    {/* 不存在 */}
                    <Route render={() => (<Redirect to="/guide" />)}></Route>
                </Switch>
            </div>
        )
    }
}

MainLayout.childContextTypes = {
    history:PropTypes.object,
    location:PropTypes.object,
}
