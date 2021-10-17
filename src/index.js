import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main.js';
import style from './style/style.css';
import core from './style/core.css';
import Maintence from './components/Maintence';

ReactDOM.render(
  <React.StrictMode>
    <Maintence />
  </React.StrictMode>,
  document.getElementById('wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
