import React, { useEffect, Fragment } from 'react';
import useContactForm from './CustomHooks.js';
import Popup from "reactjs-popup";

function Contact() {

  const sendEmail = () => {
    setTimeout(() => clearForm(), 1000)
  }

  const {inputs, handleInputChange, handleSubmit, clearForm} = useContactForm(sendEmail);

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <Fragment>
      <div>I am the Contact page</div>
        <form action={`mailto:hello@danasevcik.com`} onSubmit={handleSubmit} encType="text/plain">
          <input onChange={handleInputChange} value={inputs.firstname} type='text' name='firstname' placeholder='First Name' required/>
          <input onChange={handleInputChange} value={inputs.lastname} type='text' name='lastname' placeholder='Last Name' required/>
          <input onChange={handleInputChange} value={inputs.email} type='email' name='email' placeholder='Email' required/>
          <input onChange={handleInputChange} value={inputs.subject} type='text' name='subject' placeholder='Subject' required/>
          <textarea onChange={handleInputChange} value={inputs.body} type='text' name='body' placeholder='Message' required/>
          <input type='text' name='_gotcha' style={{display: 'none'}}/>
          <button><a style={{color: 'black', textDecoration: 'none'}} href={`mailto:hello@danasevcik.com?subject=${inputs.subject}&body=${inputs.body}`}>Send</a></button>
        </form>
    </Fragment>
  )

}

export default Contact;
