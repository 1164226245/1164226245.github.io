
// 基于原生Js 编写事件 
// addEventListener("click",fn,true/false);  false/true 冒泡/捕获   默认false 冒泡   DOM2 
// onclick  onchange  onfocus  DOM0 
// <p onclick="get()"></p>

// jquery 
// $("div").on("click")    $("div").off("click")
// $('div').bind('click')  绑定   $('div').unbind('click')

// 事件委托  把事件绑定到父元素上   子元素触发事件   通过事件冒泡  让父元素代替子元素执行冒泡的事件   
// $("div").on("click",childnode,fn);
// $("div").delegate(childnode,'click',fn)


// vue
// v-on:click.stop = "get()"
// @input = "input($event)"  $event 事件对象 


// react 绑定事件  驼峰命名

// onClick
// onChange
// onInput
// onMouseMove
// onMouseDown
// onMouseUp
// onTouchStart
// onTouchMove
// onTouchEnd
// onKeyPress
// onKeyDown
// onKeyUp

// 绑定事件 
// 1. 全局变量 / 外部函数
// 2. 组件内部自定义函数
// 3. 原型链挂载 


const action = {
    fnA(msg){
        alert(msg)
        console.log("2020 永远幸福...")
    },
    fnB(e){
        if(e.stopPropagation){
            e.stopPropagation()    // 现代浏览器 
        }else{ 
            e.cancelBubble = true; // IE
        }
        console.log("react 函数有参数 直接 套 箭头函数 没有参数直接指向自己")
        console.log(e);
    },
    parent(){
        alert("我是至高无上的 父组件.... ")
    }
}

import {commonJS} from "&"

// 函数定义 this 指向 类本身  函数执行阶段 的 this 执行 undefined 
export class EventDemo extends Component{

    constructor(){
        super();


        this.init = function(){
            console.log("constructor 内部方法的this 永远指向 class 类本身") 
            console.log(this);
        }

        this.handleCheckThisThree = this.handleCheckThisThree.bind(this);  // 借用 bind 改变 this 指向
    }

    // 原型对象 __proto__  == prototype 
    handleClick(){
        console.log(this);
        console.log("这是 react 组件内部的自定义事件 handleClick ")
    }

    handleInput(e){
        console.log(e.target.value);
    }

    handleChange(e){
        console.log(e.target.value);
    }

    handleKeyUp(e){
        console.log(e.keyCode)
    }

    handleCheckThisOne(){
        // 组件 内部 自定义函数  
        // react 不会  把 this 分配自定义函数内部  this 指向 undefined 
        console.log(this)
    }

    handleCheckThisTwo = ()=>{
        // 借用 箭头函数 把 this 指向 函数定义声明阶段 
        console.log(this);
    }

    handleCheckThisThree(){
        console.log(this);
    }

    render(){
        console.log(this);
        return (
            <div >
                <div  onClick={action.parent}>
                    <h2 className="happy" onClick={ ()=>action.fnA("daydayup-666") } > react 定义 事件 用户触发事件 </h2>
                    <h2 onClick={action.fnB} style={{color:"green",fontSize:40}}>事件 属性 遵循 驼峰命名 onClick onChange onTouchStart </h2>
                </div>
                <div onMouseMove={commonJS.move} style={{width:200,height:200,backgroundColor:"pink"}}> </div>
                <div onTouchStart={commonJS.touch} style={{width:200,height:200,backgroundColor:"blue"}}> </div>
                <div onClick={this.handleClick} onTouchEnd={commonJS.touch} style={{width:200,height:200,backgroundColor:"yellow"}}> </div>
                <h2 onClick={()=>this.init()}>检测 this 的变化 </h2>
                <p> <input type="text" placeholder="input"  onInput={this.handleInput}/></p>
                <p><input type="text" placeholder="change" onChange={this.handleChange}/></p>
                <p>react 官方  推荐 onChange 事件 </p>
                <p><input type="text" placeholder="keyup" onKeyUp={this.handleKeyUp} /></p>
                <button onClick={()=>this.myjs.one('wh1910')}>  原型链 挂载事件 </button>
                <div>
                    <h2 onClick={this.handleCheckThisOne}>react 组件内部的 自定义函数  this - one </h2>
                    <button onClick={()=>this.handleCheckThisOne()   }>react 组件内部的 自定义函数  this - one 箭头函数</button>
                    <button onClick={ this.handleCheckThisTwo }>react 组件内部的 自定义函数  this - two 箭头函数</button>
                    <button onClick={ this.handleCheckThisThree }>react 组件内部的 自定义函数  this - three </button>

                </div>
            </div>
        )
    }
}


// 箭头函数   写法简单   改变this指向  
// 1. 箭头函数 本身 没有 this 所以箭头函数会 借用函数外部代码块的 this (this 指向上一级的this)
// 2. 箭头函数 的 this 跟 执行环境的 this 无关, 指向是 函数定义阶段的 this 

EventDemo.prototype.myjs = {
    one(word){
        console.log("这是原型链 __proto__ 挂载 的方法 " + word)
    }
}