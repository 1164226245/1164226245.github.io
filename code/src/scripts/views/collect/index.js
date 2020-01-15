
import "./index.scss";
import React, { Component } from "react";

import { WingBlank, WhiteSpace, Accordion, List, Icon, PullToRefresh, NoticeBar, Button, Checkbox } from 'antd-mobile';

import Head from "~/components/head";

//引入axios 
import { axios } from "&";   //从util的index里面引入axios
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "&";

@connect()
class Collect extends Component {
    constructor() {
        super()
        this.state = {
            goodlist: [],
            goodsid: null
        }
    }
    componentDidMount() {
        axios.get("/react/showcollect", {
            params: {
                mobile: sessionStorage.mobile
            }
        }).then(res => {
            console.log(res);
            this.setState({
                goodlist: res.data.result,
                goodsid: res.data.result.length > 0 ? res.data.result[0].goodsid : ""
            })
        })
    }
    //取消收藏
    cancelColl = () => {
        console.log("999");

        axios.post("/react/cancelcollect", {
            mobile: sessionStorage.mobile,
            goodsid: this.state.goodsid

        }).then(res => {
            console.log(res);
        });
        history.go(0);
    }

    render() {
        const {
            goodlist,
            goodsid
        } = this.state
        console.log(this.state.goodlist);
        // console.log(this.state.goodsid);
        // console.log(this.props.match.params.goodsId);
        console.log(goodlist)
        return (

            <div>
                <Head title="收藏中心" show={true} ></Head>
                {/* <p>收藏页面</p>
                 */}
                <div style={{ display: goodlist.length > 0 ? 'none' : 'block' }}>
                    <h2 style={{ fontWeight: "500", color: "#FF6666", fontSize: ".4rem" }}> 您还没有收藏任何商品.. </h2>
                </div>
                {
                    goodlist.map((item, index) => {
                        return (

                            <div className="tr" key={index}>
                                {/* {
                                    (item.tag==1)&& <Link to={"/listdetail/" + item.good.goodsid + "?title=" + item.good.title} key={index}> <li style={{ width: "24%" }}><img src={item.good.pic} /></li>
                                    </Link>
                                } */}
                                <Link to={((item.tag==0)? "/detail/" : "/listdetail/") + item.goodsid + "?title=" + item.good.title} key={index}> <li style={{ width: "24%" }}><img src={item.good.pic} /></li>
                                </Link>


                                <li style={{ width: "38%" }}>
                                    <p style={{ lineHeight: "18px", marginTop: '36px' }}>{item.good.dtitle ? item.good.dtitle.slice(0, 14) : item.good.d_title.slice(0, 14)}
                                    </p>
                                    <p style={{ lineHeight: "18px" }}>￥{item.good.jiage + "元"}</p>

                                </li>
                                <li style={{ width: "34%" }}>
                                    <Button
                                        onClick={
                                            this.cancelColl
                                        }
                                        type="ghost" style={{
                                            backgroundColor: "#0099CC",
                                            color: "#CCFF99",
                                            borderRadius: "50%",
                                            width: "1.0rem",
                                            height: "1.0rem",
                                            lineHeight: "1.0rem",
                                            textAlign: "center",
                                            fontSize: ".2rem",
                                            marginTop: ".4rem",
                                            marginLeft: "1rem"
                                        }}>取消收藏</Button>
                                </li>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}
export default Collect