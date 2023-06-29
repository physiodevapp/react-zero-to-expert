import React from "react";
import { AppRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";

export const CalendarApp = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};
