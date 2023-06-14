import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../heroes/context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {

    login('physiodevapp')

    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        onClick={handleLogin} 
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};
