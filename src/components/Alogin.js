import React, { useState } from 'react';
import './Alstyle.css';

const AsateraSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="asatera-signin-container">
    <img src="D:\Business Details\my-business\src\components\Untitled-3 3.svg" />

      <h2>Welcome Back!</h2>
      <p>Sign in to continue</p>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Or sign in with</p>
      <img src="D:\Business Details\my-business\src\components\Right Card.jpg" className="social-icons" />

    </div>
  );
};

export default AsateraSignIn;
