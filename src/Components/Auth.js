import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle successful login
      localStorage.setItem('token', data.token); // Store token in local storage
      localStorage.setItem('name', JSON.stringify({ name: data.user.name }));
      history('/');
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Handle successful registration
      localStorage.setItem('token', data.token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify({ name: data.user.name }));
      history('/');
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
    }
  };

  const handleToggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  return (
    <div>
      {isRegisterMode ? <h2>Register</h2> : <h2>Login</h2>}
      {isRegisterMode && <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />}
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={isRegisterMode ? handleRegister : handleLogin}>{isRegisterMode ? 'Register' : 'Login'}</button>
      <p onClick={handleToggleMode}>{isRegisterMode ? 'Already have an account? Login' : 'Don\'t have an account? Register'}</p>
    </div>
  );
};

export default Auth;
