import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';

class StricAcces extends React.Component {
  render() {
    const { userCheck } = this.props;
    return (
      <div>
        <p>{ (userCheck.username === 'Jonny'
          && userCheck.password === '1234') ?
          <span>Welcome Jonny Pistols</span> :
          (<span>"Access denied"
            <Route exact path="/" component={ Home } />
          </span>) 
         }</p>
      </div>
    );
  }
}

export default StricAcces;