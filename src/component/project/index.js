import React, { Component, Fragment } from 'react';

import './_project.scss';

import image1 from '../../image/project1ss1.png';
import image2 from '../../image/project1ss2.png';
import image3 from '../../image/project1ss3.png';
import image4 from '../../image/project1ss4.png';
import analyticsImg from '../../image/analytics.png';

class Project extends Component {
  state = {
    imgSrc: image1,
    featureSrc: analyticsImg,
  }

  // getTarget = (event) => {
  //   const hoveredFeatureId = event.target.attr('id');
  //   console.log(hoveredFeatureId);
  //   return hoveredFeatureId;
  // }

  render() {
    // These are defined for multiple uses for OnMouseOver & onFocus for
    // Accessability as determined by a11y standards (https://a11yproject.com/)

    const defaultMouseOut = () => { this.setState({ imgSrc: image1 }); };
    const featureOneImgSrcSet = () => { this.setState({ imgSrc: image2 }); };
    const featureTwoImgSrcSet = () => { this.setState({ imgSrc: image3 }); };
    const featureThreeImgSrcSet = () => { this.setState({ imgSrc: image4 }); };

    return (
      <div className="project-item">
        <img className="screenshot" src={this.state.imgSrc} alt="{this.state.altText}" height="250px" width="250px" />
      
        <ul className="feature-list">
          <li 
            className="feature"
            id="featureOne"
            onMouseOver={featureOneImgSrcSet}
            onMouseOut={defaultMouseOut}
            onFocus={featureOneImgSrcSet}
            onBlur={defaultMouseOut}
          > 

            <img className="feature-img" src={this.state.featureSrc} alt="" />
            <p> Feature One Lorem IpsumFeature One Lorem IpsumFeature One Lorem IpsumFeature One Lorem IpsumFeature One Lorem IpsumFeature One Lorem IpsumFeature One Lorem Ipsum </p>
          </li>

          <li 
            className="feature"
            id="featureTwo"
            onMouseOver={featureTwoImgSrcSet}
            onMouseOut={defaultMouseOut}
            onFocus={featureTwoImgSrcSet}
            onBlur={defaultMouseOut}
          > 

            <img className="feature-img" src={this.state.featureSrc} alt="" />
            <p> Feature Two </p>
          </li>

          <li 
            className="feature"
            id="featureThree"
            onMouseOver={featureThreeImgSrcSet}
            onMouseOut={defaultMouseOut}
            onFocus={featureThreeImgSrcSet}
            onBlur={defaultMouseOut}
          > 

            <img className="feature-img" src={this.state.featureSrc} alt="" />
            <p> Feature Three </p>
          </li>

        </ul>
      </div>
    );
  }
}

export default Project;

