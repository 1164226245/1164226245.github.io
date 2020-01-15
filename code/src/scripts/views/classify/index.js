import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { WhiteSpace, WingBlank, Tabs } from "antd-mobile";
import { connect } from "react-redux";
import { getGoodsList, getGoodsType } from "../../actions";
 import  List from "~/components/list";    
@connect(
    (state) => {
        return {
            goodsList: state.getIn(['data', 'goodsList']),
            goodsType: state.getIn(['data', 'goodsType'])
        }

    }
)
class Classify extends Component {
    constructor(props){
        super(props)  
    }
    componentDidMount() {
        if (!this.props.goodsList.length > 0) {
           this.props.dispatch(getGoodsList({
                url: "/react/classfily/goodslist"
                }
            ))
        }
        if(!this.props.goodsType.length>0){
            this.props.dispatch(getGoodsType({
                url:"/react/classfily/goodstype"
            }))
        }

    }
    render() {
        const {
            goodsList,
            goodsType
        } = this.props;
        console.log(this.props);
        const tabs=goodsType.map((item)=>{
            // console.log(item);
             item.title=item.name
            //  console.log(item.id);
            return item;
        })
        return (
            <div>
                <Head title="商品列表"></Head>
                {/* <h3> 商品列表--</h3> */}

                <Tabs
                     tabs={tabs }
                     initialPage={0}
                     tabBarBackgroundColor="#c00300"
                     tabBarActiveTextColor="#fff"
                     tabBarTextStyle={{color:"#fff"}}
                >
               {
                   goodsType.map((val,i)=>{
                       return(
                           <List
                           key={i}
                           tab={val}
                           good={goodsList.filter(item=>item.cid==val.id)}
                           >

                           </List>
                           
                       )
                   })
               }
                </Tabs>
            </div>
        )
    }
}
export default Classify