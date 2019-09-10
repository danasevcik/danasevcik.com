import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const callback = () => {
    let menu = document.getElementById('nav')
    let icon = document.getElementById('menu-icon')
    if (inputs.clicked === true) {
      icon.setAttribute('class', 'close big icon')
      menu.setAttribute('class', 'show-nav')
    } else if (inputs.clicked === false) {
      icon.setAttribute('class', 'content big icon')
      menu.setAttribute('class', 'hide-nav')
    }
  }

  const {inputs, handleClick} = useHamburgerMenu(callback);

  return (
    <Fragment>
      <i id='menu-icon' onClick={handleClick} name='clicked' value={inputs.clicked} className='content big icon'></i>
      <div id='nav'>
        <Link to='/' class='menu-link'>
          Home
        </Link>
        <Link to='/about-me' class='menu-link'>
          About
        </Link>
        <Link to='/portfolio' class='menu-link'>
          Portfolio
        </Link>
        <Link to='/resume' class='menu-link'>
          Resume
        </Link>
        <Link to='/contact' class='menu-link'>
          Contact
        </Link>
      </div>
    </Fragment>
  )
}

export default NavBar;
