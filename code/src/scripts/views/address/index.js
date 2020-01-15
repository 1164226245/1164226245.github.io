import "./index.scss";
import React, { Component } from "react";

import { WingBlank, WhiteSpace, Picker, Accordion, List, Icon, PullToRefresh, NoticeBar, Button, Checkbox, InputItem, Flex, Card } from 'antd-mobile';

import Head from "~/components/head";
//引入axios 
import { axios } from "&";   //从util的index里面引入axios
import { Link } from "react-router-dom";
import address from "~/mobx/address";
import { observer } from "mobx-react";
import { history } from "&";
@observer
class Address extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        //渲染地址
        address.getAddrList("/react/showaddress");
        //渲染默认地址

    }
    //点击完成默认地址的设置
    checkOne = e => {
        console.log(e);  //可以拿到goodsid 和checked
        console.log(e.target.id);
        console.log(e.target.checked);
        address.setDefaultAddre(sessionStorage.mobile, e.target.id, e.target.checked);
        // if(num=="200"){

        // }
    }
    //删除
    deloneAddress = (mobile, id) => {
        address.deleteOneAddr(mobile, id);
        history.go(0);
    }
    editP = (inputRef) => {
        console.log(inputRef);
    }
    //点击跳转去修改地址
    // gotoEditAddress = (mobile, id, province, town, district, specific) => {
    //     // address.modifyaddress(mobile,id,province,town,district,specific);

    //     history.push("./modifyaddress?id=" + id)
    // }
    // gotoEditAddress = (mobile, id, addresobj) => {
    //     // address.modifyaddress(mobile,id,province,town,district,specific);

    //     history.push("./modifyaddress?id=" + id)
    // }
    gotoEditAddress = (mobile, id, addresobj) => {
        // address.modifyaddress(mobile,id,province,town,district,specific);

        // history.push("./modifyaddress?id=" + id)
        history.push("./modifyaddress?id="+id)
    }
    //保存地址
    saveAddress = () => {
        console.log(this.provinceRef.state.value);
        axios.post("/react/addaddress", {
            // mobile: sessionStorage.mobile,
            mobile: sessionStorage.mobile,
            addresobj: {
                mobile: this.moblieRef.state.value,
                province: this.provinceRef.state.value,
                town: this.townRef.state.value,
                district: this.districtRef.state.value,
                specific: this.inputRef.state.value,
                checked: false
            }
            // mobile: this.moblieRef.state.value,
            // province: this.provinceRef.state.value,
            // town: this.townRef.state.value,
            // district: this.districtRef.state.value,
            // specific: this.inputRef.state.value,
            // defaulta: 0
        }).then(res => {
            console.log(res);
            history.go(0);
        })

    }
    render() {
        // console.log(this.provinceRef);
        // console.log(this.townRef);
        // console.log(this.districtRef);
        // console.log(this.inputRef.state.value);
        const {
            addressList,
            num
        } = address
        console.log(addressList);
        // var 
        return (
            <div>
                <Head title={"用户" + sessionStorage.mobile}
                    style={{ color: "#ffffff" }} show={true} ></Head>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    地址页可以完成地址新增,设置默认地址,删除地址以及地址修改等功能
                </NoticeBar>
                {/* <h3>我的地址页面</h3> */}
                {/* <List renderHeader={() => '请输入详细地址'}> */}
                <InputItem
                    placeholder="收货手机号"
                    ref={el => this.moblieRef = el}
                    onChange={this.editP}
                >
                    <div onClick={() => this.labelFocusInst.focus()}>手机号:</div></InputItem>
                <InputItem
                    placeholder="xx省"
                    ref={el => this.provinceRef = el}
                    onChange={this.editP}
                >
                    <div onClick={() => this.labelFocusInst.focus()}>省:</div></InputItem>
                <InputItem
                    placeholder="xx市"
                    ref={el => this.townRef = el}
                    onChange={this.editP}
                >
                    <div onClick={() => this.labelFocusInst.focus()}>市</div></InputItem>
                <InputItem
                    placeholder="xx区"
                    // ref={el => this.labelFocusInst = el}
                    ref={el => this.districtRef = el}
                    onChange={this.editP}
                >
                    <div onClick={() => this.labelFocusInst.focus()}>区</div></InputItem>
                <InputItem
                    placeholder="xx街道xx号..."
                    // ref={el => this.labelFocusInst = el}
                    ref={el => this.inputRef = el}
                    onChange={this.editP}
                >
                    <div onClick={() => this.labelFocusInst.focus()}>具体</div></InputItem>
                <Button type="ghost" style={{ backgroundColor: "#99CCFF", color: "#FF6666" }} onClick={this.saveAddress}>新增地址</Button>
                {/* </List> */}
                {/* 地址渲染  s */}
                <div className="showaddress">
                    {
                        addressList.map((item, index) => {
                            console.log(item);
                            console.log(item.addresobj.checked);
                            return (
                                < ul className="tr" key={index} id={item._id} style={{ height: "50px" }}>
                                    <li style={{ width: "25%", lineHeight: '50px' }}>
                                        <p
                                            className="title"
                                            style={{
                                                lineHeight: "0px",
                                                marginTop: '30px'
                                            }}>
                                            {/* {item.mobile} */}
                                            {item.addresobj.mobile}
                                        </p>
                                    </li>
                                    <li style={{ width: "25%", lineHeight: '50px' }}>
                                        <p
                                            className="title"
                                            style={{
                                                lineHeight: "0px",
                                                marginTop: '30px'
                                            }}>
                                            {/* {item.province + "省"} */}
                                            {item.addresobj.province + "省"}
                                        </p>
                                    </li>
                                    <li style={{ width: "20%", lineHeight: '50px' }}>
                                        <p
                                            className="title"
                                            style={{
                                                lineHeight: "0px",
                                                marginTop: '30px'
                                            }}>
                                            {/* {item.town + "市"} */}
                                            {item.addresobj.town + "市"}
                                        </p>
                                    </li>
                                    <li style={{ width: "25%", lineHeight: '50px' }}>
                                        <p
                                            className="title"
                                            style={{
                                                lineHeight: "0px",
                                                marginTop: '30px'
                                            }}>
                                            {/* {item.district + "区"} */}
                                            {item.addresobj.district + "区"}
                                        </p>
                                    </li>
                                    <li style={{ width: "100%", lineHeight: '50px', display: 'flex', justifyContent: ' spaceBetween' }}>
                                        <p
                                            className="title"
                                            style={{
                                                lineHeight: "0px",
                                                marginTop: '24px',
                                                textAlign: "left",
                                                width: "50%",
                                                textOverflow: "ellipsis"
                                            }}>
                                            {/* {item.specific} */}
                                            {item.addresobj.specific}
                                        </p>
                                        <div className="defaultone"
                                            style={
                                                {
                                                    display: 'flex',
                                                    alignItems: "end",
                                                    width: "60%"
                                                }
                                            }
                                        >
                                            <p>
                                                默认地址:
                                            <Checkbox
                                                    checked={item.checked}
                                                    id={item._id}
                                                    onChange={this.checkOne} >
                                                </Checkbox>
                                            </p>
                                            <p style={{
                                                display: "flex",
                                                alignSelf: "center"
                                            }}>
                                                <Button
                                                    onClick={() => this.deloneAddress(sessionStorage.mobile, item._id)}
                                                    type="primary"
                                                    size="small"

                                                    inline
                                                    style={{
                                                        backgroundColor: "#CC3333",
                                                        color: "#CCCCCC",

                                                    }}>删除</Button>
                                                <Button
                                                    type="primary"
                                                    size="small"

                                                    inline
                                                    style={{
                                                        backgroundColor: "#FF9966",
                                                        color: "#fff",
                                                        fontSize: ".2rem"
                                                    }}
                                                   
                                                    onClick={() => this.gotoEditAddress(
                                                       
                                                        item.addresobj.mobile,
                                                        item._id,
                                                        {
                                                            province: item.addresobj.province,
                                                            town:item.addresobj.town,
                                                            district:item.addresobj.district,
                                                            specific:item.addresobj.specific
                                                        }
                                                       
                                                    )}
                                                >修改</Button>

                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>

                {/* 地址渲染  e */}
            </div>
        )
    }
}
export default Address