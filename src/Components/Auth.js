import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLogin) {
        response = await axios.post('http://localhost:3001/api/v1/auth/login', {
          email,
          password
        });
      } else {
        response = await axios.post('http://localhost:3001/api/v1/auth/register', {
          name,
          email,
          password
        });
      }
      const { token, user } = response.data;
      // Clear any previous error upon successful authentication
      setError('');
      // You can handle the token and user data here, such as storing them in localStorage
      console.log('Authentication Successful:', user);
      console.log('Token:', token);
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleAuth}>
        {!isLogin && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p
        style={{ cursor: 'pointer', color: 'blue' }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'New user? Register here' : 'Already have an account? Login here'}
      </p>
    </div>
  );
};

export default Auth;
