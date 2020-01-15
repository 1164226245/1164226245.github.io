import "./index.scss";

import React, { Component } from "react";

import initPic from "@/assets/images/default_head.jpg";  //引入默认头像
import { node } from "prop-types";

import { axios, baseURL } from "&";

import { connect } from "react-redux";
import { changeUser } from "../../actions";
@connect(
    state => (
        {
            pic: state.getIn(['user', 'pic'])
        }
    )
)

class Uploading extends Component {

    constructor() {
        super();
        this.state = {
            pic: null
        }
    }

    componentDidMount() {
        let userInfo = localStorage.userInfo;   //本地的浏览器
        console.log(userInfo);
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            console.log(userInfo);
            if (userInfo.mobile == sessionStorage.mobile) {    //先拿本地的图片
                // this.setState({
                //     pic: userInfo.pic
                // })
                this.props.dispatch(changeUser({ pic: userInfo.pic }))
            } else {
                //去服务器拿
                this.handelGetPic();
            }
        } else {
            //去服务器拿
            this.handelGetPic();
        }
    }
    handelGetPic = () => {
        if (!this.props.pic) {
            axios.post("/react/latestPic").then(res => {
                if (!!res.data.type) {
                    // this.setState({
                    //     pic: res.data.result.pic.replace(/public/, baseURL)
                    // })
                    this.props.dispatch(changeUser({ pic: res.data.result.pic.replace(/public/, baseURL) }))
                } else {
                    //用默认图片
                    // this.setState({
                    //     pic: initPic
                    // })
                    this.props.dispatch(changeUser({ pic: initPic }))
                }
            })

        }

    }
    //点击图片
    handleClick = () => {
        this.fileImg.click();  //指向文件上传的input
    }
    //点击文件上传
    handleChange = () => {
        console.log("文件上传");
        const file = this.fileImg.files[0];
        console.log(file);
        var data = new FormData();  //实例化请求
        data.append("avatar", file);
        axios({
            url: "/react/uploadImg",
            method: "POST",
            data
        }).then(res => {
            console.log(res);
            if (!!res.data.type) {
                var pic = res.data.pic.replace(/public/, baseURL);   //路径

                const userInfo = JSON.stringify({
                    mobile: res.data.mobile,
                    pic
                })
                localStorage.userInfo = userInfo;   //设本地
                // this.setState({
                //     pic
                // })
                this.props.dispatch(changeUser({ pic: pic }))
            } else {
                localStorage.userInfo = "";
            }
        })




    }

    render() {
        // const {
        //     pic
        // } = this.state;
        const {
            pic
        } = this.props;
        return (
            <div>
                {/* <h3>图像上传</h3> */}
                <img src={pic} onClick={this.handleClick} className="headlogo" />
                <input type="file" style={{ display: 'none' }} onChange={this.handleChange} ref={el => this.fileImg = el} />

            </div>
        )

    }
}
export default Uploading