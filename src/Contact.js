import React, { useEffect, Fragment } from 'react';
import useContactForm from './CustomHooks.js';

function Contact() {

  const sendEmail = () => {
    alert(`
      Email Sent!
      Name: ${inputs.firstname} ${inputs.lastname}
      Email: ${inputs.email}
      Subject: ${inputs.subject}
      Message: ${inputs.message}
      `
    );
  }

  const {inputs, handleInputChange, handleSubmit} = useContactForm(sendEmail);

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the Contact page</div>
      <form onSubmit={handleSubmit} action="https://formspree.io/danarsevcik@gmail.com" method="POST" >
        <input onChange={handleInputChange} value={inputs.firstname} type='text' name='firstname' placeholder='First Name' required/>
        <input onChange={handleInputChange} value={inputs.lastname} type='text' name='lastname' placeholder='Last Name' required/>
        <input onChange={handleInputChange} value={inputs.email} type='text' name='email' placeholder='Email' required/>
        <input onChange={handleInputChange} value={inputs.subject} type='text' name='subject' placeholder='Subject' required/>
        <textarea onChange={handleInputChange} value={inputs.message} type='text' name='message' placeholder='message' required/>
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  )

}

export default Contact;
