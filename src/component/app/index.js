import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import UnderConstruction from '../under-construction';

// import { AppBar } from 'material-ui';

import Landing from '../landing';
import AuthRedirect from '../auth-redirect';
// import NavWrapper from '../material-ui/nav-wrapper';

import '../../assets/background-path';

import './_app.scss';

class App extends Component {  
  render() {
    return (
      <UnderConstruction />
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(App);
