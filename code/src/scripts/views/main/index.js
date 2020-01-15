// import "./index.scss";
import React, {Component} from "react"
import {
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";

import LazyLoad from "&/lazyload";
// import {Foot} from "~/components/foot";
import Foot from "~/components/foot";
// import {Afoot} from "~/components/afoot"
export default class Main extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="box">
                {/* <h3>mian-mian</h3> */}
                <Switch>
                    <Route path="/main/home" component={LazyLoad(() => import("../home"))} />
                    <Route path="/main/classify" component={LazyLoad(() => import("../classify"))}></Route>
                    {/* <Route path="/main/cart" component={LazyLoad(() => import("../cart"))}></Route> */}
                    {/* 购物车 */}
                    <Route path="/main/shopcar/" component={LazyLoad(()=>import("../shopcar"))} />
                    <Route path="/main/mine" component={LazyLoad(() => import("../mine"))} />
                    <Route render={() => (<Redirect to="/main/home" />)}></Route>
                </Switch>
                <Foot {...this.props}  />
                {/* <Afoot {...this.props}  /> */}
            </div>
        )
    }
}