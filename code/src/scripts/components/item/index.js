import "./index.scss";

import React, { Component } from "react";

import { WingBlank, Button, WhiteSpace } from "antd-mobile";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
@connect()
class Item extends Component {
    render() {
        const {
            item
        } = this.props
        // console.log(this.props.item);
        return (
            <Link to={"/listdetail/" + item.goodsid + "?title=" + item.title} >
                <div className="move-in" style={{ border: "1px solid #FF99CC" }}>
                    <div className="goodlist">
                        <div className="pic_title">
                            <img src={item.pic} alt="" className="pic" />
                            <p className="title">{item.title.slice(0, 16)}</p>
                        </div>

                        <span className="labelTwo"><b
                            style={{
                                color: "#CC3333"
                            }}
                        >品牌:</b>{item.brand_name}</span>
                        <div className="pricediv">
                            <span className="yuanjia"
                                style={{
                                    display: 'flex',
                                   alignItems:"center"  
                                }}
                            >
                                <b
                                    style={{
                                        color: "#CC3333"
                                    }}
                                >
                                    天猫价:
                                </b>
                                {item.yuanjia + "元"}</span>
                            <span className="jiage"
                            style={
                                {
                                    display: 'flex',
                                    alignItems:"center"  
                                }
                            }
                            >
                                <b style={{
                                    color: "#CC3333"

                                }}>劵后价:</b>  {item.jiage}元</span>
                            <p className="price"
                            style={{
                                display: 'flex',
                                alignItems:"center" 
                            }}
                            >
                                <b style={
                                    {
                                        color:"#CC3333",
                                       
                                    }
                                }>
                                    销量
                                </b>
                                {(item.xiaoliang / 1000).toFixed(2) + "万"}
                                </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
export default Item