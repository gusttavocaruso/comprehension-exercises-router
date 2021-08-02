import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <br />
          <Link to="/about">About</Link> <br />
          <Link to="/users">Users</Link> <br />
        </nav>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users" component={ Users } />
      </BrowserRouter>
    );
  }
}

export default App;
