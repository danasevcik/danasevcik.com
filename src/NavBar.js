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
        <a href='https://drive.google.com/file/d/1dM9iiHF6RDOw5kC2FSUlOXipjbBtl_eN/view' className='menu-link' onClick={handleClick} target='_blank' rel='noopener noreferrer'>Resume</a>
        <a href='mailto:hello@danasevcik.com' className='menu-link' onClick={handleClick}>Contact</a>
      </div>
    </div>
  )
}

export default NavBar;
