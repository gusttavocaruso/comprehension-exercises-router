import React, { Component } from 'react';

import StricAcces from './StricAccess';

class Users extends Component {
  render() {
    const user = {
      username: 'Jonny',
      password: '12345',
    }
    const { greetingsMessage } = this.props
    const { userName } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
        <p> { userName } </p>
        <StricAcces userCheck={user} />
      </div>
    );
  }
};

export default Users;
