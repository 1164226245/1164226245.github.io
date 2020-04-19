
/*
 组件之间的通信 
 
 1. 父子 组件 
 <A>
    <B></B>
 </A>
 2. 兄弟组件 
 <A></A><B></B>

 props 传递数据
 state 修改数据 

 父组件如何修改子组件

 父组件把组件的state 当着子组件的props 传递给子组件
 父组件修改 state 会二次render 子组件接收到变化的 props  从而实现子组件修改  

 ref   this.refs  对象获取
 1. ref 作用于DOM 元素  指向这个真实的DOM元素
 2. ref 作用于组件  指向这个组件对象   

 redux  mobx  flux
 
 EventEmiiter 
*/


import MyBtn from "./myBtn";
export class State2 extends Component{

    state = {
        count:1910,
        word:"1910-天道酬勤",
        show:true
    }

    handleChangeWord=(e)=>{
        this.setState({
            word:e.target.value
        })
    }

    handleCountAdd=()=>{
        console.log(this.refs);
        this.refs.one.style.color="red";
        this.refs.one.style.fontSize=this.state.count/100+'px';
        this.state.count+=5;
        this.setState({
            count:this.state.count
        })
    }

    handleChangeByRef=()=>{
        console.log(this.child)
        // this.child.state.message = "Are You OK?";
        this.child.hangleChangeMessage("Are You OK?")
    }

    render(){
        const {
            count,
            word,
            show
        } = this.state;
        console.log(this);
        return (
            <div>
                <h2 className="happy">react 组件通信交互</h2>
                <h2 ref="one" >父子组件  && 兄弟组件  (props&&state)  </h2>
                <h2>props == {this.props.msg}--{this.props.word}</h2>
                <h2>state = {count} --- {word}  </h2>
                <p><input type="text" value={word} onChange={this.handleChangeWord} /></p>
                <MyBtn onClick={this.handleCountAdd} text="CountAdd"></MyBtn>
                <MyBtn onClick={()=>{this.setState({show:!show})}} text={show?'显示':'隐藏'}></MyBtn>
                <MyBtn onClick={this.handleChangeByRef} text="refs 实现父组件修改子组件" ></MyBtn>
                <hr/>
                <ChildOne   
                    id="one"
                    type="stop"
                    word={word}
                    num={count*2}
                    show={show}
                    // ref="child"
                    ref={el=>this.child=el}
                ></ChildOne>
            </div>
        )
    }
}


class ChildOne extends Component{
    state = {
        message:"我们都最幸福的...正能量"
    }

    hangleChangeMessage=(message)=>{
        this.setState({
            message
        })
    }

    render(){
        const {
            id,
            word,
            num,
            show
        } = this.props;
        return (
            <div>
                <h2>子组件-- ChildOne</h2>
                <h1>props == {id}---{word} --- {num}</h1>
                <p style={{
                    width:120,
                    height:120,
                    borderRadius:5,
                    background:'purple',
                    color:"#fff",
                    display:show?"block":'none'
                }}>
                    我是被父组件改变显隐
                </p>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}