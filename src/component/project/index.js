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
    imgSrc: image1,
    featureOneSrc: analyticsImg,
    featureTwoSrc: starsImg,
    featureThreeSrc: socketImg,
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

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
    console.log(`Project Rendered`);

    return (
      <div className="project-item" onMouseLeave={mouseOutUnorderedList}>
      
        <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={0}
          transitionLeave={false}
        >
          <img className="screenshot" src={this.state.imgSrc} key={this.state.imgSrc} alt="" />
        </ReactCSSTransitionGroup>
        
        
        <ul className="feature-list">
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
              <h3> TitleTitleTitle </h3>
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
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
              <h3> TitleTitleTitle </h3>
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
              One Lorem IpsumFeature One Lorem IpsumFeature One Lorem 
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

