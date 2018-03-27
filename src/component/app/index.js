import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

// import { AppBar } from 'material-ui';

import Landing from '../landing';
import AuthRedirect from '../auth-redirect';
// import NavWrapper from '../material-ui/nav-wrapper';

import '../../assets/background-path';

import './_app.scss';

class App extends Component {  
  render() {
    return (
      <Fragment>
        {/*<NavWrapper />*/}
        <BrowserRouter>
          <div className="app">
            <MetaTags>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </MetaTags>
            <Fragment>
              <Route path="*" component={AuthRedirect} />
              <Route exact path="/" component={Landing} />
            </Fragment>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

// const mapDispatchToProps = dispatch => ({
// }); 

export default connect(mapStateToProps)(App);
