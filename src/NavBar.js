import React from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const hamburgerMenu = () => {
    let menu = document.getElementById('nav')
    let iconButton = document.getElementById('menu-icon')
    let icon = document.getElementById('icon')
    if (menu.className === 'hide-nav' || inputs.clicked === true) {
      icon.setAttribute('class', 'close big icon')
      menu.setAttribute('class', 'show-nav')
    } else if (menu.className === 'show-nav') {
      icon.setAttribute('class', 'content big icon')
      menu.setAttribute('class', 'hide-nav')
    }
  }

  const {inputs, handleClick, handleCloseMenu} = useHamburgerMenu(hamburgerMenu);

  return (
    <div>
      <button id='menu-icon' onClick={handleClick} name='clicked' value={inputs.clicked}>
        <i id='icon' className='content big icon'></i>
      </button>
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
    </div>
  )
}

export default NavBar;
