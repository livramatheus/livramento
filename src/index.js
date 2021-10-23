import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage.js';
import style from './style/style.css';
import core from './style/core.css';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('wrapper')
);
