import "./index.scss";
import React, { Component } from "react";
import moment from 'moment'

import { WingBlank, WhiteSpace, Picker, Accordion, List, Icon, PullToRefresh, NoticeBar, Button, Checkbox, InputItem, Flex, Card, TextareaItem } from 'antd-mobile';

import Head from "~/components/head";
//引入axios 
import { axios } from "&";   //从util的index里面引入axios
import { Link } from "react-router-dom";
import address from "~/mobx/address";
import comment from "~/mobx/commots";    //评论的mobx
import { observer } from "mobx-react";
import { history } from "&";
import { success } from "&/axios";

@observer
class Addeval extends Component {
    constructor() {
        super()
        this.state = {
            good: {

            },
            goodsId: "",
            comments: []
        }
    }

    // //删除评论
    // deloneCom = (mobile, id) => {
    //     axios.post("/react/delCommots", {
    //         mobile: mobile,
    //         id: id
    //     }).then(res => {
    //         console.log(res);
    //     })
    //     history.go(0)
    // }
    //追加评论
    // updateOneCom=(mobile,id,content)=>{
    //     axios.post("/react/updateOneCommots",{
    //         mobile:mobile,
    //         id:id,
    //         content:this.commentRef.state.value
    //     }).then(res=>{
    //         console.log(res);

    //     })
    //     history.go(0);
    // }

    // componentDidMount() {
    //     //渲染商品
    //     const goodsId = this.props.match.params.goodsId;
    //     console.log(goodsId);
    //     //渲染该用户评论列表   /showCommotsBymoblie
    //     axios.get("/react/showCommotsBymoblie", {
    //         params: {
    //             mobile: sessionStorage.mobile
    //         }
    //     }).then(res => {
    //         console.log(res);
    //         this.setState({
    //             comments: res.data.result
    //         })
    //     })
    // }

    //新增评论
    //添加评论

    editCommots = () => {
        if (this.commentRef.state.value == " ") {
            success("注意:评论不能为空")
        }
        console.log(this.state.good.title);
        axios.post("/react/addCommots", {
            mobile: sessionStorage.mobile,
            goodsId: this.props.match.params.goodsId,
            title: this.state.good.title,
            content: this.commentRef.state.value,

        }).then(res => {
            console.log(res);
        })
        history.go(0);

    }
    //保存修改
    saveAddress = () => {
        comment.modifyCommots(
            {
                mobile: sessionStorage.mobile,
                id: new URLSearchParams(this.props.location.search).get('id'),
                content: this.commentRef.state.value
            })
    }

    render() {
        const {
            item,
            match,
            location,
            detail,
            dispatch,
            mobile,
            gotoshoppingcar,

        } = this.props;
        const {
            good,
            comments

        } = this.state
        // console.log(this.state.good);
        // console.log(this.state.comments);
        // const {
        //     commotsList,
        // } = comment
        // console.log(commotsList);
        const {
            commotsList
        } = comment
        console.log(comment);
        return (
            <div>
                <Head title="写追评"
                    style={{ color: "#ffffff" }} show={true} ></Head>
                <div className="detailbox">
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <TextareaItem
                            placeholder="您可以追加评价了"
                            ref={el => this.commentRef = el}
                            onChange={this.editP}
                            autoHeight
                        >
                        </TextareaItem>
                        <WhiteSpace size="lg" />
                        <Button
                            onClick={this.saveAddress}
                            type="ghost" size="large" style={{ backgroundColor: "#990033", color: "#FFF" }} >
                            保存追加评论</Button>
                    </WingBlank>

                </div>

            </div>
        )
    }
}

export default Addeval