import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';

import AuthForm from '../auth-form';
import { signupAction, loginAction, logoutAction } from '../../action/auth';

import './_landing.scss';

class Landing extends Component { 
  state = {
    signingUp: false,
    loggingIn: false,
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.room) this.props.history.push('/room');
  //   if (nextProps.loggedIn) {
  //     this.setState(this.emptyState);
  //   }
  // }

  emptyState = { ...this.state };

  render() {
    const {
      signup,
      login,
      logout,
    } = this.props;

    const signupLoginJSX = (
      <ul className="nav-items">
        <li>
          <RaisedButton
            onClick={() => 
              this.setState(previousState => ({
                signingUp: !previousState.signingUp,
                loggingIn: false,
              }))
            }
          >
            Signup
          </RaisedButton>          
        </li> 
        <li>
          <RaisedButton 
            onClick={() =>
              this.setState(previousState => ({
                signingUp: false,
                loggingIn: !previousState.loggingIn,
              }))
            }
          >
            Login
          </RaisedButton>
        </li>
      </ul>
    );
    
    return (
      <Fragment>
        <div className="landing-frag">
          <div className="header">
            <div className="container-fluid">
              <a href="/">
                <h1 className="logo">
                  <span>SD</span>
                  Seth Donohue
                </h1>
              </a>
            </div>
          </div>
          <section className="jumbotron">
            <h1><span>Welcome to My Portfolio</span></h1>
            <br />
          </section>
          
          <div className="grid">
            <div className="feature-left">
              <img src="https://i.imgur.com/wfvLvuq.png" alt="Real Time" />
              <h2>Portfolio Item #1</h2>
              <p className="feature-desc">
                LoremImpsum Description of project....
              </p>
            </div>
            <div className="feature-center">
              <img src="https://i.imgur.com/RLqWOTH.png" alt="Analytics" />
              <h2>Portfolio Item #2</h2>
              <p className="feature-desc">
                Description 2.......
              </p>
            </div>
            <div className="feature-right">
              <img src="https://i.imgur.com/DwpqLpv.png" alt="Anonymous Voting" />
              <h2>Portfolio Item #3</h2>
              <p className="feature-desc">
                Description 3....
              </p>
            </div>
          </div>
          <footer className="footer">
            © 2018<a href="https://github.com/sethdonohue"> Seth Donohue on GitHub</a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(signupAction(userData)),
  login: userData => dispatch(loginAction(userData)),
});

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

export default Landing;
// export default connect(mapStateToProps, mapDispatchToProps)(Landing);
