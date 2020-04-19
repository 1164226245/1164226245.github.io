

import ReactDOM, { render } from "react-dom";

import {
    BrowserRouter as Router,
    HashRouter as Hash,
    Route,
    Switch,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";

import {
    GetQuery
} from "&"
import { Nested } from "./nested";
import { AdminDemo } from "./admin";

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            count: 1910,

        }
    }
    componentWillMount() {
        this.setState({
            count: 'a' + 1
        });

        console.log(this.state.count); //1910

        this.setState({
            count: 'a' + 1
        });
        
        console.log(this.state.count);  //1910
       
    };

    componentDidMount(){
        this.setState({
            count: 'a' + 1
        });

        console.log(this.state.count); //1910

        this.setState({
            count: 'a' + 1
        });
        
        console.log(this.state.count);  //1910
    }

    handleGotoMine = () => {
        const {
            history,
            match
        } = this.props;
        history.push("/mine?username=" + match.params.uname);
    };


    render() {
        console.log(this.props);
        const {
            match,
            location,  // 获取查询参数   
            state,count   
        } = this.props;
        return (
            <div>
                <h2>wuhan1910-daydayup</h2>
                <h2>wuhan1910-2020 新年快乐</h2>
                <h2>state:{this.state.count}</h2>
                <h2>props:{this.props.count}</h2>
                <h2>home - home - home </h2>
                <h2>params 参数</h2>
                <h2>uname == {match.params.uname}</h2>
                <h2>uid == {match.params.uid}</h2>
                <h2>time === {new URLSearchParams(location.search).get("time")}</h2>
                <h2>age === {new URLSearchParams(location.search).get("age")}</h2>
                <button onClick={this.handleGotoMine}>点击进去mine  </button>
            </div>
        )
    }
}

export class Find extends Component {
    handleGoBack = () => {

        // history.go(-1);
        // history.back();

        const {
            history
        } = this.props;
        // history.go(-1);
        history.goBack();
    }
    render() {
        const {
            match,
            location
        } = this.props;
        return (
            <div>
                <h2>Find - find = 发现 2020 </h2>
                <h2>params 路由参数</h2>
                <h2>address  {match.params.address}</h2>
                <h2>who  {match.params.who}</h2>
                <h2>id === {GetQuery(location.search).id}</h2>
                <button onClick={this.handleGoBack}>返回</button>
            </div>
        )
    }
}

export class Mine extends Component {
    render() {

        return (
            <div>
                <h2>Mine - Mine - 个人中心 </h2>
                <h2>username === {GetQuery(this.props.location.search).username}</h2>
                <List></List>
            </div>
        )
    }
}

export class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login - Login - 马上登录 </h2>
            </div>
        )
    }
}

class List extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>List - List - List </h2>
                <h2>如果 不是 Route 加载 组件 ,不会带有 this.props(match/location/history)</h2>
            </div>
        )
    }
}

const Cart = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Cart - Cart - 购物车 </h2>
            <h2>token --- {new URLSearchParams(props.location.search).get('token')}</h2>
        </div>
    )
}

const NotFount = () => {
    return (
        <div>
            <h2>404 - 404 - 404  NotFOund </h2>
        </div>
    )
}

const About = ({ match, location, history }) => {
    return (
        <div>
            <h2>About - 联系咨询我们 </h2>
            <button onClick={() => history.push("/cart")}>进入购物车....</button>
        </div>
    )
}

export class MainBox extends Component {
    render() {
        return (
            <div>
                <h3>这是 路由主页面 main</h3>
                <div style={{ width: '80%', border: '2px solid red' }}>
                    <a href="#/home" >首页-one</a>

                    <NavLink to="/home/zuozuomu/qianfeng/1910?time=2019&age=28" activeClassName="active" >首页-佐佐木2</NavLink>
                    <NavLink to="/home/leson/qianfeng/1911?time=2022&age=36" activeClassName="active" >首页-大大雷</NavLink>
                    <NavLink to="/find/wuhan/2020/欧阳?id=123456" activeClassName="active" >发现-欧阳</NavLink>
                    <NavLink to={
                        {
                            pathname: "/find/上海/2020/陈力",
                            search: "?id=8888"
                        }
                    }>发现- 陈力</NavLink>
                    <NavLink to="/mine?username=大江" activeClassName="active" >我的</NavLink>
                    <NavLink to="/login" activeClassName="active" >登录</NavLink>
                    <NavLink to="/cart?token=1910qwer1234" activeClassName="active" >购物车</NavLink>
                    <p>
                        <NavLink to="/about/one" activeClassName="active" >联系我们</NavLink>
                    </p>
                    <p>
                        <NavLink to="/nested/" activeClassName="active" >Nested</NavLink>
                    </p>
                    <p>
                        <NavLink to="/system/emp/info" activeClassName="active" >管理系统</NavLink>
                    </p>
                </div>
                <div style={{ width: '80%', border: '2px solid blue' }}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/home/:uname/qianfeng/:uid?" component={Home} />
                        <Route path="/find/:address/2020/:who?" component={Find} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/login" component={Login} />
                        <Route path="/cart" render={Cart} />
                        <Route path="/about/" render={About} strict />
                        <Route path="/nested/" strict component={Nested} />
                        <Route path="/system" component={AdminDemo} />
                        {/* <Route component={NotFount} /> */}
                        <Route render={() => (<Redirect to="/mine" />)} />
                    </Switch>

                </div>
            </div>
        )
    }
}


export class MainLayout extends Component {
    render() {
        return (
            <div>
                <Hash
                    basename=""
                >
                    <MainBox></MainBox>
                </Hash>
            </div>
        )
    }
}

export class MainRoute extends Component {
    render() {
        return (
            <div>
                <h2 className="happy">learn react-router-dom V4</h2>
                <MainLayout />
            </div>
        )
    }
}


render(
    <MainRoute />,
    document.getElementById("app")
)