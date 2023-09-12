import React, { useState } from 'react';
import './Style.css';
import Signup from './SignUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const validEmail = 'avinashranjan268@gmail.com';
    const validPassword = 'Avi@123';

    if (email === validEmail && password === validPassword) {
      alert('Login Successful');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    
    <div>
      <h2 className='header' >Login</h2>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <br></br>
      <br></br>
      <Signup/>
    </div>
  );
};

export default Login;
