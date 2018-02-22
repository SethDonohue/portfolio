import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { log } from '../../lib/util';

class AuthRedirect extends Component {
  render() {
    const { location, history } = this.props;
    const { pathname } = location;
    const destinationRoute = null;

    // if (pathname === '/room') {
    //   if (!room) destinationRoute = '/';
    // } else if (pathname === '/') {
    //   if (room) destinationRoute = '/room';
    // } else if (room) {
    //   destinationRoute = '/room';
    // } else {
    //   destinationRoute = '/';
    // }

    return (
      <div className="auth-redirect">
        {destinationRoute ? <Redirect to={destinationRoute} /> : null }
      </div>
    );
  }
}

// const mapStateToProps = state => ({ room: state.room });

export default AuthRedirect;
// export default connect(mapStateToProps)(AuthRedirect);
