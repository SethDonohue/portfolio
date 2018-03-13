import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Project from '../project';

import AuthForm from '../auth-form';
import { signupAction, loginAction, logoutAction } from '../../action/auth';

import './_landing.scss';

const defaultState = {
  projects: [
    { screenshots: ['/src/image/project1ss1.png', '/src/image/project1ss2.png', '/src/image/project1ss3.png', '/src/image/project1ss4.png'] }, 
    { screenshots: ['/src/image/project2ss1.png', '/src/image/project2ss2.png', '/src/image/project2ss3.png', '/src/image/project1ss4.png'] }, 
    { screenshots: ['/src/image/project3ss1.png', '/src/image/project3ss2.png', '/src/image/project3ss3.png', '/src/image/project1ss4.png'] }, 
  ],
  signingUp: false,
  loggingIn: false,
};

class Landing extends Component {
  state = defaultState;
  
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
              <h1> Project Title </h1>            
              <Project properties={this.state.projects[0]} />
              {/*
                <img src="https://i.imgur.com/wfvLvuq.png" alt="Real Time" />
              <h1><a href="http://www.firepolls.com">Firepolls</a></h1>
              <h4>Feb 2018 – Feb 2018</h4>
              <p className="feature-desc">This is a school oriented app that allows for quick,
                anonymous, opinion polling on any topic.
                You create a room, invite others too it and send out a question to get responses
                from the voters.
              </p>

              <p className="feature-desc">It was built with the idea of giving teachers instant feedback from the
                students on topics that were covered in the class.
                Firepolls also allows a poll creator to save their polls for reference
                to keep track of how the opinions change.
              </p>

              <p className="feature-desc">Main Technologies: JavaScript, Socket IO, Babel, MongoDB, Heroku &
                Continuous Deployment, Travis Continuous Integration, React, Redux,
                Material UI, Artillery (Load Testing), Jest (Test Driven Development),
                Webpack, Express, Node.
              </p>
            */}

            </div>
            <div className="feature-center">
              <h1> Project Title </h1>                        
              <Project properties={this.state.projects[2]} />
              
              {/*
              <img src="https://i.imgur.com/RLqWOTH.png" alt="Analytics" />
              <h1><a href="https://github.com/HashMoney/Noncents">Noncents</a></h1>
              <h4>Jan 2018 – Jan 2018</h4>

              <p className="feature-desc">A purely back-end Blockchain project with persistent chain storage and peer-to-peer mining,
                it is mainly a JavaScript experiment to build, understand and deploy a blockchain.
              </p>
              
              <p className="feature-desc">Noncents was built in 5 days and allows for
              multiple servers to mine for blocks and get their block validated by the
              main chain verification server hosted on Heroku.
              It uses JavaScript, MongoDB, and RESTful API practices to implement all
              of the features.
              </p>

              <p>Live Raw Chain: <a href="http://noncents.herokuapp.com/chain">http://noncents.herokuapp.com/chain</a></p>
              <p>GitHub Repo: <a href="https://github.com/HashMoney/Noncents">https://github.com/HashMoney/Noncents</a></p>
              */}
            </div>
            <div className="feature-right">
              <h1> Project Title </h1>            
              <Project properties={this.state.projects[2]} />
            
              {/*
              <img src="https://i.imgur.com/DwpqLpv.png" alt="Anonymous Voting" />
              <h1><a href="https://sethdonohue.github.io/layout-generator/">Layout Generator</a></h1>
              <h4>Dec 2017 – Dec 2017</h4>

              <p className="feature-desc">Layout Generator allows a user to follow a simple flow through the website, choose a layout colors/background, and get all the HTML, CSS and JS code required to use the template for their own website.
              </p>

              <p className="feature-desc">It was built in 4 days and was designed to be extremely easy to use.</p>

              <p>Live Site: <a href="https://sethdonohue.github.io/layout-generator/">https://sethdonohue.github.io/layout-generator/</a></p>
              <p>GitHub Repo: <a href="https://github.com/SethDonohue/layout-generator">https://github.com/SethDonohue/layout-generator</a></p>
              */}              
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
