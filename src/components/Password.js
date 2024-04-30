import React, { useState } from 'react';
import './Pstyle.css';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
  };

  return (
    <div className="password-recovery-container">
      <h2>Password Recovery</h2>
      <p>Enter your email to recover your password</p>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSendEmail} disabled={emailSent}>
        {emailSent ? 'Email Sent' : 'Send Email'}
      </button>
      <img src="D:\Business Details\my-business\src\components\passwordrightcard.jpg" className="social-icons" />

    </div>
  );
};

export default PasswordRecovery;
