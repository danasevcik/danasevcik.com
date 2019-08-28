import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from "react-router-dom";
import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="navbar">
          <NavBar/>
        </div>
        <Switch>
          <Route
            path="/dana"
            render={routerProps => (
              <About/>
            )}/>
          <Route
            path="/contact"
            render={routerProps => (
              <Contact/>
            )}/>
          <Route
            path="/"
            render={routerProps => (
              <MainPage/>
            )}/>
          </Switch>
        </React.Fragment>

      );

  }
}

export default withRouter(App);
