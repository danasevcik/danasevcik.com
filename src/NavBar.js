import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useHamburgerMenu from './CustomHamburgerHook.js';

function NavBar() {

  const callback = () => {
    let menu = document.getElementById('nav')
    console.log(menu);
    if (inputs.clicked === true) {
      console.log('show me the menu');
      menu.style.display = ''
    } else if (inputs.clicked === false) {
      console.log('hide the menu');
      menu.style.display = 'none'
    }
  }

  const {inputs, handleClick} = useHamburgerMenu(callback);

  return (
    <Fragment>
      <i onClick={handleClick} name='clicked' value={inputs.clicked} className='align justify big icon'></i>
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
