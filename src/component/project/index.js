import React, { Component, Fragment } from 'react';

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
    imgSrc: image1,
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
        imgSrc: image1,
        featureOneSrc: analyticsImg,
        featureTwoSrc: starsImg,
        featureThreeSrc: socketImg,
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

    return (
      <div className="project-item">
        <img className="screenshot" src={this.state.imgSrc} alt="" />
        
        <ul className="feature-list">
          <li 
            className="feature"
            id="featureOne"
            onMouseOut={defaultMouseOut}
            onMouseOver={featureOneImgSrcSet}
            onFocus={featureOneImgSrcSet}
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
            onMouseOver={featureTwoImgSrcSet}
            onMouseOut={defaultMouseOut}
            onFocus={featureTwoImgSrcSet}
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
            onMouseOver={featureThreeImgSrcSet}
            onMouseOut={defaultMouseOut}
            onFocus={featureThreeImgSrcSet}
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

