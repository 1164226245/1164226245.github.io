// props 传递数据  层级传递
// context 传递数据 隔空传递  

//     PropTypes  校验Props 
//   optionalArray: React.PropTypes.array,
//   optionalBool: React.PropTypes.bool,
//   optionalFunc: React.PropTypes.func,
//   optionalNumber: React.PropTypes.number,
//   optionalObject: React.PropTypes.object,
//   optionalString: React.PropTypes.string,
//   optionalSymbol: React.PropTypes.symbol,

import PropTypes from "prop-types"

export class ContextDemo extends Component{
    getChildContext(){
        return {
            user:this.props.user,
            msg:"wuhan1910-征服react"
        }
    }
    render(){
        console.log(this);
        return (
            <div>
                <h2 className="happy"> context + props  + state </h2>
                <h2>context  隔空传递 </h2>
                <hr/>
                <CptA 
                    tokenA={this.props.token}
                ></CptA>
            </div>
        )
    }
}

ContextDemo.childContextTypes = {
    user:PropTypes.object,
    msg:PropTypes.string
}

ContextDemo.defaultProps = {
    user:{
        names:'zuozuomu',
    },
    token:"1234qwer"
}
ContextDemo.propTypes = {
    user:PropTypes.object.isRequired,
    token:PropTypes.string
}


class CptA extends Component{
    render(){
        return (
            <div>
                <h2>component - A</h2>
                <hr/>
                <CptB
                tokenB={this.props.tokenA} 
                ></CptB>
            </div>
        )
    }
}

class CptB extends Component{
    render(){
        return (
            <div>
                <h2>component - BB</h2>
                <hr/>
                <CptC
                tokenC={this.props.tokenB} 
                ></CptC>
            </div>
        )
    }
}

class CptC extends Component{
    render(){
        const {
            msg
        } = this.context
        return (
            <div>
                <h2>component - CCC</h2>
                <h2>msg === {msg}</h2>
                <hr/>
                <CptD
                tokenD={this.props.tokenC} 
                ></CptD>
            </div>
        )
    }
}

CptC.contextTypes = {
    msg:PropTypes.string
}

class CptD extends Component{
    render(){
        console.log(this)
        return (
            <div>
                <h2>component - DDDD</h2>
                <h2>
                    token === {this.props.tokenD}
                </h2>
                <h2>username == {this.context.user.names}</h2>
            </div>
        )
    }
}

// 获取 context 
CptD.contextTypes = {
    user:PropTypes.object
}


