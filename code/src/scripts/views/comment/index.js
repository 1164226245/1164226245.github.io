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
class Comment extends Component {
    constructor() {
        super()
        this.state = {
            good: {

            },
            goodsId: "",
            comments: []
        }
    }

    //删除评论
    deloneCom = (mobile, id) => {
        axios.post("/react/delCommots", {
            mobile: mobile,
            id: id
        }).then(res => {
            console.log(res);
        })
        history.go(0)
    }
    componentDidMount() {
        //渲染商品
        const goodsId = this.props.match.params.goodsId;
        console.log(goodsId);
        axios.get("/react/home/indexlist/detail", {
            params: {
                goodsId
            }
        }).then(res => {
            console.log(res);
            this.setState({
                good: res.data.result
            })

        })
        //渲染评论列表
        axios.get("/react/getCommots", {
            params: {
                goodsId,
                mobile: sessionStorage.mobile
            }
        }).then(res => {
            console.log(res);
            this.setState({
                comments: res.data.result
            })
        })
    }
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
        console.log(this.state.good);
        console.log(this.state.comments);
        // const {
        //     commotsList,
        // } = comment
        // console.log(commotsList);
        return (
            <div>
                <Head title="商品评论"
                    style={{ color: "#ffffff" }} show={true} ></Head>
                <div className="detailbox">
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                extra={<span>劵后RMB: ¥{good.jiage}</span>}
                                title={good.dtitle}
                            >
                            </Card.Header>
                            <Card.Body>
                                <p>{good.title}</p>
                                <div><img style={{ width: "100%", height: "3rem" }} src={good.pic} alt="" /></div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                        <div className="comtitle"
                        style={{
                            fontSize:".4rem",
                            fontWeight:"600"
                        }}
                        >评价:</div>
                        <div className="comments" style={{ display: !!comments ? "block" : "none" }}>
                            {
                                comments.map((item, index) => {
                                    return (
                                        <ul key={index}>
                                              <WhiteSpace size="lg" />
                                            <li style={{
                                                position:"relative"
                                            }}>
                                                <div>
                                                    {/* <p>{item.title}</p> */}
                                                    <p
                                                     style={{
                                                         fontWeight:"400",
                                                         fontSize:".3rem"
                                                     }}
                                                    >{item.content}</p>
                                                    <p
                                                     style={{
                                                        fontWeight:"400",
                                                        fontSize:".3rem"
                                                    }}
                                                    >{moment(item.time).format('YYYY-MM-DD HH:mm:ss')}</p>
                                                </div>

                                                <Button
                                                    inline 
                                                    type="primary"
                                                    size="small"

                                                    style={{
                                                        backgroundColor: "#CC0033",
                                                        color: "#fff",
                                                        position:"absolute",
                                                        top:".1rem",
                                                        right:".2rem"
                                                    }}
                                                    onClick={() => this.deloneCom(sessionStorage.mobile, item._id)}
                                                >删除评价</Button>

                                            </li>
                                            <WhiteSpace size="lg" />
                                        </ul>
                                    )
                                })
                            }
                        </div>
                        <div className="sh" style={{ display: !!comments ? "none" : "block" }}>
                            <p>暂无评论...</p>
                        </div>
                        <WhiteSpace size="lg" />
                        <TextareaItem
                            placeholder="请输入商品评价"
                            ref={el => this.commentRef = el}
                            onChange={this.editP}
                            autoHeight
                        >
                            <div onClick={() => this.labelFocusInst.focus()}>评论:</div></TextareaItem>
                        <WhiteSpace size="lg" />
                        <Button
                            onClick={this.editCommots}
                            type="ghost" size="large" style={{ backgroundColor: "#990033", color: "#FFF" }} >提交评论</Button>
                    </WingBlank>

                </div>

            </div>
        )
    }
}

export default Comment