import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
// import route components from config foler ??
import routes from './config/routes.js'
// the next  -not needed in react ???
// import App from './App';
import './index.css';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
