// react 数据请求 
import {http} from "&/ajax"

http.get("http://localhost:1910/vue/movie",{
    params:{
        limit:10,
        id:1910
    }
})
.then(res=>{
    
})
.catch(err=>{
    console.error(err)
})

export  class  DataDemo extends Component{

    constructor(){
        super();
        this.state = {
            mv:[]
        }
    }

    componentDidMount(){
        http.get("http://localhost:1910/vue/movie",{
            params:{
                limit:16
            }
        })
        .then(res=>{
            console.log(res)
            this.setState({
                mv:res.data.result
            })
        })
    }

    render(){
        return (
            <div>
                <h2 className="happy" >react 请求数据 </h2>
                <h2>原生+Promise 封装 类似 axios </h2>
                <ul style={{width:"100%"}}>
                    {
                        this.state.mv.map((item,idx)=>(
                            <Item key={idx} item={item} index={idx} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

class Item extends Component{
    render(){
        const {
            item,
            index
        } = this.props;
        var style= {display:"flex",background:'pink'};
        var delayStyle = {animationDelay:index*100 + 'ms'};
        var newStyle = {...style,...delayStyle};
        return (
            <li className="move-in" style={newStyle}  >
                <img style={{width:100,height:100}} src={item.images.large} alt=""/>
                <p style={{
                    flex:1,
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center',
                    color:"yellowgreen",
                    fontSize:20}}>{item.title} -- {item.year}</p>
            </li>
        )
    }
}