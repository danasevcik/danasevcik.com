import React, { useEffect, Fragment } from 'react';
import useContactForm from './CustomHooks.js';

function Contact() {

  const {inputs, handleInputChange, handleSubmit} = useContactForm();

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the Contact page</div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input onChange={handleInputChange} value={inputs.firstname} type='text' name='firstname' required/>
        <label>Last Name</label>
        <input onChange={handleInputChange} value={inputs.lastname} type='text' name='lastname' required/>
        <label>Email Address</label>
        <input onChange={handleInputChange} value={inputs.email} type='text' name='email' required/>
        <label>Subject</label>
        <input onChange={handleInputChange} value={inputs.subject} type='text' name='subject' required/>
        <label>Message</label>
        <input onChange={handleInputChange} value={inputs.message} type='text' name='message' required/>
        <button>Submit</button>
      </form>
    </Fragment>
  )

}

export default Contact;
