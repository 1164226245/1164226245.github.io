import "./index.scss";
import React, { Component } from "react";

import { Modal, Toast,Stepper, Card, WingBlank, WhiteSpace, Accordion, List, Icon, PullToRefresh, NoticeBar, Button } from 'antd-mobile';

//Accordion 手风情

//引入head组件
import Head from "~/components/head";

//引入axios 
import { axios } from "&";   //从util的index里面引入axios

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMobile, } from "../../actions";

import { history } from "&";
const alert = Modal.alert;
const showAlert = (that) => {
    const alertInstance = alert('提示', '您即将去购物车页面', [
        { text: '取消', onPress: () => console.log("取消跳转"), style: 'default' },
        { text: '确认', onPress: () => history.push("/main/shopcar") },
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};
//将ui组件转换为容器组件
@connect(
    (state) => {
        return {
            indexdetail: state.getIn(['data', 'indexdetail']),
            mobile: state.getIn(['user', 'mobile']),
            gotoshoppingcar: state.getIn(['data', 'gotoshoppingcar'])
        }
    }
)
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: [],
            goodsId: "",
            count:1
        }
    }
    changeCount=(val)=>{
        this.setState({
            count:val
        })
    }
    collect=()=>{
        //发送请求并接收
        axios.post("/react/collect",{
            good:this.state.good[0],
            goodsid:this.props.match.params.goodsid,
            tag:1
        }).then(res=>{
            // console.log(res);
        })
    }
    componentDidMount() {
            const goodsid = this.props.match.params.goodsid;
            // console.log(goodsid);
            axios.get("/react/classfily/detail", {
                params: {
                    goodsid
                }
            }).then(res => {
                console.log(res);
                this.setState({
                    good: res.data.result
                })
    
            })
            //拿手机号
            if (!this.props.mobile) {
                this.props.dispatch(getMobile({
                    url: "/react/getMobile"
                }))
            }

    }
     //跳入购物车:
     addShoppingCar=()=>{
        
        axios.post("/react/addshoppingcar",{
            count:this.state.count,
            good:this.state.good[0],
            goodsid:this.props.match.params.goodsid

        }).then(res=>{
            console.log(res);
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
            indexdetail,
            gotoshoppingcar,

        } = this.props;
        // console.log(this.props);
        // console.log(this.props.good);
        const {
            good
        }=this.state
        // console.log(this.state.good);
        // console.log(this.state.good[0]);
        return (
            <div>
                <Head title={new URLSearchParams(location.search).get('title').slice(0, 12)}
                    style={{ color: "#ffffff" }} show={true} ></Head>
                <div className="detailbox">
                    {
                        good.map((good,i)=>{
                            return(
                                <div key={i}>
                                <WingBlank size="lg">
                                <WhiteSpace size="lg" />
                                <Card>
                                    <Card.Header
                                        extra={<span>劵后RMB: ¥{good.jiage}</span>}
                                        title={good.d_title}
                                    >
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{good.title}</p>
                                        <div><img style={{ width: "100%", height: "4rem" }} src={good.pic} alt="" /></div>
                                    </Card.Body>
                                    <Card.Footer
                                       content="好货"  
                                       extra={<div style={{backgroundColor:"red",
                                       color:"#CCFF99",borderRadius:"50%",
                                       width:"0.8rem",height:"0.8rem",
                                       lineHeight:"0.8rem",textAlign:"center",
                                       marginLeft:"2rem"}}
                                       onClick={this.collect}>收藏</div>} />
                                </Card>
                                <WhiteSpace size="lg" />
                                <div>
                                    购买数量:
                                    <Stepper
                                        style={{ width: '50%', minWidth: '100px' }}
                                        showNumber
                                        min={1}
                                        value={this.state.count}
                                        onChange={this.changeCount}
                                     />
                                </div>
                                <Button type="primary" 
                                style={{ backgroundColor: "#CCFF99", color: "#FF6666" }} 
                                size="large"
                                onClick={this.addShoppingCar}
                                >
                                    加入购物车
                                </Button>
                                <WhiteSpace size="lg" />
                                <Button type="warning" size="large" onClick={showAlert}>立即购买</Button>
                            </WingBlank>
                            </div>
                            )
                        })
                        
                    }
                </div>

            </div>
        )
    }
}
//下面暴露
export default Detail