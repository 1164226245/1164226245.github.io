/*
 react 组件的生命周期
 含义   组件从初始化渲染到被移除或者销毁的过程  成为组件的生命周期

 1. 每个组件都有生命周期
 2. react 通过组件的生命周期钩子函数来管理 组件
 3. 系统 某些状态和参数发生改变的时候，系统立马去通知 对应处理的函数叫做钩子函数
 hooks 钩子函数  允许在特定的时期添加用户自己的代码  不同的阶段添加自己的逻辑代码   hooks

 react 组件的生命周期 分为三个阶段 
 1.mount  组件的初始化  从虚拟DOM 渲染成为真实DOM 的过程            1  
 2.update   组件的数据变化   组件的state props 更新 导致二次渲染的过程     n 
 3.unmount  组件销毁   组件因为路由切换而销毁 (浏览器的垃圾回收机制 )     1 

 mounted 组件载入阶段  (钩子函数)
 1.getDefaultProps   设置组件默认的props   废弃
 2.getInitialState   设置组件默认的state   废弃
 3.componentWillMount  在jsx被渲染到页面之前被调用
 4.render   渲染函数是react中默认的函数
 5.componentDidMount   jsx被渲染到页面后被调用

*/ 


/*
update 组件数据更新阶段   组件修改 state  组件接收的props发送改变  都会进入 update 阶段 
1. componentWillReceiveProps(nextProps)  接收变化的props
2. shouldComponentUpdate  询问是否更新  true 更新 false 不更新 
3. componentWillUpdate   组件即将更新  
4. render   组件开始二次渲染  update
5. componentDidUpdate   组件更新渲染数据完毕 

*/ 

// 组件销毁移除 路由切换 
// componentWillUnmount  这个函数几乎不会使用到，因为浏览器本身具有垃圾回收机制

import MyBtn from "./myBtn"
let count = 0;
export class LifeDemo extends Component{

    constructor(){
        super();
        this.state = {
            inp:"坚持就是胜利...",
            count:2020,
            disabled:true
        }
    }

    log(msg){
        console.log(`## ${++count} ----- ${msg}`)
    }

    componentWillMount(){
        this.log("componentWillMount -- 虚拟DOM被渲染成真实DOM之前 ...");
        // 停留的时间 非常短暂  一般用来打印 log 
        // 这个时候 取不到真实DOM 
        console.log(document.getElementById("one"))
        // this.refs.two.style.color = "red";  
    }

    handleChangeInp=()=>{
        this.setState({
            inp:this.refs.inp.value
        })
    }

    handleChangeCount=()=>{
        this.setState({
            count:++this.state.count
        })
    }

    shouldComponentUpdate(nextProps,nextState){
        this.log("shouldComponentUpdate 询问 state 是否可以更新")
        return true;
    }

    componentWillUpdate(){
        this.log("componentWillUpdate -- state 即将修改 组件即将二次更新...")
    }

    componentDidUpdate(){
        this.log("componentDidUpdate -- state 修改完毕 组件二次更新完成...")
    }
    
    handleCheck=()=>{
        const mobile = this.mobile.value;
        const pwd = this.password.value;

        console.log(mobile);
        // \.  转译字符 
        // g    golbal 全局匹配
        // i    ingore 忽视大小写 
        // \d  
        // \w   字母数字下划线  
        const mReg = /^1(3|4|5|7|8|9)\d{9}$/;
        const pReg = new RegExp('^[a-zA-Z0-9]{6,12}$');
        // if(mReg.test(mobile)&&pReg.test(pwd)){
        //     this.setState({
        //         disabled:false
        //     })
        // }else{
        //     this.setState({
        //         disabled:true
        //     })
        // }

        this.setState({
            disabled:!(mReg.test(mobile)&&pReg.test(pwd))
        })

    }

    render(){
        this.log("render 虚拟DOM 正在被渲染成 真实DOM ")
        const {
            inp,
            count,
            disabled
        } = this.state;
        return (
            <div>
                <h2 className="happy" id="one" >react 组件生命周期 </h2>
                <h2 ref="two">三个阶段  初始化---> 数据更新 ----> 销毁阶段</h2>
                <h1 onClick={this.handleChangeCount}>inp === {inp} --- {count}</h1>
                <p><input type="text" value={inp} ref="inp" onChange={this.handleChangeInp}/></p>
                <div>
                    <p><input type="tel" onChange={this.handleCheck} ref={el=>this.mobile=el} placeholder="请输入手机号码"/></p>
                    <p><input type="password" onChange={this.handleCheck} ref={el=>this.password=el} placeholder="请输入密码"/></p>
                    <p><MyBtn disabled={disabled} text="登录" onClick={()=>console.log("login")}></MyBtn></p>
                </div>
                <hr/>
                <ChildOne
                    inp={inp}
                    count={count}
                    log={this.log}
                ></ChildOne>
            </div>
        )
    }

    componentDidMount(){
        this.log("componentDidMount  虚拟DOM已经被渲染成真实DOM")
        this.refs.two.style.color = "red";  

        // 一般用来请求数据 ajax 
        // 或者 实例化 new Swiper 
    }
}


class ChildOne extends Component{

    componentWillReceiveProps(nextProps){
        this.props.log("componentWillReceiveProps -- 组件即将接收变化的 props ");
        // console.log(nextProps)
        // console.log(this.props);
    }

    shouldComponentUpdate(nextProps,nextState){
        this.props.log("shouldComponentUpdate -- 询问是否更新");
        console.log(nextProps)   // newVal
        console.log(this.props);  // oldVal

        if(nextProps.count!==this.props.count){
            return true
        }else{
            return false
        }
        // 性能优化   控制渲染的虚拟DOM 体量 
         
    }

    componentWillUpdate(){
        this.props.log("componentWillUpdate 组件即将二次渲染更新之前")
    }

    render(){
        this.props.log("render --- 组件二次渲染")
        const {
            inp,
            count
        } = this.props;
        return (
            <div>
                <h2>childone 接收 变化的 props </h2>
                <h2>props == {inp} --- {count} </h2>
            </div>
        )
    }

    componentDidUpdate(){
        this.props.log("componentDidUpdate 组件二次更新渲染完毕... ");
    }


    componentWillUnmount(){
        // 路由切换 
        // 清除  计时器  事件监听  
        this.props.log('componentWillUnmount --- 组件即将被销毁之前 ')
    }

}