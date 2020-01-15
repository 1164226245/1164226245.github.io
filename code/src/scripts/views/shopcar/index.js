import "./index.scss";
import React, { Component } from "react";

import { WingBlank, WhiteSpace, Accordion, List, Icon, PullToRefresh, NoticeBar, Button, Checkbox } from 'antd-mobile';

import Head from "~/components/head";

//引入axios 
import { axios } from "&";   //从util的index里面引入axios
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "&";
import { getMobile, showShoppingCarInfo } from "../../actions";
import shopcar from "~/mobx/shopcar"
import { observer } from "mobx-react";
import { success } from "&/axios";

// console.log(shopcar);
@connect(
    (state) => {
        return {
            shoppingInfo: state.getIn(['data', 'shoppingInfo']),
            mobile: state.getIn(['user', 'mobile'])
        }
    }
)
@observer
class Shopcar extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (!this.props.mobile) {
            this.props.dispatch(getMobile({
                url: "/react/getMobile"
            }))
        }

        //运用mobx得到购物车列表信息
        shopcar.getCarList("/react/shopcar/showshoppingcar")
    }
    //自定义函数
    //单选
    checkOne = e => {
        console.log(e);   //可以拿到goodsid 和checked
        shopcar.changeOneChecked(e.target.checked, e.target.goodsid)
    }
    //全选
    checkAll = e => {
        console.log(e);
        console.log(e.target.checked);
        shopcar.changeQuan(e.target.checked);
    }
    //加
    add = (goodsid, count) => {
        shopcar.changeOneCount(goodsid, true)
    }
    //减少
    reduce = (goodsid, count) => {
        shopcar.changeOneCount(goodsid, false)
    }
    //改具体的数值  使用v避免与e同名
    changeCount = (goodsid, v) => {
        console.log(v.target.value);
        if (v.target.value > 1) {
            //字符串要转数字
            shopcar.changeOneCountNum(goodsid, v.target.value * 1);
        }
    }
    //删除选中
    delSelect = () => {
        shopcar.delSelect();
    }
    //去订单页
   
   
    gotoOrder = () => {
        if (shopcar.checkedGood.length>0) {
            history.push("/orderfrom")
        } else {
            success("请选中您心仪的商品")
        }
    }


    render() {
        const {
            shoppingInfo,
            dispatch,
            mobile
        } = this.props
        // console.log(this.props.mobile);
        const {
            carList,
            carNum,
            total,
            quan,
            checked,
            checkedGood
        } = shopcar
        // console.log(shopcar.carList);
        // console.log(shopcar.total);
        // console.log(checkedGood);
        return (
            <div>
                <Head title="购物车" ></Head>
                <div style={{ display: sessionStorage.token ? 'none' : 'block' }} >
                    <Button type="primary" > 你尚未登陆,请马上登录  </Button>
                </div>
                <div style={{ display: !sessionStorage.token ? 'none' : 'block' }}>
                    <div style={{ display: carList.length > 0 ? 'none' : 'block' }}>
                        <h2> 你 还买购买任何商品,购物车空空如也 , 请马上去购买 </h2>
                    </div>

                    <div style={{ display: !carList.length > 0 ? 'none' : 'block' }} className="move-shop" >
                        <div id="carDiv">
                            <div id="tbody">
                                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                                    临近过年,各大快递公司即将休息,请您抓经最后的时间完成购物下单...
                                </NoticeBar>
                                {
                                    carList && carList.map((i, index) => {
                                        return (
                                            i.good && <ul className="tr" key={index} id={i._id}>
                                                <li style={{ width: "11%" }}>
                                                    <Checkbox
                                                        checked={i.checked}
                                                        goodsid={i.goodsid}
                                                        onChange={this.checkOne} >
                                                    </Checkbox>
                                                </li>
                                                <li style={{ width: "24%" }}><img src={i.good.pic} /></li>
                                                <li style={{ width: "38%" }}>
                                                    <p
                                                        className="title"
                                                        style={{
                                                            lineHeight: "18px",
                                                            marginTop: '36px'

                                                        }}>{i.good.dtitle ? i.good.dtitle.slice(0, 14) : i.good.d_title.slice(0, 14)}
                                                    </p>
                                                    <p style={{ lineHeight: "18px" }}>￥{i.good.jiage + "元"}</p>
                                                </li>
                                                <li style={{ width: "26%" }}>
                                                    <span style={{ fontSize: '22px', marginRight: '3px' }} onClick={() => this.reduce(i.goodsid, i.count)}>-</span>
                                                    <input goodsid={i.goodsid} type="text" value={i.count} onChange={(v) => { this.changeCount(i.goodsid, v) }} style={{ width: "54px", fontSize: '16px', textAlign: 'center', background: 'none', border: '0' }} />
                                                    <span style={{ fontSize: '22px' }} onClick={() => this.add(i.goodsid, i.count)}>+</span>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="carFoot">
                                <Checkbox style={{ width: '4%', float: 'left', marginLeft: '2%', lineHeight: '50px', }} onClick={this.checkAll} checked={quan} ></Checkbox>
                                <p onClick={this.delSelect} style={{ width: '28%', lineHeight: '50px', fontSize: '14px', color: "black", marginLeft: '4%' }} >删除选中</p>
                                <p style={{ width: '36%', lineHeight: '50px', color: "#fff" }}>
                                    商品总价:<span style={{ width: '100px', color: "#99CCCC" }}> {total + "元"} </span>
                                </p>
                                {/* <p style={{ backgroundColor: '#FF9966', width: "26%", fontSize: '20px', lineHeight: '50px', textAlign: 'center', color: "#fff", letterSpacing: '2px' }} >下单 {carNum} 
                                </p> */}
                                {/* <Link to="/orderfrom"> */}
                                <Button
                                    onClick={this.gotoOrder}
                                    type="warning" style={{ backgroundColor: '#FF9966', width: "26%", fontSize: '14px', lineHeight: '50px', textAlign: 'center', color: "#fff", letterSpacing: '2px', borderRadius: '30px' }}>
                                    下单{
                                        carNum
                                    }
                                </Button>
                                {/* </Link> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shopcar