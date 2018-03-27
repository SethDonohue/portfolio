import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './_project.scss';

import image1 from '../../image/project1ss1.png';
import image2 from '../../image/project1ss2.png';
import image3 from '../../image/project1ss3.png';
import image4 from '../../image/project1ss4.png';
import analyticsImg from '../../image/analytics.png';
import socketImg from '../../image/socket-io.png';
import starsImg from '../../image/stars.png';

// Declare styling and animation constants here:
const transitionTime = 1000; // miliseconds,should be double what $transition-time is in style/_varss.scss

class Project extends Component {
  state = {
    imgSrc: image1,
    featureOneSrc: analyticsImg,
    featureTwoSrc: starsImg,
    featureThreeSrc: socketImg,
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // getTarget = (event) => {
  //   const hoveredFeatureId = event.target.attr('id');
  //   console.log(hoveredFeatureId);
  //   return hoveredFeatureId;
  // }

  render() {
    // These are defined for multiple uses for OnMouseOver & onFocus for
    // Accessability as determined by a11y standards (https://a11yproject.com/)
    const mouseOutList = () => {
      this.setState({
        featureOneSrc: analyticsImg,
        featureTwoSrc: starsImg,
        featureThreeSrc: socketImg,
      });
    };

    const mouseOutUnorderedList = () => {
      this.setState({
        imgSrc: image1,
      });
    };
    const featureOneImgSrcSet = () => {
      this.setState({
        imgSrc: image2,
        featureOneSrc: socketImg,
      });
    };
    const featureTwoImgSrcSet = () => {
      this.setState({
        imgSrc: image3,
        featureTwoSrc: socketImg,
      });
    };
    const featureThreeImgSrcSet = () => {
      this.setState({
        imgSrc: image4,
        featureThreeSrc: analyticsImg,
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
          // transitionLeave={false}
        >
          <img className="screenshot" src={this.state.imgSrc} key={this.state.imgSrc} alt="" />
        </ReactCSSTransitionGroup>
        
        
        <ul className="feature-list" onMouseLeave={mouseOutUnorderedList}>
          <li 
            className="feature"
            id="featureOne"
            onMouseLeave={mouseOutList}
            onMouseOver={featureOneImgSrcSet}
            onFocus={featureOneImgSrcSet}
            onBlur={mouseOutList}
          > 
            <img className="feature-img" src={this.state.featureOneSrc} alt="" />
            <p>
              <h3> Real Time </h3>
                Enables bi-directional, event-based communication and
                allows users to create polling rooms.

              {/*
              This is a school oriented app that allows for quick,
              anonymous, opinion polling on any topic.
              You create a room, invite others too it and send out a question to get responses
              from the voters.

              It was built with the idea of giving teachers instant feedback from the students on topics that were covered in the class.
              Firepolls also allows a poll creator to save their polls for reference
              to keep track of how the opinions change.

              Main Technologies: JavaScript, Socket IO, Babel, MongoDB, Heroku & Continuous Deployment, Travis Continuous Integration, React, Redux,
              Material UI, Artillery (Load Testing), Jest (Test Driven Development),
              Webpack, Express, Node.*/}
            </p>
          </li>

          <li 
            className="feature"
            id="featureTwo"
            onMouseOver={featureTwoImgSrcSet}
            onMouseLeave={mouseOutList}
            onFocus={featureTwoImgSrcSet}
            onBlur={mouseOutList}
          > 
            <img className="feature-img" src={this.state.featureTwoSrc} alt="" />
            <p>
              <h3> Analytics </h3>
              Push data to clients and visualize results in real time.
            </p>
          </li>

          <li 
            className="feature"
            id="featureThree"
            onMouseOver={featureThreeImgSrcSet}
            onMouseLeave={mouseOutList}
            onFocus={featureThreeImgSrcSet}
            onBlur={mouseOutList}
          > 
            <img className="feature-img" src={this.state.featureThreeSrc} alt="" />            
            <p>
              <h3> Anonymous Voting </h3>
              Keep track of how many people have responded to a poll while keeping votes anonymous.
            </p>
          </li>

          <li 
            className="feature"
            id="featureFour"
            onMouseOver={featureFourImgSrcSet}
            onMouseLeave={mouseOutList}
            onFocus={featureFourImgSrcSet}
            onBlur={mouseOutList}
          > 
            <img className="feature-img" src={this.state.featureFourSrc} alt="" />            
            <p>
              <h3> Main technologies </h3>
              JavaScript, Socket IO, Babel, MongoDB, Heroku & Continuous Deployment, Travis Continuous Integration, React, Redux, Material UI, Artillery (Load Testing), Jest (Test Driven Development), Webpack, Express, Node.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project;

