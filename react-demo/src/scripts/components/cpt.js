
// 1. 
// react.min.js    react
// react-dom.min.js   react-dom 
// browser.min.js     javascript/XML
// 2.  
// react.min.js   react 核心文件  包含了react diff 算法 虚拟DOM 模型 react事件机制  
// 提供创建组件的API  createClass Component

// react-dom.min.js  封装了操作react 组件API  负责把虚拟DOM 渲染 render 成真实DOM
// ReactDOM.render()

// browser.min.js  负责解析 jsx 代码 ,  js内的html代码解析出来返回给浏览器

// 3.  type="text/babel"  允许js 里面  书写 html  代码 (jsx)

// 4. ReactDOM.render(虚拟DOM,真实DOM)
//  ReactDOM.render(<Component/>,app);
//  React.createElement()   创建虚拟DOM 

// 5. data-reactroot 表面当前元素是 该组件的顶层标签 
// 任何组件都只能有一个顶层标签

// 6. jsx 语法规则 
// 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
// 遇到代码块（以 { 开头），就用 JavaScript 规则解析

// 7. 注释   组件内部注释  
//  { /* <h1>{txt}</h1>  */ }


//  创建组件  component 

// 组件即将一段或几段完成各自功能的代码段封装为一个或几个独立的部分

// 每个组件 能完成独立的功能的，都是独立的部分
// a. React.createClass   老版本   ES5  废弃 
// b. React.Component  新版本   ES6   class 类  extends 继承  React.Component 父类 
// c. 无状态组件 纯函数组件   stateLess component   函数式组件 

// 组件名首字母必须大写    任何组件都只有一个顶层标签  

// render 组件生命周期钩子函数   把虚拟DOM 读取出JS内存   然后等待渲染成真实DOM 

// 生命周期阶段  mount(载入)  update(更新) unmount(销毁)

// 自定义函数  handleClick  onClick={this.handleClick}

// 数据传递载体  组件通信  props(属性)   state(状态)


import React , {Component} from "react"    // 16.12.0


const msg = "react so easy"
export class Cpt extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <div>
                    <h2>Cpt ----  组件 - component </h2>
                </div>
                <div>hello world ---- {msg} </div>
                <Demo></Demo>
                <Swipe/>
                <Login username="zkl" mobile="13812341234" />
                <Nav msg="daydayup" />
                <MyList/>
            </div>
        )
    }
}


class Demo extends Component{
    render(){
        return (
            <div>
                <h2>Demo - demo - demo </h2>
                {/* <h2>Are you OK</h2> */}
            </div>
        )
    }
}

class Swipe extends React.Component{
    render(){
        console.log(this);

        return (
            <div>
                <h3>组件即将一段或几段完成各自功能的代码段封装为一个或几个独立的部分</h3>
                <h2> class extends ES6 新的写法 </h2>
            </div>
        )
    }
}

// 老版本
// const Login = React.createClass({
//     render(){
//         return (
//             <div>
//                 <h2>login - login - login</h2>
//             </div>
//         )
//     }
// })

// ()=>{return x}
// ()=>(x)

const Login = (props)=>{
    const count = 1000;
    console.log(props);
    return (
        <div>
            <h2>Login - Login - Login </h2>
            <h2>纯函数 组件  count==={count} </h2>
            <h2>props === {props.username}--{props.mobile}</h2>
        </div>
    )
}

const Nav = ({msg})=> (
    <div>
        <h2>Nav-Nav-Nav</h2>
        <h2>msg === {msg} </h2>
    </div>
)


const teachers = ["美美英","爆雷雷","帅帅潘","渣渣亮"]; 
let obj = {a:{b:100,c:null}}
setTimeout(()=>{
    obj = {a:{b:100,c:{hello:100000}}}
},1500);
class MyList extends Component{
    render(){
        return (
            <div>
                <h2>我 最喜欢的 2019 年度讲师 </h2>
                {
                    teachers.map((tec,index)=>{
                        return (
                            <p key={index} >
                                {tec}
                            </p>
                        )
                    })
                }

                {
                    obj.a.c&&<div >
                        {obj.a.c.hello}
                    </div>
                }
            </div>

        )
    }
}

