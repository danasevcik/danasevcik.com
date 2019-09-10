import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const callback = () => {
    let menu = document.getElementById('nav')
    let icon = document.getElementById('menu-icon')
    if (inputs.clicked === true) {
      menu.style.display = ''
      icon.setAttribute('class', 'close big icon')
    } else if (inputs.clicked === false) {
      menu.style.display = 'none'
      icon.setAttribute('class', 'content big icon')
    }
  }

  const {inputs, handleClick} = useHamburgerMenu(callback);

  return (
    <Fragment>
      <i id='menu-icon' onClick={handleClick} name='clicked' value={inputs.clicked} className='content big icon'></i>
      <div id='nav' style={{display: 'none'}}>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about-me'>
          About
        </Link>
        <Link to='/portfolio'>
          Portfolio
        </Link>
        <Link to='/resume'>
          Resume
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </div>
    </Fragment>
  )
}

export default NavBar;
