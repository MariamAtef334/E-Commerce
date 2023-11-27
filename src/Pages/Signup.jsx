import React, { useState } from 'react';
import './Css/Signup.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const Signup = () => {
  const [user, setUser] = useState({
    name: '',
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
        'https://api.noroff.dev/api/v1/social/auth/register',
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
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            onChange={getUserData}
            type="text"
            placeholder='your name'
            name='name'
          />
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
        <Link to="/login" className='link'>
          <button onClick={postData}>Continue</button>
        </Link>
        <p className='loginsignup-login'>
          Already have an account ?<Link to='/login' className='link'><span type="button">Login</span></Link>
        </p>
       
      </div>
    </div>
  );
};

export default Signup;
