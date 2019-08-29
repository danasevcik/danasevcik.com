import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Fragment>
      <span>I am navbar</span>
      <Link to='/'>
        Home
      </Link>
      <Link to='/dana'>
        About
      </Link>
      <Link to='/contact'>
        Contact
      </Link>
    </Fragment>
  )
}

export default NavBar;
