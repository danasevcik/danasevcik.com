import React, { useEffect, Fragment } from 'react';
import useContactForm from './CustomHooks.js';

function Contact() {

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the Contact page</div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input onChange={handleInputChange} type='text' name='firstname' required/>
        <label>Last Name</label>
        <input onChange={handleInputChange} type='text' name='lastname' required/>
        <label>Email Address</label>
        <input onChange={handleInputChange} type='text' name='email' required/>
        <label>Subject</label>
        <input onChange={handleInputChange} type='text' name='subject' required/>
        <label>Message</label>
        <input onChange={handleInputChange} type='text' name='message' required/>
        <button>Submit</button>
      </form>
    </Fragment>
  )

}

export default Contact;
