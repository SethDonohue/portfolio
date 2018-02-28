import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { log } from '../../lib/util';

class AuthRedirect extends Component {
  render() {
    const { location, history } = this.props;
    const { pathname } = location;
    const destinationRoute = null;

    return (
      <div className="auth-redirect">
        {destinationRoute ? <Redirect to={destinationRoute} /> : null }
      </div>
    );
  }
}


export default AuthRedirect;
