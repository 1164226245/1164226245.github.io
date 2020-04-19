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

子组件如何修改父组件

父组件把修改自身 state 的方法通过 props 传递 给子组件,子组件触发props 函数  

 ref   this.refs  对象获取
 1. ref 作用于DOM 元素  指向这个真实的DOM元素
 2. ref 作用于组件  指向这个组件对象   


 兄弟组件通信 

 1. 中间人模式      
 借用公共父组件 当做 中间人 

 2. EventEmitter
// once   监听一次 
// on     监听事情
// emit   发送事件

*/ 

import EventEmitter from "events";  // Node 自带的模块
const MyEvent = new EventEmitter()   // on once emit 

import MyBtn from "./myBtn"
export class Props2 extends Component{
    
    state = {
        word:"I am fine!",
        count:1000,
        show:true,
        oneMsg:"老夫聊发少年狂"
    }

    handleChangeWord=(word)=>{
        this.setState({
            word
        })
    }

    handleChangeCount=count=>{
        this.setState({
            count:this.state.count+count
        })
    }

    handleChangeShow=show=>{
        this.setState({
            show
        })
    }

    handleChangeOneMsg=msg=>{
        this.setState({
            oneMsg:msg
        })
    }

    handleChangeChildOne=(msg)=>{
        this.childone.handleChangeMessage(msg)  // ref 
    }

    render(){
        const {
            todo
        } = this.props;
        const {
            word,
            count,
            show,
            oneMsg
        } = this.state;
        return (
            <div>
                <h2 className="happy" >子组件 操作 父组件 </h2>
                <h2>父组件把修改自身 state 的方法通过 props 传递 给子组件,子组件触发props 函数 </h2>
                <h2> props == {todo}  </h2>
                <h2>word == {word} ---- {count}</h2>
                {/* <h2>oneMsg === {oneMsg}</h2> */}
                <p style={{
                    width:120,
                    height:120,
                    borderRadius:5,
                    background:'purple',
                    color:"#fff",
                    display:show?"block":'none'
                }}>
                    我是被子组件chindone改变显隐
                </p>
                <hr/>
                <ChildOne
                    handleChangeWord={this.handleChangeWord}
                    count={count}
                    handleChangeCount={this.handleChangeCount}
                    show={show}
                    handleChangeShow={this.handleChangeShow}
                    oneMsg={oneMsg}
                    ref={el=>this.childone=el}
                >
                    <p>wuhan1910-daydayup</p>
                    <p>这里指的是父组件动态的内容分发</p>
                </ChildOne>
                <hr/>
                <ChildTwo
                    handleChangeOneMsg={this.handleChangeOneMsg}
                    handleChangeChildOne={this.handleChangeChildOne}
                ></ChildTwo>
            </div>
        )
    }
}

class ChildOne extends Component{

    constructor(){
        super();
        this.state = {
            message:"我很快乐..happy",
            num:1916
        }
    }

    handleChangeMessage=(message)=>{
        this.setState({
            message
        })
    }

    handleChange=()=>{
        const word = this.refs.inp.value;
        console.log(word);
        this.props.handleChangeWord(word)
    }

    componentWillMount(){
        MyEvent.on("changeOneNum",num=>{   // 监听  on  once 
            this.setState({
                num:this.state.num+num
            })
        })
    }

    render(){
        console.log(this.props);
        const {
            handleChangeWord ,
            count,
            handleChangeCount,
            show,
            handleChangeShow
        } = this.props;
        return (
            <div>
                <h2>子组件 -- ChildOne </h2>
                <p>
                    <input type="text" placeholder="修改父组件的word" ref="inp" onChange={this.handleChange} />
                </p>
                <h2>count === {count}</h2>
                <MyBtn onClick={ ()=>handleChangeCount(50) } text="CountAdd 50" ></MyBtn>
                <MyBtn onClick={ ()=>handleChangeShow(!show) } text={show?'点击控制隐藏':'点击控制显示'} ></MyBtn>
                <h2>oneMsg === {this.props.oneMsg} </h2>
                <h2>message === {this.state.message}</h2>
                <h2>num === {this.state.num}</h2>
                <div style={{border:'2px solid red'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const arrList = ["学历","沟通能力","技术能力","颜值运气","面试题"]
class ChildTwo extends Component{

    handleSend(){
        MyEvent.emit("changeOneNum",100);  // 发送事件
    }

    render(){
        const {
            handleChangeOneMsg,
            handleChangeChildOne
        } = this.props;
        return (
            <div>
                <h2>子组件 2 -- ChildTwo</h2>
                <MyBtn onClick={()=>handleChangeOneMsg('我本将心照明月...')  } text="中间人模式去改变 childone - oneMsg"></MyBtn>
                <MyBtn onClick={()=>handleChangeChildOne('我太难了....')}   text="中间人模式去改变 childone - message  ref"></MyBtn>
                <MyBtn onClick={this.handleSend}   text="EventEmitter 修改 子组件 one "></MyBtn>
                <hr/>
                <MyList id="list">
                    {arrList}
                </MyList>
            </div>
        )
    }
}

// Vue  slot    slot 接收动态内容分发

// React  this.props.children  接收动态的内容分发  

class MyList extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h2>MyList - MyList - MyList  -- {this.props.id} </h2>
                {
                    this.props.children.map((item,idx)=>(
                        <p key={idx} > {item}</p>
                    ))
                }
                <MyDemo word="你们还好吗?">
                    <h2>我们好得很哟...</h2>
                </MyDemo>
            </div>

        )
    }
}

const MyDemo = (props)=>{
    console.log(props)
    return (
        <div>
            <h2>MyDemo - MyDemo - MyDemo</h2>
            <h2>{props.word}</h2>
            {props.children}
        </div>
    )
}