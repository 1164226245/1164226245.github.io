
import {
    Switch,
    Route,
    Redirect,
    Link
}  from "react-router-dom"


export class AdminDemo extends Component{
    render(){
        return (
            <div>
                <h2>AdminDemo - 管理系统的路由 </h2>
                <div>
                    <p> <Link to="/system/emp/info">员工管理</Link> </p>
                    <p> <Link to="/system/money/payin">资金管理</Link> </p>
                    <p> <Link to="/system/oa/kao">考勤管理</Link> </p>
                </div>
                <hr/>
                <Switch>
                    <Route path="/system/emp"   component={Emp}   />
                    <Route path="/system/money"   component={Money}   />
                    <Route path="/system/oa"   component={Oa}   />
                </Switch>
            </div>
        )
    }
}

class Emp extends Component{
    render(){
        return (
            <div>
                <h2>员工管理 ---  1 </h2>
                <h2>**********************************</h2>
                <p>
                    <Link to="/system/emp/jixiao"> 员工绩效 </Link>
                    <Link to="/system/emp/info"> 员工信息 </Link>
                </p>
                <Switch>
                    <Route path="/system/emp/jixiao"   render={()=>(<h2> 员工绩效考核.... 查看 </h2>)}     />
                    <Route path="/system/emp/info"   render={()=>(<h2> 员工信息 .... 查看 </h2>)}     />
                </Switch>
            </div>
        )
    }
}

class Money extends Component{
    render(){
        return (
            <div>
                <h2>资金管理 ---  Money </h2>
                <h2>**********************************</h2>
                <p>
                    <Link to="/system/money/payin"> 资金收入 </Link>
                    <Link to="/system/money/payout"> 资金out </Link>
                </p>
                <Switch>
                    <Route path="/system/money/payin"   render={()=>(<h2> 资金收入管理.... 查看 </h2>)}     />
                    <Route path="/system/money/payout"   render={()=>(<h2> 资金out 支出 管理 .... 查看 </h2>)}     />
                </Switch>
            </div>
        )
    }
}

class Oa extends Component{
    render(){
        return (
            <div>
                <h2>考勤管理 ---  Oa </h2>
                <h2>**********************************</h2>
                <p>
                    <Link to="/system/oa/kao"> 员工考勤 </Link>
                    <Link to="/system/oa/jia"> 员工请假 </Link>
                </p>
                <Switch>
                    <Route path="/system/oa/kao"   render={()=>(<h2> oa 考勤查 .... 查看 </h2>)}     />
                    <Route path="/system/oa/jia"   render={()=>(<h2> oa 请假  .... 查看 </h2>)}     />
                </Switch>
            </div>
        )
    }
}
