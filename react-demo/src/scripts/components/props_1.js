
/*
1. react 数据传递载体  props 属性  state 状态  组件之间数据交互  

2. props
a.  props 默认从组件外部（父组件）传入,props 也能在组件内部初始化定义 getDefaultProps 
b.  组件内部 通过生命周期钩子函数 getDefaultProps (已废弃 )   App.defaultProps = {}
c.  props 一般不允许被修改   props 只用来传递数据
d.  props 接收  对象 常量 函数  数组  
e.  props 在组件内部 通过 this.props 来获取  key-value 
*/ 

// MyComponent.propTypes = {
//     // 你可以定义一个js原始类型的prop,默认请情况下，这是都是可选的
//     optionalArray: PropTypes.array,
//     optionalBool: PropTypes.bool,
//     optionalFunc: PropTypes.func,
//     optionalNumber: PropTypes.number,
//     optionalObject: PropTypes.object,
//     optionalString: PropTypes.string,
//     optionalSymbol: PropTypes.symbol,
// }

import PropTypes from "prop-types"
import MyBtn from "./myBtn"
export class Props1 extends Component{

    constructor(){
        super()
    }

    handleChangeProps=()=>{
        // 修改 props  props 只可读 不可写  readOnly 
        this.props.word = "hello - world"
    }

    // 优先级最低  
    static defaultProps = {
        message:"奋斗2020---so happy",
        count:1910,
        inp:"未来可期..."
    }

    handleClick(){
        console.log("检测 onCLick-props")
    }

    render(){
        console.log(this);
        console.log(this.props)
        const {
            id,
            todo,
            msg,
            flag,
            func,
            obj,
            word,
            arr,
            message,
            count,
            inp
        } = this.props;
        return (
            <div>
                <h2 className="happy">react -- 组件的属性  props </h2>
                <h2 style={{color:"red",background:'yellow',fontSize:36 }}>react props 使用频率最高 </h2>
                <h1>props =  {id} -- {msg} - {todo} -- {func() }</h1>
                <h1 onClick={this.handleChangeProps} >{obj.names}--{obj.age} --- {word}</h1>
                {
                    arr.map((a,i)=>(
                        <p key={i}>
                            {a}
                        </p>
                    ))
                }
                <h2>{message} --- {count}---- {inp}</h2>
                <MyBtn 
                text='点击注册' 
                style={{background:'blue',padding:3}}  
                onClick={this.handleClick}  
                className='btn'
                ></MyBtn>
            </div>
        )
    }
}

Props1.defaultProps = {
    msg:"I am fine,3q",
    message:"happy new year",
    count:2020
}

// 类型校验 数据类型 
Props1.propTypes = {
    msg:PropTypes.string.isRequired,
    count:PropTypes.number.isRequired,
    flag:PropTypes.bool.isRequired
}