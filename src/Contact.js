import React, { useEffect } from 'react';

function Contact() {

  useEffect(() => {
    document.title = 'Contact - Dana Sevcik';
  });

  return (
    <div class='rest-of-page'>I am the Contact page</div>
  )

}

export default Contact;
