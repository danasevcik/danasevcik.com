import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <NavBar/>
      </div>
      <Switch>
        <Route
          path="/dana"
          render={routerProps => <About/>}
        />
        <Route
          path="/contact"
          render={routerProps => <Contact/>}
        />
        <Route
          path="/"
          render={routerProps => <MainPage/>}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
