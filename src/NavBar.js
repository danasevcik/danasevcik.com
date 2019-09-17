import React from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const hamburgerMenu = () => {
    let menu = document.getElementById('nav')
    let icon = document.getElementById('icon')
    if (icon.className === 'content big icon') {
      icon.setAttribute('class', 'close big icon')
      menu.setAttribute('class', 'show-nav')
    } else if (icon.className === 'close big icon') {
      icon.setAttribute('class', 'content big icon')
      menu.setAttribute('class', 'hide-nav')
    }
  }

  const {handleClick} = useHamburgerMenu(hamburgerMenu);

  return (
    <div>
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
