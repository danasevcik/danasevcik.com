import React from 'react';
import { Route, Switch, withRouter, Link } from "react-router-dom";
import NavBar from './NavBar.js';
import About from './About.js';
import './App.css';

function App() {
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
      </Switch>
    </React.Fragment>

  );
}

export default withRouter(App);
