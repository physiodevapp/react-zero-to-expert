import React from "react";
import { useContext } from "react";
import { AuthContext } from "../heroes/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (
    (!logged) 
    ? children 
    : <Navigate to={"/marvel"} />
  )
};
