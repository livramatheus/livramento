import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage.js';
import './style/style.css';
import './style/core.css';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('wrapper')
);
