import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './_project.scss';

// TODO: REFACTOR to actually pass as props from a JSON/Data file
import image1 from '../../image/landingCroppedFull.jpg';
import image2 from '../../image/Peek Create Room2.gif';
import image3 from '../../image/VotersJoiningVoting.gif';
import image4 from '../../image/LiveAnnonymousVoting.gif';

// Declare styling and animation constants here:
// miliseconds,should be double what $transition-slow is in style/_varss.scss
const transitionTime = 1000;

class Project extends Component {
  state = {
    imgSrc: image1,
  }

  render() {
    // These are defined for multiple uses for OnMouseOver & onFocus for
    // Accessability as determined by a11y standards (https://a11yproject.com/)
    
    const featureOneImgSrcSet = () => {
      this.setState({
        imgSrc: image2,
      });
    };
    const featureTwoImgSrcSet = () => {
      this.setState({
        imgSrc: image3,
      });
    };
    const featureThreeImgSrcSet = () => {
      this.setState({
        imgSrc: image4,
      });
    };

    const featureFourImgSrcSet = () => {
      this.setState({
        imgSrc: image1,
      });
    };

    return (
      <div className="project-item" >
      
        <ReactCSSTransitionGroup
          component="div"
          className="screenshot-holder"
          transitionName="fade"
          transitionEnterTimeout={transitionTime}
          transitionLeaveTimeout={transitionTime}
        >
          <img className="screenshot" src={this.state.imgSrc} key={this.state.imgSrc} alt="" />
        </ReactCSSTransitionGroup>
        
        <ul className="feature-list" >
          <li 
            className="feature"
            id="featureOne"
            onMouseOver={featureOneImgSrcSet}
            onFocus={featureOneImgSrcSet}
          > 
            <svg className="icons icons-stopwatch" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <title>check</title>
              <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" />
            </svg>
            <section>
              <h3> Simple </h3>
              <p>
                Easy and fast to use.
                Create a room, have voters join it
                and create the first question to begin polling.
              </p>
            </section>
          </li>
          {/* TODO: Refactor into a map for each <li> */}
          <li 
            className="feature"
            id="featureTwo"
            onMouseOver={featureTwoImgSrcSet}
            onFocus={featureTwoImgSrcSet}
          > 
            <svg className="icons icons-stats-bars" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <title>stopwatch</title>
              {/* TODO: MOVE to separate file for readability} */}
              
              <path d="M24 9.057v-3.057h6v-3c0-1.657-1.343-3-3-3h-9c-1.657 0-3 1.343-3 3v3h6v3.057c-10.069 0.766-18 9.178-18 19.443 0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5c0-10.265-7.931-18.677-18-19.443zM33.107 39.107c-2.833 2.833-6.6 4.393-10.607 4.393s-7.773-1.56-10.607-4.393c-2.833-2.833-4.393-6.6-4.393-10.607s1.56-7.773 4.393-10.607c2.721-2.721 6.302-4.266 10.13-4.385l-1.016 14.72c-0.087 1.232 0.584 1.772 1.492 1.772s1.58-0.54 1.492-1.772l-1.016-14.72c3.828 0.119 7.41 1.665 10.13 4.385 2.833 2.833 4.393 6.6 4.393 10.607s-1.56 7.773-4.393 10.607z" />
            </svg>
            <section>
              <h3> Real Time Data </h3>
              <p>
                Visualize results in real time and easily know 
                where the audience stands on any topic at any time.
              </p>
            </section>
          </li>

          <li 
            className="feature"
            id="featureThree"
            onMouseOver={featureThreeImgSrcSet}
            onFocus={featureThreeImgSrcSet}
          > 
            <svg className="icons icons-users" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 48">
              <title>users</title>

              {/* TODO: MOVE to separate file for readability} */}
              
              <path d="M36 36.122v-2.474c3.305-1.862 6-6.505 6-11.148 0-7.456 0-13.5-9-13.5s-9 6.044-9 13.5c0 4.643 2.695 9.286 6 11.148v2.474c-10.177 0.832-18 5.832-18 11.878h42c0-6.045-7.823-11.046-18-11.878z" />
              <path d="M15.337 37.281c2.593-1.695 5.816-2.983 9.365-3.769-0.706-0.834-1.346-1.764-1.898-2.767-1.426-2.589-2.179-5.44-2.179-8.245 0-4.033 0-7.843 1.434-10.958 1.392-3.024 3.897-4.898 7.464-5.601-0.793-3.585-2.903-5.941-8.523-5.941-9 0-9 6.044-9 13.5 0 4.643 2.695 9.286 6 11.148v2.474c-10.177 0.832-18 5.832-18 11.878h13.078c0.681-0.605 1.434-1.18 2.259-1.719z" />
            </svg>
            <section>
              <h3> Anonymous Voting </h3>
              <p>
                Keep track of how many people have responded to a poll
                while keeping votes anonymous.
              </p>
            </section>
          </li>

          <li 
            className="feature"
            id="featureFour"
            onMouseOver={featureFourImgSrcSet}
            onFocus={featureFourImgSrcSet}
          > 
            <img className="feature-img" src={this.state.featureFourSrc} alt="" />            
            <section>
              <h3> Main technologies </h3>
              <p>
              JavaScript, Socket IO, Babel, MongoDB, Heroku & Continuous Deployment,
              Travis Continuous Integration, React, Redux, Material UI,
              Artillery (Load Testing), Jest (Test Driven Development),
              Webpack, Express, Node.
              </p>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project;

