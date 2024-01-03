import React, { useState } from 'react';
import '../pages/feadbackcontact';

const FeedbackPageContact= () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the feedback
    const feedbackData = {
      name,
      email,
      phone,
      message
    };

    // Process the feedback data, e.g., send it to a server or store it in a database
    console.log(feedbackData);

    // Reset the form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (

   
    <div className="container">
    
      <h1 className="mt-4">Feedback Page</h1>
      <div className='divv'>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>         
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="email">Email:</label>
          
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
           <br/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
           <br/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={handleMessageChange}
            rows={4}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary" > Send </button>
        <br/>
        <br/>
      </form>
    </div>
    </div>
  );
};

export default FeedbackPageContact;