
import "./index.scss";
import React,{Component} from "react";
import {
    NavLink
}  from "react-router-dom"
import {Badge} from "antd-mobile";
import {connect} from "react-redux";
import {observer} from "mobx-react";
import shopcar from "~/mobx/shopcar";
import Shopcar from "../../views/shopcar";
// console.log(shopcar);  //可以拿到商品数量 carTotal

export const foots = [
    {txt:"首页",path:"/main/home",name:"home",icon:"icon-home"},
    {txt:"分类",path:"/main/classify",name:"classify",icon:"icon-svgclassifyselect"},
    // {txt:"购物车",path:"/main/cart",name:"cart",icon:"icon-shop_car"},
     {txt:"购物车",path:"/main/shopcar",name:"shopcar",icon:"icon-shop_car"},
    {txt:"我的",path:"/main/mine",name:"mine",icon:"icon-minefill"}
];

@connect()
@observer
class Foot extends Component{
    
    state = {
        foots,
        active:2
    }

    componentDidMount(){
        this.setState({
            active:localStorage.active
        })
    }

    handleChangeActive=(index)=>{
        console.log(index);
        localStorage.active = index;
    }

    render(){
        const {
            active
        } = this.state;
        // console.log(this.state);
        const {

        }=this.props;
        const {
            carList,
            carNum,
            total,
            carTotal
        }=shopcar
        // console.log(this.props);
        // console.log(shopcar.carTotal)
        return (
           <footer>
               {
                   this.state.foots.map((foot,i)=>{
                       return (
                           <div key={i} onClick={()=>this.handleChangeActive(i)}>
                                <NavLink activeClassName="nav-active"  to={foot.path} >
                                    <i className={"iconfont "+foot.icon}> </i>
                                    <span> {foot.txt} </span>
                                    {i==this.state.foots.length-2&&<Badge 
                                        text={carTotal} 
                                        className="hot" 
                                        hot 
                                        style={{ 
                                        marginLeft: 12,
                                        // paddingLeft:"8px",
                                        paddingRight:"9px",
                                        backgroundColor:active==2?"#FF6666":"#999999"
                                     }} />}
                                </NavLink>
                           </div>
                       )
                   })
               }
           </footer>
        )
    }
}

export default  Foot