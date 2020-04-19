
import {MySwipe} from "./swipe"
const SwiperItem = MySwipe.Item;    // 组件 
import {http} from "&/ajax"
export default class Banner extends Component{

    constructor(){
        super();
        this.state = {
            imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg"),
            ],
            films:[]
        }
    }

    componentDidMount(){
        http.get("http://localhost:1910/vue/maizuo/banner",{})
        .then(res=>{
            console.log(res);
            this.setState({
                films:res.data.result.data
            })
        })
    }

    render(){
        const {
            imgs,
            films
        } = this.state;
        const items = imgs.map((item,i)=>{
            return (
                <SwiperItem key={i} >
                    <img style={{width:'100%',height:300}} src={item.default} alt=""/>
                </SwiperItem>
            )
        })
        return (
            <div>
                <h2>banner-- 轮播图</h2>
                <MySwipe 
                    id="one" 
                    options={ {speed:1200,loop:true,autoplay:{
                    delay:1200
                    }} }
                >
                    {items}
                </MySwipe>

                <MySwipe 
                    id="two"
                    options={ {speed:1200,loop:true,autoplay:{
                        delay:1200
                        }} }
                >
                    {
                        films.map((val,i)=>{
                            return (
                                <SwiperItem key={i}>
                                    <img 
                                    style={{width:'100%',height:300}} 
                                    src={val.imgUrl} alt=""/>
                                </SwiperItem>
                            )
                        })
                    }
                </MySwipe>
            </div>
        )
    }
}