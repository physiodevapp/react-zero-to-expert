import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

function SimpleFormWithCustomHook() {
  
  const { form, username, email, password, handleChange } = useForm({
    username: "strider",
    email: "strider@email.com",
    password: "",
  })

  // const { username, email, password } = form

  useEffect(() => {
    // console.log('form changed!')
  
    return () => {
      
    }
  }, [form])
  

  useEffect(() => {
    // console.log('email changed!')
  
    return () => {
      
    }
  }, [email])
  

  return (
    <>
      <h1>Simple Form Witch Custom Hooks</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@domain"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />

    </>
  );
}

export default SimpleFormWithCustomHook;
