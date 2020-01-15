import "./index.scss";
import React, { Component } from "react";
import { MySwipe } from "~/components/swipe";
import { Button, WhiteSpace, WingBlank } from "antd-mobile" //ui库按钮

import guidePic from "@/assets/images/03.gif";  //引入引导页的图片
import { connect } from "react-redux"
const SwipeItem = MySwipe.Item;   //静态属性 
 let timer = null;  //默认定时器
@connect()

class Guide extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 10,
            txt: "跳过"
        }
    }
    //自定义函数
    handleGotoMain = () => {
        clearInterval(timer);
        this.props.history.push("/main/home");
        clearInterval(timer);
    }
    componentDidMount() {
        //用户访问量大于3就直接进main里面的主页,不存在vistitCount就累加
        if (localStorage.visitCount) {
            localStorage.visitCount++;
            if (localStorage.visitCount > 3) {
                this.props.history.push("/main/home");
            }
        } else {
            localStorage.visitCount = 1;
        }
         timer = setInterval(() => {
            this.setState(() => ({
                count: --this.state.count,
            }), () => {
                if (this.state.count < 1) {
                    clearInterval(timer);
                    this.props.history.push("/main/home");
                }
            });
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(timer);
        // let timer = setInterval(() => {
        //     this.setState(() => ({
        //         count: --this.state.count,
        //     }), () => {
        //         if (this.state.count < 1) {
        //             clearInterval(timer);
        //             this.props.history.push("/main/home");
        //         }
        //     });
        // }, 1000)
    }

    render() {
        const {
            count
        } = this.state
        // console.log(this.state.count)
        return (
            <div className="g-box">
                <img src={guidePic} alt="" />
                <Button loading inline
                    className="guidebutton" style={{ color: 'red' }}
                    onClick={() => this.handleGotoMain()}
                >{count + "s"}</Button>
            </div>
        )
    }
}
export default Guide