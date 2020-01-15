import "./index.scss";
import React, { Component } from "react";

//引入head组件
import Head from "~/components/head";
//SearchBar搜索框
import {
    WingBlank,  //两翼留白
    WhiteSpace,   //左右留白
    SearchBar,
    PullToRefresh    //下拉刷新

} from "antd-mobile"
import { connect } from "react-redux";
import { getSearchDetail, ChangeSerchListReverse } from "../../actions";
import { Link } from "react-router-dom";
import {success} from "&/axios"
@connect(
    (state) => {
        return {
            seracDetail: state.getIn(['data', 'seracDetail'])
        }
    }
)
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // seracDetail: [],
            refreshing: false
        }
    }
    //点击后键盘回车事件  /react/classfily/search
    handleSubmit(keyword) {
        // console.log(keyword);
        this.props.dispatch(getSearchDetail({
            url: '/react/classfily/search',
            params: {
                keyword: keyword
            }

        }))
    }
    render() {
        const {
            location,
            detail,
            dispatch,
            seracDetail

        } = this.props;
        // console.log(this.props);
        return (
            <div>
                <Head search={true} title="搜索" show={true}></Head>
                <WingBlank>
                    <SearchBar placeholder="请输入商品关键字" onSubmit={this.handleSubmit.bind(this)} />
                    <div className="serachtitle">
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
                                            }=this.props
                                            dispatch(ChangeSerchListReverse());
                                            success("刷新成功")
                                            this.setState({ refreshing: false });
                                        }, 1000);
                                    }
                                }
                            >
                        {
                            seracDetail.map((item, i) => {
                                return (
                                    <Link to={"/listdetail/" + item.goodsid + "?title=" + item.title} key={i}>
                                    <div className="result move-search" >
                                        <p className="d_title"><span>简介:</span>{item.d_title}</p>
                                        <p className="title"><span>标题:</span>{item.title}</p>
                                      
                                        <p 
                                        className="miaoshu"
                                        style={{

                                        }}
                                        ><span>商品描述:</span> {item.miaoshu}</p>
                                    </div>
                                    </Link>

                                )

                            })
                        }
                        </PullToRefresh>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
export default Search