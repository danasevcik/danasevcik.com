import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Portfolio from './Portfolio.js';
import './App.css';
import useHamburgerMenu from './CustomHamburgerHook.js';

function App() {

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

  const {inputs, handleClick} = useHamburgerMenu(hamburgerMenu);

  return (
    <div id='app'>
        <button id='menu-icon' onClick={handleClick} name='clicked' value={inputs.clicked}>
          <i id='icon' className='content big icon'></i>
        </button>
        <NavBar/>
      <Switch>
        <Route
          path='/about-me'
          render={routerProps => <About/>}
        />
        <Route
          path='/portfolio'
          render={routerProps => <Portfolio/>}
        />
        <Route
          path='/contact'
          render={routerProps => <Contact/>}
        />
        <Route
          path='/'
          render={routerProps => <MainPage/>}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
