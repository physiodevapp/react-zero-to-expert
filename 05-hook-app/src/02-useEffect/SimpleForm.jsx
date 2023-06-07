import React, { useEffect, useState } from "react";

function SimpleForm() {
  const [form, setForm] = useState({
    username: "strider",
    email: "strider@email.com"
  });

  const { username, email } = form;

  const handleChange = ({target}) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    })
  }

  useEffect(() => {
    console.log('useEffect')
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
      <h1>Simple Form</h1>
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
    </>
  );
}

export default SimpleForm;
