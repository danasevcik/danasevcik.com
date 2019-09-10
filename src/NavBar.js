import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Fragment>
      <span>I am navbar</span>
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
    </Fragment>
  )
}

export default NavBar;
