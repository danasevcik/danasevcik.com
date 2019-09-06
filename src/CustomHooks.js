import React, { useState } from 'react';

const useContactForm = (callback) => {
  const [inputs, setInputs] = useState({
    name: '',
    _replyto: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useContactForm;
