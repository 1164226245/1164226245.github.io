import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';    //原脚手架的公共样式
import "@/styles/index.scss"    //自己的公共样式   验证别名是否生效
import App from './App';  //次组件
import * as serviceWorker from './serviceWorker';     //服务配置

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
