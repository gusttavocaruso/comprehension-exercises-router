import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/users/:userName"
            render={(props) =>
              <Users {...props}
                greetingsMessage="Good Morning" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
