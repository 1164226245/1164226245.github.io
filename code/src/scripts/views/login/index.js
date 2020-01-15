import "./index.scss";
import React, { Component } from "react";
// import React from "react";
import { Button, WhiteSpace, NoticeBar, WingBlank, List, InputItem } from 'antd-mobile';
//InputItem 文本输入
//用于接受单行文本。
import Head from "~/components/head";
import {connect} from "react-redux"
//引入axios
import { axios } from "&";
import { changeUser } from "../../actions";
export const mobileReg = /^1(3|4|5|6|7|8|9)\d{9}$/; //手机号正则
export const codeReg = /^\d{4}$/;    //验证码正则

let timer = null;  //默认定时器
@connect()
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeFlag: false,
            loginFlag: false,//默认可以点击
            // count: 60,   //倒计时功能
            count:10800,
            toggle: true,  //总开关
            txt: "发送验证码"

        }
    }
    //手机号正则
    handleCheckMobile = (mobile) => {
        console.log(mobile); //拿到具体的input框里面的值
        var code = this.code.state.value;
        if (this.state.toggle) {
            this.setState({
                codeFlag: mobileReg.test(mobile),  //手机号满足
                loginFlag: mobileReg.test(mobile) && codeReg.test(code)  //同时满足
            })
        }
    }
    //验证码正则判断
    handleCheckCode = (code) => {
        console.log(code);
        var mobile = this.mobile.state.value;
        console.log(mobile);
        this.setState({
            loginFlag: mobileReg.test(mobile) && codeReg.test(code)  //同时满足
        })
    }

    //定时器功能
    //发送验证码
    //执行定时器
    star = () => {
        if (this.state.count > 1) {
            this.setState({
                count: --this.state.count,
                txt: `还有${this.state.count}S`,
                codeFlag: false,
                toggle: false
            })
        } else {
            //定时器置空
            clearInterval(timer);
            timer = null;
            this.setState({
                count: 60,
                txt: "发送验证码",
                codeFlag: true,
                toggle: true
            })

        }
    }

    //计算时间
    computedTime = () => {
        this.star();
        timer = setInterval(this.star, 1000);
    }
    //点击执行  发送验证码   并倒计时
    handleSendCode = () => {
        //执行时间定时器
        this.computedTime();
        console.log(this.mobile.state.value);
        axios.post("/react/aly/sendCode", {
            mobile: this.mobile.state.value
        }).then(res => {
            console.log(res);
        })
    }
    //接收验证码后效验  效验成功后跳我的主页
    handleSumbit = () => {
        axios.post("react/aly/checkCode", {
            mobile: this.mobile.state.value,
            code: this.code.state.value

        }).then(res => {
            if (!!res.data.type) {
                sessionStorage.token = res.data.token;
                sessionStorage.mobile = this.mobile.state.value;
                //跳我的页面
                this.props.history.push("/main/mine");
                clearInterval(timer);  //修改bug
                timer = null;
                this.props.dispatch(changeUser({
                    token :res.data.token
                }))

            } else {
                sessionStorage.token = "";
                sessionStorage.mobile = "";
            }
        })
    }

    render() {
        const {
            codeFlag,
            loginFlag,
            txt

        } = this.state
        const {
            mobile
        }=this.props
        console.log(this.props.mobile);

        return (
            <div>
                <Head title="登录" show={true}></Head>

                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    请输入手机号完成填写验证码登录...  请输入手机号完成填写验证码登录...
                </NoticeBar>


                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号..."
                            clear
                            ref={el => this.mobile = el}
                            onChange={this.handleCheckMobile}

                        >手机号码
                            </InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码..."
                            ref={el => this.code = el}

                            onChange={this.handleCheckCode}

                        >验证码</InputItem>
                        <Button type="warning"
                            inline className="left-btn"
                            style={{backgroundColor:"#FFFF66",color:"#003366"}}

                            disabled={!codeFlag}
                            onClick={this.handleSendCode}
                        >{txt}</Button>
                        <Button type="primary"
                         style={{backgroundColor:"#CC0033",color:"#CCCC00"}}
                            disabled={!loginFlag}
                            onClick={this.handleSumbit}
                        >立即登陆</Button>
                        <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default Login