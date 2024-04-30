import React, { useState } from 'react';
import './Rstyle.css';

const RegistrationCompleted = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
    }, 5000); 
  };

  return (
    <div>
      <img src="D:\Business Details\my-business\src\components\Untitled-3 3.svg" className="social-icons" />

      <h2>Registration Completed</h2>
      <p>Please confirm your email id by clicking on the link sent to your email.</p>
      <button onClick={handleSendEmail} disabled={emailSent}>
        {emailSent ? 'Email Sent' : 'Send Email'}
      </button>
    </div>
  );
};

export default RegistrationCompleted;
