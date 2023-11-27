import React, { useState } from 'react';
import './Css/Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function getUserData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function postData() {
    try {
      const response = await Axios.post(
        'https://api.noroff.dev/api/v1/social/auth/login',
        user
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>LOG IN</h1>
        <div className="loginsignup-fields">
      
          <input
            onChange={getUserData}
            type="email"
            placeholder='your mail'
            name='email'
          />
          <input
            onChange={getUserData}
            type="password"
            placeholder='your password'
            name='password'
          />
        </div>
        <Link to="/" className='link'>
          <button onClick={postData}>Continue</button>
        </Link>
    
        
      </div>
    </div>
  );
};

export default Login;
