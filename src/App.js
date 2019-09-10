import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import About from './About.js';
import Contact from './Contact.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import './App.css';

function App() {

  return (
    <div>
      <div>
        <NavBar/>
      </div>
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
          path='/resume'
          render={routerProps => <Resume/>}
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
