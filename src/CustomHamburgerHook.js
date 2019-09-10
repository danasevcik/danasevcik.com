import React, { useState } from 'react';

const useHamburgerMenu = (callback) => {

  const initialState = {
    clicked: true
  }

  const [inputs, setInputs] = useState(initialState);

  const handleClick = (event) => {
    console.log(inputs.clicked);
    event.persist();
    setInputs(inputs => ({clicked: !inputs.clicked}));
    callback()
  }

  return {
    handleClick,
    inputs,
  };
}

export default useHamburgerMenu;
