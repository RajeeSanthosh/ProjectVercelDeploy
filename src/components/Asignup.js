import React, { useState } from 'react';
import './Asignstyle.css';

const AsateraSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Business Account:", isBusinessAccount);
    console.log("Agree Terms & Conditions:", agreeTerms);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="asatera-signup-container">
      <h2>Create an account</h2>
      <p>Sign up to continue</p>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isBusinessAccount}
              onChange={() => setIsBusinessAccount(!isBusinessAccount)}
            />
            This is a Business Account
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            I agree with terms & conditions
          </label>
        </div>
        <button type="submit">Create an account</button>
      </form>
      <p>Or sign in with</p>
      <img src="D:\Business Details\my-business\src\components\signuprightcard.jpg"className="social-icons" />

    </div>
  );
};

export default AsateraSignUp;
