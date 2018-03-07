import React, { Component, Fragment } from 'react';

import './_project.scss';

class Project extends Component {
  state = {
    imgSrc: '../../image/stars.png',
  }
  handleMouseOver() {
    const getTarget = (event) => {
      const hoveredFeatureId = event.target.attr('id');
      console.log(hoveredFeatureId);
      return hoveredFeatureId;
    };

    switch (getTarget()) {
      case 'featureOne':
        this.setState({
          imgSrc: this.props.properties.screenshots[1].src,
        });
        break;
      
      case 'featureTwo':
        this.setState({
          imgSrc: this.props.properties.screenshots[2].src,
        });
        break;
      
      case 'featureThree':
        this.setState({
          imgSrc: this.props.properties.screenshots[3].src,
        });
        break;
      
      default:
        this.setState({
          imgSrc: this.props.properties.screenshots[0].src,
        });
    }
  }

  handleMouseOut() {
    this.setState({
      imgSrc: this.props.properties.screenshot[0].src,
    });
  }

  render() {
    // const {
    //   properties,
    //   defaultFeature,
    // } = this.props;

    return (
      <li>
        <img src={this.state.imgSrc} alt={this.state.altText} height="250px" width="250px" />
      
        <ul className="feature-list">
          <li className="feature" id="featureOne" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> 
            <img className="feature-img" src="../../image/analytics.png" alt="" />
            <p> Feature One </p>
          </li>
          <li className="feature" id="featureTwo" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> 
            <img className="feature-img" src="/src/image/analytics.png" alt="" />
            <p> Feature Two </p>
          </li>
          <li className="feature" id="featureThree" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}> 
            <img className="feature-img" src="/src/image/analytics.png" alt="" />
            <p> Feature Three </p>
          </li>
        </ul>
      </li>
    );
  }
}

export default Project;

