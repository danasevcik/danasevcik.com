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
        <Link to='/' id='first-menu-link' className='menu-link' onClick={handleClick}>
          H o m e
        </Link>
        <Link to='/about-me' className='menu-link' id='about-link' onClick={handleClick}>
          A b o u t
        </Link>
        <Link to='/portfolio' className='menu-link' id='portfolio-link' onClick={handleClick}>
          P o r t f o l i o
        </Link>
        <a href='https://drive.google.com/file/d/1ogFXwZUgjkqxTg8_xXVPAqseb6b-X_fq/view?usp=sharing' className='menu-link' id='resume-link' onClick={handleClick} target='_blank' rel='noopener noreferrer'>R e s u m e</a>
        <a href='mailto:hello@danasevcik.com' className='menu-link' id='contact-link' onClick={handleClick}>C o n t a c t</a>
      </div>
    </div>
  )
}

export default NavBar;
