import React, { useState } from 'react';
import useLoginRedirect from './useLoginRedirect';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const loginAndRedirect = useLoginRedirect();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAndRedirect(credentials);
      console.log(response);
      props.setLogIn(response);
      navigate("/");
    } catch (error) {
      console.error("Error in login", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={credentials.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
