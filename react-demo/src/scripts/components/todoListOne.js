import { reduce } from "async";


// LiuYanCom   留言板
// PostMsgCom  提交留言
// ShowMsgCom  显示留言 

import MyBtn from "./myBtn"
export class TodoListOne extends Component{
    constructor(){
        super();
        this.state = {
            comments:[
                {
                    title:"one-Node",
                    content:"Node 真的好麻烦吗?"
                },
                {
                    title:"two-Vue",
                    content:"Vue API 都忘记了吗?"
                },
                {
                    title:"3-React",
                    content:"React 真的都不懂吗?"
                },
                {
                    title:"4-Angular",
                    content:"Angular 到底难不难?"
                },
                {
                    title:"5-小程序",
                    content:"小程序 真的简单吗?"
                },
            ]
        }
    }

    handleAddComment=()=>{
        const title = this.title.value;
        const content = this.content.value;
        
        // this.state.comments.unshift({title,content});  
        this.state.comments.push({title,content});
        this.setState({
            comments:this.state.comments
        })

        this.title.value = "";
        this.content.value = "";
    }

    handleDelComment=(index)=>{
        
        this["liItem"+index].className = "move-out";  // 0 
        setTimeout(()=>{
            this.state.comments.splice(index,1);
            this.setState({
                comments:this.state.comments
            });
            this["liItem"+index].className  = "";    // 1 
        },1200)
        const that = this;
        this["liItem"+index].addEventListener("webkitAnimationEnd",function(){
            console.log("动画运行结束...");

            that["liItem"+index].removeEventListener("webkitAnimationEnd",function(){
                console.log("移除动画运行结束监听...");
            })
        })
    }

    render(){
        const {
            comments
        } = this.state;
        return (
            <div>
                <h2 className="happy" >react 实现留言板 - one </h2>
                <div style={{border:"2px solid red",width:"80%"}}>
                    <h2>显示留言</h2>
                    <ul>    
                        {
                            comments.map((val,i)=>{
                                return (
                                    <li ref={el=>this['liItem'+i]=el}  className="move-in" key={i} style={{background:'pink',marginTop:10}} >
                                        <p style={{fontSize:16,color:"#000"}}>{i+1}</p>
                                        <p style={{fontSize:20,color:"red"}}>标题: {val.title}</p>
                                        <p style={{fontSize:24,color:"blue"}}>内容: {val.content} <button onClick={()=>this.handleDelComment(i)}>X</button></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>

                <div style={{border:"2px solid blue",width:"80%"}}>
                    <h2>提交留言</h2>
                    <p><input type="text" placeholder="title" ref={el=>this.title=el} /></p>
                    <p><input type="text" placeholder="content" ref={el=>this.content=el} /></p>
                    <p><MyBtn onClick={this.handleAddComment} text="提交留言"></MyBtn></p>
                </div>
            </div>
        )
    }
}
