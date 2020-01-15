import "./index.scss";
import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
//Modal 对话框

const alert = Modal.alert;
const showAlert = (that) => {
    const alertInstance = alert('警告', '我们即将调用你的手机设备', [
        //返回
        { text: '取消', onPress: () =>that.props.history.go(-1), style: 'default' },     
        { text: '确认', onPress: () => Toast.success('获得允许,即将调用', 1) },
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};
export default class Scan extends Component {
    componentWillMount() {
        showAlert(this)
    }

    render() {
        return (
            <div>
                <Head title="扫一扫" show={true} scan={true}></Head>
                <h3>扫一扫</h3>
            </div>
        )
    }
}