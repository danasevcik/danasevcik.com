import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from "react-router-dom";
import NavBar from './NavBar.js';
import MainPage from './MainPage.js';
import About from './About.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="navbar">
          <NavBar/>
        </div>
        <div>
          <MainPage />
        </div>
        <Switch>
          <Route
            path="/dana"
            render={routerProps => (
              <About/>
            )}/>
          </Switch>
        </React.Fragment>

      );

  }
}

export default withRouter(App);
