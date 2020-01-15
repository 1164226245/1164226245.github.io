import "./index.scss";
import React, { Component } from "react";

import { WingBlank, WhiteSpace, Picker, Accordion, List, Icon, PullToRefresh, NoticeBar, Button, Checkbox, InputItem } from 'antd-mobile';

import Head from "~/components/head";
//引入axios 
import { axios } from "&";   //从util的index里面引入axios
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import shopcar from "~/mobx/shopcar";
import address from "~/mobx/address";
import { observer } from "mobx-react";
import { history } from "&";

// console.log(address);
@observer
class Orderfrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pickerValue: [],
            label: {},
           obj11:{}
        }

    }
    //渲染所有地址
    componentDidMount() {
        // address.getAddrList("/react/showaddress");
        address.getDefaultAddrList("/react/showdefaultone");
    }
    //去地址
    gotoAddress = () => {
        history.push("/address");
    }
    render() {
        const {
            carList,
            carNum,
            total,
            quan,
            checkedGood
        } = shopcar
        // console.log(shopcar.carList);
        // console.log(shopcar.checkedGood);
        // console.log(shopcar.carNum);
        //console.log(this.state.pickerValue);
        const {
            addressList,
            //默认地址
            defaultAddressList,
            // ...defaultAddressList

        } = address
        // console.log(defaultAddressList);
        //  console.log({...defaultAddressList.addresobj});
         var obj1=defaultAddressList==null?"":{...defaultAddressList.addresobj}
        //  console.log(obj1);
        //  console.log(obj1.mobile);
        //  console.log(obj1.province)
        //  const {
        //     obj11:{
        //         mobile:obj1.mobile,
        //     }
        //  }=this.state
        //  console.log(this.state.obj11);
        //  console.log({...defaultAddressList,...addresobj});
        //  console.log(addresobj)
        //  console.log(addresobj.mobile)
        //  console.log(defaultAddressList.addresobj.mobile)
        return (
            <div className="orderinfo">
                <Head title={"欢迎:" + sessionStorage.mobile}
                    style={{ color: "#ffffff" }} show={true} ></Head>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    订单页的编辑按钮点击后会跳转到地址编辑页面,请放心进行地址修改
                </NoticeBar>
                {
                    checkedGood.map((item, index) => {
                        return (
                            item.good && <ul className="tr" key={index} id={item._id}>
                                <li style={{ width: "24%" }}><img src={item.good.pic} /></li>
                                <li style={{ width: "38%" }}>
                                    <p style={{ lineHeight: "18px", marginTop: '36px' }}>{item.good.dtitle ? item.good.dtitle.slice(0, 14) : item.good.d_title.slice(0, 14)}
                                    </p>
                                    <p style={{ lineHeight: "18px" }}>￥{item.good.jiage + "元"}</p>

                                </li>
                                <li style={{ width: "26%" }}>
                                    <p style={{ lineHeight: "100px" }}><span>数量</span>{item.count}</p>
                                </li>
                                <div className="carFoot">
                                    <p style={{ width: '50%', lineHeight: '50px', color: "#fff" }}>
                                        商品总价:<span style={{ width: '100px', color: "#99CCCC" }}> {total + "元"} </span>
                                        <span style={{ fontWeight: "500", color: "#FFFF00" }}><b>选中:</b>{carNum}</span>
                                    </p>

                                    <Button type="primary"
                                        style={{
                                            backgroundColor: "red",
                                            color: "#FFFF66",
                                            width: "1.6rem",
                                            float: "right"
                                        }}>提交信息</Button>

                                </div>
                            </ul>

                        )
                    })
                }

                <div className="showaddress">
                    {
                        // defaultAddressList.map((item, index) => {
                        // return (
                        // < ul className="tr" style={{ height: "50px", display: !!defaultAddressList ? "block" : "none" }}   >
                        defaultAddressList&&< ul className="tr" style={{ height: "50px", display: defaultAddressList==null ? "none" : "block" }}   >
                            <li style={{ width: "25%", lineHeight: '50px' }}>
                                <p
                                    className="title"
                                    style={{
                                        lineHeight: "0px",
                                        marginTop: '30px'
                                    }}>
                                    {/* {defaultAddressList.mobile} */}
                                    {obj1.mobile}
                                </p>
                            </li>
                            <li style={{ width: "25%", lineHeight: '50px' }}>
                                <p
                                    className="title"
                                    style={{
                                        lineHeight: "0px",
                                        marginTop: '30px'
                                    }}>
                                    {obj1.province}
                                </p>
                            </li>

                            <li style={{ width: "25%", lineHeight: '50px' }}>
                                <p
                                    className="title"
                                    style={{
                                        lineHeight: "0px",
                                        marginTop: '30px'
                                    }}>
                                    {/* {defaultAddressList.town} */}
                                    {obj1.town}
                                </p>
                            </li>
                            <li style={{ width: "25%", lineHeight: '50px' }}>
                                <p
                                    className="title"
                                    style={{
                                        lineHeight: "0px",
                                        marginTop: '30px'
                                    }}>
                                    {/* {defaultAddressList.district}
                                     */}
                                     {obj1.district}
                                </p>
                            </li>
                            <li style={{ width: "100%", lineHeight: '50px' }}>
                                <p
                                    className="title"
                                    style={{
                                        lineHeight: "0px",
                                        marginTop: '30px',
                                        textAlign: "left",
                                        textIndent: "5px"
                                    }}>
                                    {/* {defaultAddressList.specific} */}
                                    {obj1.specific}
                                </p>
                                <p style={{
                                    color: "red",
                                    float: 'right',
                                    lineHeight: '1px'
                                }}>
                                    默认地址:
                                            <Checkbox
                                        checked={defaultAddressList.checked}
                                        goodsid={defaultAddressList._id}
                                        onChange={defaultAddressList.checkOne} >

                                    </Checkbox>
                                </p>
                            </li>
                        </ul>
                        // )
                        // })

                    }
                    <div className="sh" style={{ display: !!defaultAddressList ? "none" : "block" }}>
                        <p>您还是没有设置默认地址请设置</p>
                    </div>
                </div>
                <List renderHeader={() => '编辑地址跳转地址页'}>
                    <Button type="primary" style={{ backgroundColor: "#99CCFF", color: "#FF6666" }} onClick={this.gotoAddress}>编辑地址</Button>
                </List>
            </div>

        )
    }

}
export default Orderfrom