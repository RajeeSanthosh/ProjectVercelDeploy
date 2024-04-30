import React, { useState } from 'react';
import './Arstyle.css';

const AsateraRegistration = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
  };

  return (
    <div className="asatera-registration-container">
      <h2>Asatera</h2>
      <p>Registration Completed. Please confirm your email id by clicking on the link sent to your email.</p>
      <button onClick={handleSendEmail} disabled={emailSent}>
        {emailSent ? 'Email Sent' : 'Sounds Great!'}
      </button>
      <img src="D:\Business Details\my-business\src\components\Page 1.png" className="social-icons" />

    </div>
  );
};

export default AsateraRegistration;
