import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './HelloWorldApp';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import CounterApp from './CounterApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={1} />
  </React.StrictMode>
)