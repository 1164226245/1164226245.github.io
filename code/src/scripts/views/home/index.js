import "./index.scss";
import React, { Component } from "react";

import { Carousel, WingBlank, WhiteSpace, Accordion, List, Icon, PullToRefresh } from 'antd-mobile';

//Accordion 手风情

//引入head组件
import Head from "~/components/head";

//引入axios 
import { axios } from "&";   //从util的index里面引入axios

import { Link } from "react-router-dom";

//ui组件变容器组件  使用@connect
import { connect } from "react-redux";
import { getBanner, getMiddleBanner, getBrandbanner, getSmallbanner, getNoticebar, getIndexList, ChangeIndexListReverse } from "../../actions";
import {success} from "&/axios";
//direction: 'vertical', // 垂直切换选项  垂直轮播
@connect(
    (state) => {
        return {
            banner: state.getIn(['data', 'banner']),
            middlebanner: state.getIn(['data', 'middlebanner']),
            brandbanner: state.getIn(['data', 'brandbanner']),
            smallbanner: state.getIn(['data', 'smallbanner']),
            noticebar: state.getIn(['data', 'noticebar']),
            indexlist: state.getIn(['data', 'indexlist'])
        }
    }
)
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: [
            ],
            refreshing: false
        }
    }
    //请求数据
    componentDidMount() {
        //使用基路径 http://localhost:1234/react/maizuo/banner
        // axios.get("/react/maizuo/banner").then(res => {
        //     console.log(res);   //数据结果

        //     this.setState({
        //         banner: res.data.result
        //     })
        //     console.log(this.state.banner);
        // })
        //数据缓存
        if (!this.props.banner.length > 0) {
            this.props.dispatch(getBanner({
                //http://localhost:4321/react/home/banner
                url: "/react/home/banner",
                cb() {

                }
            }))
        }
        if (!this.props.middlebanner.length > 0) {
            this.props.dispatch(getMiddleBanner({
                url: "/react/home/middlebanner",
                cb() {

                }
            }))
        }
        //品牌热卖的轮播图
        //http://localhost:4321/react/home/middlebanner
        if (!this.props.brandbanner.length > 0) {
            this.props.dispatch(getBrandbanner({
                url: "/react/home/brandbanner",
                cb() {

                }
            }))
        }

        //中间小图标的轮播图
        if (!this.props.smallbanner.length > 0) {
            this.props.dispatch(getSmallbanner({
                url: "/react/home/smallbanner",
                cb() {

                }
            }))
        }
        //获取通知栏
        if (!this.props.noticebar.length > 0) {
            this.props.dispatch(getNoticebar({
                url: "/react/home/noticebar",
                cb() {

                }
            }))
        }
        //获取首页列表页
        if(!this.props.indexlist.length>0){
            this.props.dispatch(getIndexList({
                url: "/react/home/indexlist",
                cb() {
    
                }
            }))
        }
    }
    render() {
        const {
            banner,
            dispatch,
            middlebanner,
            brandbanner,
            smallbanner,
            noticebar,
            indexlist,

        } = this.props;
        // console.log(this.props);
        return (
            <div className="h-main">
                <Head title="省逛_省逛优惠券" style={{ color: "#ffffff" }}></Head>
                {/* <h3>home-hone-主页</h3> */}
                <WingBlank>
                    <WhiteSpace />
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {
                            banner.map((item, index) => {
                                return (
                                    <Link to={item.jumpUrl} key={index} style={{ display: 'inline-block', width: '100%', height: '2.0rem' }}>
                                        <img
                                            src={item.pic}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top', height: '2.0rem', borderRadius: ".5rem" }}
                                            onLoad={() => {
                                                window.dispatchEvent(new Event('resize'));
                                            }}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
                {/* banner2  s */}
                <WingBlank>
                    <WhiteSpace />
                    <div className="large_activity">
                        <div className="bigbanner"></div>
                        <div className="max_activity">

                            <a>
                                <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01kNjlot2JJhzgkFwmT_!!2053469401.gif" />
                            </a>
                        </div>
                        <ul className="activity_min_group">
                            <li className="activity_min">

                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01pQusmC2JJhzq64mJf_!!2053469401.gif" />

                            </li>
                            <li className="activity_min">

                                <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Kh49hA2JJhzje74yw_!!2053469401.png" />

                            </li>
                        </ul>
                    </div>

                </WingBlank>
                {/* banner2  e */}

                {/* banner 3   s */}
                <WingBlank>
                    <WhiteSpace />
                    <div className="nav">
                        <ul className="nav_ul">
                            {
                                smallbanner.map((item, i) => {
                                    return (
                                        <Link to="/" key={i}>

                                            <li>
                                                <div>
                                                    <img src={item.address} alt="" style={{ width: "1rem", height: "1rem" }} />
                                                </div>
                                                <span >{item.name}</span>
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </WingBlank>
                {/* banner 3   e */}
                {/* 优惠头条  s */}
                <WingBlank><hr /></WingBlank>
                <WingBlank>
                    <WhiteSpace />
                    <div className="topline">
                        <div className="toplinelogo">
                            <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png" />
                        </div>
                        <WingBlank>

                            <div className="noticecarouser">
                                <Carousel
                                    vertical
                                    dots={false}
                                    dragging={false}
                                    swiping={false}
                                    autoplay
                                    infinite
                                >
                                    {
                                        noticebar.map((item, i) => {
                                            return (
                                                <Link to="/" key={i}>
                                                    <div className="v-item"><span>{item.tag}</span>{item.name}
                                                        <Icon type="right" size="sm" color="#000" className="iconright" />
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }

                                </Carousel>
                            </div>
                        </WingBlank>
                    </div>
                </WingBlank>

                {/* 优惠头条  e */}
                {/* 咚咚呛  s */}
                <WingBlank>
                    <div className="main_module_layout" style={{ height: "5rem", backgroundImage: 'url("https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Y5Yj1d2JJhzhftqMa_!!2053469401.gif")' }}></div>
                </WingBlank>
                {/* 咚咚呛  e */}
                {/* 品牌热卖  s */}
                <WingBlank>
                    <div className="main_module_layout">
                        <div style={{ paddingTop: ' .05rem', paddingBottom: '.05rem' }}>
                            <div className="brand_product show_module">
                                <div className="title_group">
                                    <div className="title">
                                        <h3>品牌特卖</h3>
                                        <p className="text-center"><span><span className="brand_num">490</span>+品牌</span></p></div><div className="more"><a id="cms_wap_more_brand" href="?r=index/brand&amp;more_brand=0">更多品牌<i className="iconfont icon-youjiantou"></i></a></div></div>
                                <ul className="brand_product_lists">
                                    {
                                        brandbanner.map((item, i) => {
                                            return (
                                                <Link to="/" key={i}>
                                                    <li className="brand_product_list">
                                                        <img src={item.address} alt="" />
                                                    </li>
                                                </Link>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </WingBlank>
                {/* 品牌热卖  e */}
                {/* 首页列表 s */}
                <WingBlank>
                    <div className="indexlist move2">
                        <p className="find_product_info text-center">发现好货</p>
                        <ul className="indexul">
                            <PullToRefresh
                                damping={60}
                                ref={el => this.ptr = el}
                                style={{
                                    overflow: 'auto',
                                }}
                                indicator={{ deactivate: '上拉刷新' }}
                                direction={'down'}
                                refreshing={this.state.refreshing}
                                onRefresh={
                                    () => {
                                        this.setState({ refreshing: true });  // 正在刷新 
                                        setTimeout(() => {
                                            const {
                                                dispatch
                                            }=this.props;
                                            dispatch(ChangeIndexListReverse());
                                            success("刷新成功")
                                            this.setState({ refreshing: false });
                                        }, 1000);
                                    }
                                }
                            >
                                {
                                    indexlist.map((item, i) => {
                                        return (
                                            <Link to={"/detail/"+item.goodsId+"?title="+item.title} key={i}>

                                                <li>
                                                    <img src={item.pic} alt="" />
                                                    <div className="titlename">
                                                        <h3 className="product_title">
                                                            <span className="labelTop tm"></span>
                                                            <span className="title_text">{item.title}</span>
                                                        </h3>
                                                    </div>
                                                    <div className="product_info">
                                                        <div className="price">
                                                            <span>券后&nbsp;</span>
                                                            <span className="RMB">¥</span>
                                                            <span className="price_num">{item.jiage}</span>
                                                        </div>
                                                        <div className="label_box">
                                                            <span id="label_box_24419759">
                                                                <span className="label label1">{item.labelTwo}</span>
                                                                <span className="juan">
                                                                    <span>劵</span>
                                                                    {item.quanJine}
                                                                </span>

                                                            </span>
                                                        </div>
                                                        <div className="salse">
                                                            <span>{"销量:"+(item.xiaoliang/10000).toFixed(2)+"万"}</span>
                                                            <span>{item.comments}</span>
                                                        </div>
                                                    </div>
                                                </li>

                                            </Link>
                                        )
                                    })
                                }
                            </PullToRefresh>
                        </ul>
                    </div>
                </WingBlank>
                {/* 首页列表  e */}
            </div >
        )
    }
}
export default Home