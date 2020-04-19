
// JSX 的基本语法规则
// 1. 遇到 HTML 代码  直接 < 开头  
// 2. 遇到 代码块 (JS逻辑代码)  直接 { } 包起来 

const list = ["Vue","React","Angular"]

const txt = "wuhan1910-集团"
export class Foot extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>JSX 后缀名不能省略 </p>
                <footer> 版权所有 &copy;   {txt}  </footer>
                {
                    list.map((item,index)=>{
                        return (
                            <span key={index}  > {item} </span>
                        )
                    })
                }
            </div>
        )
    }
}