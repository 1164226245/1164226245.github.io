// import { Student } from "../../../../1225/one/src/utils/msg";


export const msg ="es6里面一个模块暴露";


export const word="使用react项目构建";

//复习构造函数

//构造器, 原型对象  也叫方法   ,静态对象也叫静态属性


export class People{
    constructor(names,age){
        this.age=age;
        this.names=names;
    }
    //方法
    say(){
        return "jijiji"
    }
    
}
//静态竖向
People.hobby=["paly","eat"];

export class  Student extends People {
    constructor(names,age,score){
        super(names,ages);   //继承父类
        this.score=score;//自己的东西

    }

    //方法
    say(){
        return super.say();   //super为对象时指向是父构造函数的方法
    }
    //自己的方法
    goto(){

    }


}

//静态属性

Student.hobby=["work","coding"];  //静态属性无法继承


//模仿react

export class Component{
     constructor(){

     }
     render(){

     }
     //挂载
     componentWillMount(){

     }
}

//继承上面的父类
export  class App  extends Component{

}