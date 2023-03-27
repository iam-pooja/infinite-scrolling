import React, { useState } from 'react';
import './Sign.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert('You have successfully Signed In');
        navigate('/')
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="login-page">
    <div className='sign-in-container'>
      <form className='container' onSubmit={signUp}>
        <h1>Create an account</h1>
        <label className='userName' htmlFor="username">Username:</label>
        <input type="email"
          placeholder='enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />
           <label htmlFor="password">Password:</label> 
        <input type="password" placeholder='password atleast 6 characters'
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br />
        <button type='submit'>Sign up</button>
        <p className='footer'>Already have an account? <Link to='/' className='link'>Login</Link></p>
      </form>
    </div>
    </div>
  )
}

export default SignUp;
