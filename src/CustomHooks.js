import React, { useState } from 'react';

const useContactForm = (callback) => {

  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    body: ''
  }

  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (event) => {
    callback();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const clearForm = () => {
    setInputs(initialState)
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    clearForm
  };
}

export default useContactForm;
