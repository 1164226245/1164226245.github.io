import "./index.scss";

import React, { Component } from "react";

import Head from "~/components/head";

import UploadImg from "~/components/UploadImg";

import {
    Button
} from "antd-mobile"


import { axios } from "&";

import { connect } from "react-redux";
import { getMobile } from "../../actions";
@connect(
    state => (
        {
            token: state.getIn(['user', 'token']),
            mobile: state.getIn(['user', 'mobile'])
        }
    )
)
class Mine extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            isLogin: !!sessionStorage.token,
            mobile: null
        }
    }
    //去登陆
    gotoLogin = () => {
        this.props.history.push("/login");
    }
    //退出登录
    outLogin = () => {
        // sessionStorage.removeItem('token', 'mobile');
        sessionStorage.clear();
        this.props.history.push("/login");
    }
    //去收藏
    gotoCollect=()=>{
        this.props.history.push("/collect");
    }
    //去我的评价中心
    gotoCommentsCenter=()=>{
        this.props.history.push("/evaluate");
    }
    //去我的聊天室
    gotoChat=()=>{
        this.props.history.push("/chat");
    }
    //进来后请求并答应用户信息
    componentDidMount() {
        // axios.post("/react/getMobile").then(res => {
        //     console.log(res);
        //     this.setState({
        //         mobile:res.data.result
        //     })
        // })

        if (!this.props.mobile) {
            this.props.dispatch(getMobile({
                url: "/react/getMobile"
            }))
        }
    }

    render() {
        const {
            isLogin,
        } = this.state;
        const {
            mobile,
            token
        } = this.props
        console.log(this.props)
        return (
            <div>
                <Head title="个人中心"></Head>
                {/* <h3>个人中心</h3> */}

                {/* 条件渲染一波 */}

                {
                    isLogin && <div className="showmobile move-mine1">
                        <div className="userinfo">
                            <span className="mobile">您好:{mobile}</span>
                            <UploadImg></UploadImg>
                        </div>
                        <Button type="ghost" onClick={this.gotoCollect} 
                        className="move-mine2"
                         style={{ backgroundColor: "#FFCC99", color: "#FFFFCC" }}>收藏中心</Button>
                       
                         <Button 
                         onClick={this.gotoCommentsCenter}
                         type="primary"
                         style={{ backgroundColor: "#CC9999", color: "#FFFFCC" }}
                         className="move-mine2"
                         >评价中心</Button>
                         {/* 聊天室 */}
                         <Button 
                         onClick={this.gotoChat}
                         type="primary"
                         style={{ backgroundColor: "#CCFF99", color: "#FF6666" }}
                         className="move-mine2"
                         >聊天室</Button>
                        <Button
                        className="move-mine3"
                         type="ghost"
                            onClick={this.outLogin}
                            style={{ backgroundColor: "#CC3333", color: "#FFFFCC" }}
                        >退出登录</Button>
                    </div>
                }
                {/* 如果没有去登陆 */}

                {
                    !isLogin && <div className="showlogin"  >
                        <h3>请登录--</h3>
                        <Button 
                        onClick={this.gotoLogin} 
                         type="primary" 
                         style={{backgroundColor:"#FF9933",color:"#fff"}}>登录</Button>
                    </div>
                }
              
            </div>
        )
    }
}
export default Mine