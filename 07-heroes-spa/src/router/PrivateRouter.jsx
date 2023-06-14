import React from "react";
import { useContext } from "react";
import { AuthContext } from "../heroes/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const {pathname} = useLocation();

  return logged ? children : !pathname.includes('login') && <Navigate to={"/login"} />;
};
