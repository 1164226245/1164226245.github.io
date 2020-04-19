/*
  state 状态 react 组件数据交互的载体  状态用来修改的 

  1. state 不能在组件外部定义  不能在组件外部 修改  只能在组件内部定义声明 只能在内部修改 
  2. state 用来被修改的  this.state 获取 state, this.setState() 来修改 state 
  3. state 在组件内部的 getInitialState 来初始化定义 state ,必须返回一个对象   this.state = {}
  4. state 修改 setState 这个方法会修改 state 会重新执行 组件内部的 render方法 , 会触发页面的
  二次渲染  虚拟DOM 会根据react 的 diff  算法  得到新的虚拟DOM 最后的批量的更新    

*/ 

import MyBtn from "./myBtn";
let timer = null;
export class State1 extends Component{

    constructor(){
        super();
        // 优先级最高 
        this.state = {
            count:2020,
            inp:"hello - world",
            toggle:true,
            num:0
        }
    }

    // state = {
    //     count:1910,
    //     inp:"hello - world"
    // }

    handleCountAdd=()=>{
        this.state.count++;    // 同步数据更新  只能更新数据层 
        console.log(this.state.count);
        this.setState({       // 异步数据更新  更新数据层  更新视图层   执行Diff 算法  最终执行 render 渲染函数 
            count:this.state.count   
        })
    }

    handleChangeInp=(e)=>{
        console.log(e.target.value);
        // 不能想修改 真实DOM 来修改虚拟DOM
        // 只能 修改 虚拟DOM  导致真实DOM 更新
        this.setState({
            inp:e.target.value
        })
    }

    handleChangeToggle=()=>{
        this.setState({
            toggle:!this.state.toggle
        })
    }

    handleStart=()=>{
        if(!timer){
            timer = setInterval(()=>{
                this.setState({
                    num:++this.state.num
                });
            },1000)
        }
    }

    handlePause(){
        if(timer){
            clearInterval(timer);
            timer = null;
        }
    }

    render(){
        const {
            msg,
            flag,
            word
        } = this.props;
        console.log(this);
        // 无限死循环  
        // this.setState({
        //     count:++this.state.count
        // })

        const {
            count,
            inp,
            toggle,
            num
        } = this.state;
        return(
            <div>
                <h2 className="happy">react 状态 --- state</h2>
                <h2>state  只能用来修改数据 </h2>
                <h2>props == {msg}-- {flag?'要么2周去上班':'要么2周去马尼拉'}  --- {word}</h2>
                <h2 onClick={this.handleCountAdd}>state == {count} ---{inp}</h2>
                <p><input type="text" value={inp}  onChange={this.handleChangeInp}  /></p>
                <MyBtn onClick={this.handleChangeToggle} text={!toggle?'点击显示':'点击隐藏'}></MyBtn>
                {
                    this.state.toggle&&<div style={{width:100,height:100,background:'pink'}}></div>
                }

                <div>
                    <h2 >计数器---- {num}</h2>
                    <MyBtn onClick={this.handleStart}  text='开始计数'></MyBtn>
                    <MyBtn onClick={this.handlePause} text='暂停计数'></MyBtn>
                </div>
            </div>
        )
    }
}