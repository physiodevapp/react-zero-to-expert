import React from "react";
import { MainApp } from './10-useContext/MainApp'
import { BrowserRouter as Router} from 'react-router-dom'

function HooksApp() {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
}

export default HooksApp;
