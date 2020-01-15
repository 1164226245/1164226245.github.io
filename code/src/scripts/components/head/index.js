import "./index.scss";
//NavBar 导航栏
//头部组件 Head
import React, { Component } from "react";
//ActionSheet 动作面板
//从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。
//Popover气泡
import { Popover, NavBar, Icon,ActionSheet } from 'antd-mobile';

import { history } from "&";

export default class Head extends Component {

    //自定义函数
    handelGoBack(show) {
        if (show) {
            // history.go(-1);
            history.goBack();
        }

    }
   
    //跳搜索
    handelGoSearch() {
        history.push("/search");  //去搜索
    }
    render() {
        const {
            title,
            show,
            serach
        } = this.props
        // console.log(this.props);
        // console.log(sessionStorage.token);
        var tokenflage=sessionStorage.token;
        // console.log(tokenflage);
        // console.log(this.history);
        return (
            <NavBar
                mode="light"
                className="navbar"
                icon={show && <Icon type="left" />}
                // 主要是返回
                onLeftClick={() => this.handelGoBack(show)}

                rightContent={[
                    !serach && <Icon onClick={this.handelGoSearch.bind(this)} key="0" type="search" style={{ marginRight: '16px' }} />,
                    !tokenflage&&<Pop scan={this.props.scan} login={this.props.login } key={1} />,
                ]}
            >{title}</NavBar>
        )
    }
}

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Pop extends  Component {
    state = {
        visible: false,
        selected: '',
    };
    handleVisibleChange=(visible)=>{
        this.setState({
            visible
        })

    }
    //气泡里面选择跳转的函数
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });

        if(opt.props.value=="login"){
            history.push("/login");
        }else if(opt.props.value=="scan"){
            history.push("/scan");
        }else{
            this.showActionSheet();
        }
    }
    showActionSheet = () => {
        const BUTTONS = ['拍照', '从手机相册选择', '使用相机拍照', '删除', '取消'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          // title: 'title',
          message: '请注意查看',
          maskClosable: true,
          'data-seed': 'logId',
          wrapProps:{
            onTouchStart: e => e.preventDefault(),
          }
        },
        (buttonIndex) => {
          console.log(buttonIndex)
        });
    }

    render() {
        const {
            scan,
            login
        }=this.props
        return (
            <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[
                    // (!scan&&<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                    // (<Item key="5" value="photo" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>拍照</Item>),
                    (!login&&<Item key="6" value="login" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                        <span style={{ marginRight: 5 }}>登录</span>
                    </Item>),
                ]}
                align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
            >
                
                    <Icon type="ellipsis" />
               
            </Popover>
        )
    }
}
