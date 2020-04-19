// react 书写 样式 
// 1. 基于class  但是 react 必须 className 代替class
// 2. 基于内联样式 style  style = {obj}   遵循 驼峰命名 
// style = {backgroundColor:"red",fontSize:20}
// lineHeight:'20px'    必须带单位   px rem em 
// 3. 全局变量  外部样式   原型链挂载 


const styles = {
    one:{
        color:"green",
        fontSize:60,
        lineHeight:'60px'
    },
    two:{
        border:"2px solid red"
    }
}


import {commonCss} from "&"

export class CssDemo extends Component{
    render(){
        console.log(this);
        return (
            <div>
                <h2 className="one">react 组件内部如何书写样式  </h2>
                <h2 className="happy"> 圣诞节 快快快乐乐  </h2>
                <h2 style={{ color:"red",fontSize:40,backgroundColor:"blue" }}>马上2020 祝大家越大越快乐 </h2>
                <h2 style={styles.one} >2020年 行大运 发大财 </h2>
                <h2 style={styles.two} >2020年 祝大家找到一个满意的工作 </h2>
                <h2 style={commonCss.three}>2020 年 你们要实现你们的愿望..... </h2>
                <h2 style={this.mycss.four}>2020 希望你们都 顺顺利利 ... </h2>
            </div>
        )
    }
}





// 原型链挂载  __proto__
CssDemo.prototype.mycss = {
    four:{
        border:"2px solid red",
        borderRadius:10,
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        fontSize:60
    }
}