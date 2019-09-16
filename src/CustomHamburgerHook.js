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

  const handleCloseMenu = (event) => {
    event.persist();
    let menu = document.getElementById('nav')
    if (event.target.className === 'rest-of-page' && menu.className === 'show-nav') {
      setInputs(inputs => ({clicked: !inputs.clicked}))
      callback(event)
    }
  }

  return {
    handleClick,
    inputs,
    handleCloseMenu
  };
}

export default useHamburgerMenu;
