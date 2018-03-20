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

class Project extends Component {
  state = {
    screenshotOneClass: 'screenshot',
    screenshotTwoClass: 'screenshot fadeOut',
    featureOneSrc: analyticsImg,
    featureTwoSrc: starsImg,
    featureThreeSrc: socketImg,
  }

  // getTarget = (event) => {
  //   const hoveredFeatureId = event.target.attr('id');
  //   console.log(hoveredFeatureId);
  //   return hoveredFeatureId;
  // }

  render() {
    // These are defined for multiple uses for OnMouseOver & onFocus for
    // Accessability as determined by a11y standards (https://a11yproject.com/)
    const defaultMouseOut = () => {
      this.setState({
        screenshotTwoClass: 'screenshot fadeOut',
        screenshotThreeClass: 'screenshot fadeOut',
        screenshotFourClass: 'screenshot fadeOut',
        featureOneSrc: analyticsImg,
        featureTwoSrc: starsImg,
        featureThreeSrc: socketImg,
      });
    };
    const featureTwoImgFadeIn = () => {
      this.setState({
        screenshotTwoClass: 'screenshot fadeIn',
        screenshotThreeClass: 'screenshot fadeOut',
        screenshotFourClass: 'screenshot fadeOut',
        featureOneSrc: socketImg,
      });
    };
    const featureThreeImgFadeIn = () => {
      this.setState({
        screenshotTwoClass: 'screenshot fadeOut',
        screenshotThreeClass: 'screenshot fadeIn',
        screenshotFourClass: 'screenshot fadeOut',
        featureTwoSrc: socketImg,
      });
    };
    const featureFourImgFadeIn = () => {
      this.setState({
        screenshotOneClass: 'screenshot',
        screenshotTwoClass: 'screenshot fadeOut',
        screenshotThreeClass: 'screenshot fadeOut',
        screenshotFourClass: 'screenshot fadeIn',
        featureThreeSrc: analyticsImg,
      });
    };

    return (
      <div className="project-item">
        <div className="screenshot-holder">
          <img key={0} className={this.state.screenshotOneClass} src={image1} alt="" />
          <img key={1} className={this.state.screenshotTwoClass} src={image2} alt="" />
          <img key={2} className={this.state.screenshotThreeClass} src={image3} alt="" />
          <img key={3} className={this.state.screenshotFourClass} src={image4} alt="" />
        </div>
        
        <ul className="feature-list">
          <li 
            className="feature"
            id="featureOne"
            onMouseOut={defaultMouseOut}
            onMouseOver={featureTwoImgFadeIn}
            onFocus={featureTwoImgFadeIn}
            onBlur={defaultMouseOut}
          > 
            <img className="feature-img" src={this.state.featureOneSrc} alt="" />
            <p>
              <h3> TitleTitleTitle </h3>
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
            </p>
          </li>

          <li 
            className="feature"
            id="featureTwo"
            onMouseOver={featureThreeImgFadeIn}
            onMouseOut={defaultMouseOut}
            onFocus={featureThreeImgFadeIn}
            onBlur={defaultMouseOut}
          > 
            <img className="feature-img" src={this.state.featureTwoSrc} alt="" />
            <p>
              <h3> TitleTitleTitle </h3>
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
            </p>
          </li>

          <li 
            className="feature"
            id="featureThree"
            onMouseOver={featureFourImgFadeIn}
            onMouseOut={defaultMouseOut}
            onFocus={featureFourImgFadeIn}
            onBlur={defaultMouseOut}
          > 
            <img className="feature-img" src={this.state.featureThreeSrc} alt="" />            
            <p>
              <h3> TitleTitleTitle </h3>
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project;

