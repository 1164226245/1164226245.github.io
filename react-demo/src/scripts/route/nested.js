

import {
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom"

export class Nested extends Component{
    render(){
        return (
            <div>
                <h1>nested - nested 嵌套路由 </h1>
                <h2> 你有多少层嵌套 就写多个  Route </h2>
                <div>
                    <Link to="/nested/one">One-1</Link>
                    <Link to="/nested/two?uid=1910">Two-2</Link>
                    <Link to="/nested/three">Three-3</Link>
                </div>
                <Switch>
                    <Route path="/nested/:tab?" render={Detail} />
                    {/* <Route path="/nested/one" render={Detail} />
                    <Route path="/nested/two" render={Detail} />
                    <Route path="/nested/three" render={Detail} /> */}
                    <Route render={()=>(<Redirect to="/nested/one" />)}/>
                </Switch>
            </div>
        )
    }
}

const Detail = ({match,location})=>(
    <div>
        <h2>detail - detail - detail </h2>
        <h2>tab === {match.params.tab || "/"} </h2>
        <h2>uid == {new URLSearchParams(location.search).get('uid')} </h2>
    </div>
)