import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
// import App from './HelloWorldApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <HelloWorldApp/>
  </React.StrictMode>
)