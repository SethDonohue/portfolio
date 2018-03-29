import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
// import { RaisedButton, TextField } from 'material-ui';
// import muiThemeable from 'material-ui/styles/muiThemeable';

import Project from '../project';

// import AuthForm from '../auth-form';
// import { signupAction, loginAction, logoutAction } from '../../action/auth';

// Image import
import firepollsLandingJPG from '../../image/landingCroppedFull.jpg';
import firepollsCreateRoomGIF from '../../image/Peek Create Room2.gif';
import firepollsVotersJoinGIF from '../../image/VotersJoiningVoting.gif';
import firepollsLiveAnonGIF from '../../image/LiveAnnonymousVoting.gif';

import layoutGenFullPNG from '../../image/LayoutGenerator.png';
import layoutGenAnimationGIF from '../../image/LayoutGeneratorFULL.gif';

import './_landing.scss';

// Defining State Here
const defaultState = {
  projects: [
    { 
      images: [firepollsLandingJPG, firepollsCreateRoomGIF, firepollsVotersJoinGIF, firepollsLiveAnonGIF],
      content: {
        featureOneTitle: 'Simple',
        featureOneContent: 'Easy and fast to use. Create a room, have voters join it and create the first question to begin polling.',

        featureTwoTitle: 'Real Time Data',
        featureTwoContent: 'Visualize results in real time and easily know where the audience stands on any topic at any time.',

        featureThreeTitle: 'Anonymous Voting',
        featureThreeContent: 'Keep track of how many people have responded to a poll while keeping votes anonymous.',

        featureFourTitle: 'Main Technologies',
        featureFourContent: 'JavaScript, Socket IO, Babel, MongoDB, Heroku & Continuous Deployment, Travis Continuous Integration, React, Redux, Material UI, Artillery(Load Testing), Jest(Test Driven Development), Webpack, Express, Node.',
      },
      icons: ['default', 'checkmark', 'stopwatch', 'users'],      
    },
    { 
      images: [layoutGenFullPNG, layoutGenAnimationGIF, layoutGenAnimationGIF, layoutGenAnimationGIF],
      content: {
        featureOneTitle: 'Simple',
        featureOneContent: 'Choose a template. Choose a Color, with or without a background. Get your code.',

        featureTwoTitle: 'Live Changes',
        featureTwoContent: 'See your template exactly how it would look as you apply the changes.',

        featureThreeTitle: 'Quick Code Results',
        featureThreeContent: 'Get the HTML, CSS, and JavaScript in a legible format and copy it to our site to have a clean site, ready to go.',

        featureFourTitle: 'Main Technologies',
        featureFourContent: 'JavaScript, HTML5, CSS3',
      },
      icons: ['default', 'clipboard', 'feed', 'embed2'],
    },
  
  
  ],
  
  // signingUp: false,
  // loggingIn: false,
};


class Landing extends Component {
  state = defaultState;
    
  emptyState = { ...this.state };

  render() {
    // const {
    //   ,
    //   content,
    // } = this.state;

    // console.log('Landing State', this.state);
    
    // console.log('Landing Props', this.props);
    // console.log('Landing Images', images);
    
    // const {
    //   signup,
    //   login,
    //   logout,
    // } = this.props;

    // const signupLoginJSX = (
    //   <ul className="nav-items">
    //     <li>
    //       <RaisedButton
    //         onClick={() =>
    //           this.setState(previousState => ({
    //             signingUp: !previousState.signingUp,
    //             loggingIn: false,
    //           }))
    //         }
    //       >
    //         Signup
    //       </RaisedButton>
    //     </li>
    //     <li>
    //       <RaisedButton
    //         onClick={() =>
    //           this.setState(previousState => ({
    //             signingUp: false,
    //             loggingIn: !previousState.loggingIn,
    //           }))
    //         }
    //       >
    //         Login
    //       </RaisedButton>
    //     </li>
    //   </ul>
    // );

    return (
      <Fragment>
        <div className="landing-frag">
          <div className="header">
            <div className="container-fluid">
              <a href="/">
                <h1 className="logo">             
                  <svg id="svg-logo" width="150" height="100" viewBox="0 0 400 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    {/* TODO: Move this to a separate file for readability} */}
                  
                    <path d="M 359.37 25.494 L 350.098 55.111 C 341.685 52.098 333.874 49.55 326.665 47.48 C 319.596 45.411 312.709 43.691 306.043 42.307 C 299.237 40.923 292.493 39.94 285.83 39.332 C 279.168 38.724 272.026 38.427 264.426 38.427 C 255.086 38.427 246.57 39.332 238.838 41.143 C 231.106 42.954 224.456 45.372 218.869 48.386 C 213.282 51.399 208.957 54.891 205.914 58.862 C 202.872 62.832 201.349 66.88 201.367 71.019 C 201.385 75.158 202.261 78.908 204.016 82.271 C 205.89 85.634 209.584 88.828 215.057 91.842 C 220.53 94.778 228.342 97.701 238.495 100.636 C 248.647 103.482 262.12 106.495 278.934 109.69 C 294.407 112.626 308.101 116.027 319.978 119.907 C 331.995 123.787 342.074 128.224 350.236 133.229 C 358.398 138.312 364.543 144.093 368.71 150.559 C 372.998 157.026 375.17 164.359 375.205 172.546 C 375.249 182.725 372.229 191.985 366.125 200.353 C 359.902 208.721 351.452 215.873 340.818 221.822 C 330.184 227.862 317.724 232.518 303.479 235.79 C 289.353 239.063 274.3 240.705 258.3 240.705 C 247.1 240.705 236.098 240.226 225.294 239.282 C 214.629 238.248 204.543 236.825 195.075 235.014 C 185.607 233.204 176.918 231.044 169.047 228.548 C 161.036 226.052 154.025 223.284 148.012 220.27 L 158.477 189.23 C 174.115 198.025 190.283 204.401 206.96 208.372 C 223.637 212.252 240.725 214.192 258.185 214.192 C 267.525 214.192 276.581 213.325 285.374 211.605 C 294.167 209.885 301.896 207.376 308.542 204.104 C 315.188 200.832 320.57 196.822 324.69 192.076 C 328.669 187.251 330.645 181.729 330.618 175.521 C 330.601 171.641 329.645 167.89 327.77 164.269 C 325.754 160.647 321.799 157.155 315.924 153.793 C 309.909 150.339 301.355 146.938 290.28 143.575 C 279.205 140.122 264.51 136.63 246.235 133.099 C 227.82 129.568 212.863 125.688 201.385 121.459 C 189.767 117.23 180.687 112.626 174.125 107.621 C 167.564 102.615 163.02 97.274 160.456 91.583 C 158.031 85.802 156.805 79.684 156.777 73.218 C 156.749 66.751 158.779 59.935 162.888 52.783 C 166.997 45.631 173.489 39.035 182.403 32.995 C 191.316 26.877 202.695 21.833 216.538 17.863 C 230.52 13.892 247.252 11.913 266.712 11.913 C 275.772 11.913 284.253 12.172 292.115 12.689 C 299.977 13.116 307.66 13.892 315.125 15.017 C 322.59 16.143 329.936 17.565 337.144 19.286 C 344.211 21.006 351.62 23.075 359.37 25.494 Z M 41.986 168.019 L 41.536 63.776 C 41.505 56.702 41.337 50.106 41.05 43.988 C 40.884 37.871 40.52 32.348 39.979 27.433 C 39.558 22.609 38.861 18.678 37.928 15.664 C 41.128 15.574 45.247 15.444 50.327 15.276 C 55.386 15.108 61.045 14.979 67.325 14.888 C 73.444 14.798 79.924 14.72 86.724 14.63 C 93.523 14.539 100.323 14.461 107.123 14.371 C 113.922 14.371 120.522 14.332 126.922 14.242 C 133.322 14.151 139.181 14.112 144.521 14.112 C 150.781 14.112 157.922 14.371 165.925 14.888 C 173.926 15.315 182.33 16.181 191.136 17.475 C 200.061 18.768 209.15 20.618 218.36 23.036 C 227.69 25.364 236.703 28.468 245.4 32.348 C 254.076 36.138 262.297 40.794 270.06 46.316 C 277.684 51.748 284.372 58.215 290.144 65.716 C 295.896 73.127 300.473 81.754 303.856 91.583 C 307.218 101.322 308.946 112.406 308.999 124.822 C 309.064 139.825 306.521 153.056 301.371 164.527 C 296.34 175.999 289.523 185.958 280.9 194.404 C 272.256 202.771 262.226 209.794 250.791 215.485 C 239.475 221.085 227.554 225.612 215.05 229.065 C 202.525 232.518 189.875 234.924 177.081 236.308 C 164.287 237.769 152.15 238.506 140.69 238.506 C 136.95 238.506 132.61 238.468 127.69 238.377 C 122.75 238.377 117.55 238.338 112.089 238.248 C 106.609 238.157 101.008 238.08 95.288 237.989 C 89.548 237.899 83.947 237.821 78.487 237.73 C 65.546 237.562 52.345 237.304 38.883 236.954 C 39.791 233.941 40.374 230.061 40.633 225.314 C 41.013 220.568 41.31 215.226 41.564 209.277 C 41.798 203.237 41.91 196.732 41.88 189.747 C 41.97 182.764 42.019 175.521 41.986 168.019 Z M 86.03 39.203 L 86.776 211.993 C 92.237 212.252 99.378 212.549 108.18 212.898 C 116.981 213.247 127.042 213.416 138.382 213.416 C 148.782 213.416 159.099 212.769 169.374 211.476 C 179.628 210.182 189.359 208.074 198.546 205.138 C 207.854 202.293 216.518 198.581 224.498 194.016 C 232.479 189.528 239.315 184.096 245.028 177.72 C 250.72 171.421 255.229 164.139 258.533 155.862 C 261.817 147.585 263.457 138.234 263.412 127.797 C 263.339 110.815 259.938 96.627 253.228 85.246 C 246.499 73.864 237.54 64.682 226.309 57.698 C 214.94 50.804 201.718 45.838 186.645 42.824 C 171.553 39.888 155.546 38.427 138.627 38.427 C 134.747 38.427 130.426 38.427 125.626 38.427 C 120.687 38.517 115.827 38.595 111.028 38.686 C 106.088 38.776 101.428 38.854 97.029 38.944 C 92.629 39.035 88.949 39.112 86.03 39.203 Z" />
                  </svg>
                  <span>Seth Donohue</span>
                </h1>
              </a>
            </div>
          </div>
          <section className="jumbotron">
            <h1 className="section-header welcome-header" >Welcome</h1>
            <br />
          </section>
          <section className="intro" >
            <p> Thanks for checking out my Portfolio. <br />
            It is developed with ReactJS, Node.js, Babel, Webpack and SaSS. <br /> <br />
            Take a look at the projects below to see a summary of their technologies and features.
              
              {/* TODO: ADD JS code as description of who I am } */}
              
            </p>

          </section>
          <h1 className="section-header portfolio-header" >Portfolio</h1>
          

          <div className="grid">

            <div className="feature-left" key="0">
              {/* TODO: MOVE <h2> <p> to project */}
              <h2><a href="http://firepolls.com" target="_blank" rel="noopener noreferrer">Firepolls <br /> www.firepolls.com</a></h2>
              <p className="summary"> A school oriented app that allows for quick,
                anonymous, opinion polling on any topic.
                Create a room, invite others too it and send out questions to get responses
                from the voters.
              </p>
              
              <Project
                images={this.state.projects[0].images}
                content={this.state.projects[0].content}
                icons={this.state.projects[0].icons}
              />

            </div>

            <div className="feature-center" key="1">
              <h2><a href="https://sethdonohue.github.io/layout-generator" target="_blank" rel="noopener noreferrer">Layout Generator <br /> sethdonohue.github.io/layout-generator</a></h2>
              <p className="summary"> A school oriented app that allows for quick,
                anonymous, opinion polling on any topic.
                Create a room, invite others too it and send out questions to get responses
                from the voters.
              </p>

              <Project
                images={this.state.projects[1].images}
                content={this.state.projects[1].content}
                icons={this.state.projects[1].icons}
              />
                                      
              {/*
                TODO: ADD MORE PROJECTS
              <Project />
              
              <img src="https://i.imgur.com/RLqWOTH.png" alt="Analytics" />
              <h2><a href="https://github.com/HashMoney/Noncents">Noncents</a></h2>
              <h4>Jan 2018 – Jan 2018</h4>

              <p className="feature-desc">A purely back-end Blockchain 
              project with persistent chain storage and peer-to-peer mining,
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
            </div>
            <div className="feature-right" key="2">
              <h2> Project Title </h2>            
              <Project />
            
              {/*
              <img src="https://i.imgur.com/DwpqLpv.png" alt="Anonymous Voting" />
              <h1><a href="https://sethdonohue.github.io/layout-generator/">Layout Generator</a></h1>
              <h4>Dec 2017 – Dec 2017</h4>

              <p className="feature-desc">Layout Generator allows a user 
              to follow a simple flow through the website, choose a layout 
              colors/background, and get all the HTML, CSS and JS code 
              required to use the template for their own website.
              </p>

              <p className="feature-desc">It was built in 4 days and was 
              designed to be extremely easy to use.</p>

              <p>Live Site: <a href="https://sethdonohue.github.io/layout-generator/">
              https://sethdonohue.github.io/layout-generator/</a></p>
              <p>GitHub Repo: <a href="https://github.com/SethDonohue/layout-generator">
              https://github.com/SethDonohue/layout-generator</a></p> */}
            </div> 
          </div>
          {/* TODO: ADD GITHUB SYMBOL} */}
          <footer className="footer">
            <p><a href="https://github.com/sethdonohue" target="_blank" rel="noopener noreferrer"> © 2018 Seth Donohue on GitHub</a></p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
// signup: userData => dispatch(signupAction(userData)),
// login: userData => dispatch(loginAction(userData)),
// });

// const mapStateToProps = state => ({
//   images: state.images, // array
//   content: state.content, // object
// });

export default Landing;
// export default connect(mapStateToProps)(Landing);
