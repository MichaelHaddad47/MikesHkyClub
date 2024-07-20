import React, { useState } from 'react';
import './Login.css';
import loginLogo from '../assets/loginlogo.png';
import loginPagePicture from '../assets/loginpagepicture.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setShowPopup(true);
    } else {
      alert('Please enter both email and password');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${showPopup ? 'blurred' : ''}`}>
        <div className="login-form-box">
          <img src={loginLogo} alt="Login Logo" className="login-logo" />
          <h1 className="login-title">User Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="login-input-group remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="login-button">Submit</button>
          </form>
        </div>
        <div className="login-image">
          <img src={loginPagePicture} alt="Login Illustration" />
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Successfully Logged In!</h2>
            <button onClick={closePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
