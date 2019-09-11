import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const hamburgerMenu = () => {
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

  const {inputs, handleClick} = useHamburgerMenu(hamburgerMenu);

  return (
    <Fragment>
      <i id='menu-icon' onClick={handleClick} name='clicked' value={inputs.clicked} className='content big icon'></i>
      <div id='nav'>
        <Link to='/' className='menu-link' onClick={handleClick}>
          Home
        </Link>
        <Link to='/about-me' className='menu-link' onClick={handleClick}>
          About
        </Link>
        <Link to='/portfolio' className='menu-link' onClick={handleClick}>
          Portfolio
        </Link>
        <Link to='/resume' className='menu-link' onClick={handleClick}>
          Resume
        </Link>
        <Link to='/contact' className='menu-link' onClick={handleClick}>
          Contact
        </Link>
      </div>
    </Fragment>
  )
}

export default NavBar;
