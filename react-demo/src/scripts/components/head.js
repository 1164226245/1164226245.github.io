

import React , {Component} from "react"

const title = "wuhan1910-daydayup";

export class Head extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h2>
                    head-head-head --这是自定义组件  -- {title}
                </h2>
            </div>
        )
    }
}