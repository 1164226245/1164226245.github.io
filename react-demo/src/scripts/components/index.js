

import {Head} from "./head"
import {Foot} from "./foot.jsx"
import {Cpt}  from "./cpt"
import {CssDemo} from "./cssDemo"
import {EventDemo} from "./eventDemo"

import {Props1} from "./props_1"
import {State1} from "./state_1"
import {State2} from "./state_2"
import {Props2} from "./props_2"

import {LifeDemo} from "./lifeDemo"
import {ContextDemo}  from "./contextDemo"
import {DataDemo} from "./dataDemo"

import Banner from "./banner"
import {TodoListOne} from "./todoListOne"
import {TodoListTwo} from "./todoListTwo"
import {TodoListThree} from "./todoListThree"


const msg = "Are you OK?"
const arr = ["Vue","react","angular"]
const obj = {
    names:"zuozuomu",
    age:28,
    word:"daydayup",
    say(){
        return "努力为了最好的offer "
    }
}
const func = ()=>("武汉1910-daydayup")

export default class MainCpt extends Component{
    render(){
        return (
            <div>
                <h2>
                MainCpt - MainCpt -MainCpt
                </h2>
                <h2>这是 react 案例的 根组件</h2>
                <Head/>
                <hr/>
                <TodoListThree 
                    id="wh1910"
                    todo="goto2020"
                    flag={true}
                    msg={msg}
                    arr={arr}
                    func={func}
                    obj = {obj}
                    {...obj}
                />
                <hr/>
                <Foot/>
            </div>
        )
    }
}