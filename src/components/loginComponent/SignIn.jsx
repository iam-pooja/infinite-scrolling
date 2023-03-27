import React, { useState } from 'react';
import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';

const SignIn = () => {

const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const navigate = useNavigate()

const signIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    localStorage.setItem('isAuth', true); 
    alert('You have successfully Logged In')
    navigate('/home')
  }).catch(err => {
    alert(err.message)
  })
}

  return (
    <div className="login-page">
    <div className='sign-in-container'>
      <form className='container' onSubmit={signIn}>
        <h1>Sign in</h1>
        <label className='userName' htmlFor="username">Username:</label>
        <input type="email" 
        placeholder='email...' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} /> <br />
        <label htmlFor="password">Password:</label>
        <input className='password' type="password" placeholder='password...'
         value={password}
         onChange={(e) => setPassword(e.target.value)} /> <br />
         <button type='submit' >Log In</button>
         <p className='footer'>Not a member? <Link to='/Signup' className='link'>Signup</Link></p>
      </form>
    </div>
    </div>
  )
}

export default SignIn
