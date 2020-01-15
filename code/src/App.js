import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import {MainRouter} from "~";   //表示引入scripts里面的index.就是

function App() {
  return (
    <div className="App">
      {/* <h3>新的项目挂载</h3> */}

      {/* 挂载 MainRouter*/}
      <MainRouter></MainRouter>

      {/*       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     */}
     
    </div>
  );
}

export default App;
