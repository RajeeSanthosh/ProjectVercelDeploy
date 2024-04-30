import React, { useState } from 'react';
import './Bstyle.css';

const AddBusinessDetails = () => {
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { companyName, businessType, numberOfEmployees, phone });
  };

  return (
    <div className="form-container">
      <h2>Add your Business Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">COMPANY name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessType">BUSINESS TYPE</label>
          <select
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfEmployees">No. of EMPLOYEES</label>
          <input
            type="number"
            id="numberOfEmployees"
            value={numberOfEmployees}
            onChange={(e) => setNumberOfEmployees(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">PHONE</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create an account</button>
      </form>
      <img src="D:\Business Details\my-business\src\components\Page 1.jpg"  className="social-icons" />

    </div>
  );
};

export default AddBusinessDetails;
