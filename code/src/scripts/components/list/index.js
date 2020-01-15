import "./index.scss";

import React, { Component } from "react";

import  {WingBlank,WhiteSpace,PullToRefresh}  from  "antd-mobile";

import Item from "../item";

import {success} from "&/axios";
import { ChangeGoodListReverse } from "../../actions";
import {connect} from "react-redux";
@connect()
 class List extends Component{
    constructor(){
        super()
        this.state = {
            refreshing:false
        }
    }
    render(){
        const {
            tabs,
            good
        }=this.props
        console.log(this.props.good);
        return(
            <div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        overflow: 'auto',
                    }}
                    indicator={ { deactivate: '上拉可以刷新' }}
                    direction= { 'down' }
                    refreshing={this.state.refreshing}
                    onRefresh={
                        ()=>{
                            this.setState({ refreshing: true });  // 正在刷新 
                            setTimeout(() => {

                                const {
                                    dispatch
                                }=this.props;
                                console.log(this.props);
                                dispatch(ChangeGoodListReverse());
                                success("刷新成功")
                                this.setState({ refreshing: false }); 
                            }, 1000);
                        }
                    }
                    >
                        {
                            good.map((item,index)=>{
                                return(
                                    <Item key={index} item={item}>

                                    </Item>
                                )
                            })
                        }
                    </PullToRefresh>
            </div>
        )
    }
}
export default List