import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './_project.scss';

// Declare styling and animation constants here:
// miliseconds,should be double what $transition-slow is in style/_varss.scss
const transitionTime = 1000;

class Project extends Component {
  state = {
    imgSrc: this.props.images[0],
  }
  // These are defined for multiple uses for OnMouseOver & onFocus for
  // Accessability as determined by a11y standards (https://a11yproject.com/)
  featureOneImgSrcSet = () => {
    this.setState({
      imgSrc: this.props.images[1],
    });
  };
  featureTwoImgSrcSet = () => {
    this.setState({
      imgSrc: this.props.images[2],
    });
  };
  featureThreeImgSrcSet = () => {
    this.setState({
      imgSrc: this.props.images[3],
    });
  };

  featureFourImgSrcSet = () => {
    this.setState({
      imgSrc: this.props.images[0],
    });
  };


  render() {
    const {
      icons,
      images,
      content,
    } = this.props;
 
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
            className="feature-item"
            id="featureOne"
            onMouseOver={this.featureOneImgSrcSet}
            onFocus={this.featureOneImgSrcSet}
          > 

            <svg className={`icons icon-${icons[1]}`} ><use xlinkHref={`#icon-${icons[1]}`} viewBox="0 0 32 32" /></svg>

            <section>
              <h3> {content.featureOneTitle} </h3>
              <p> {content.featureOneContent} </p>
            </section>
          </li>
          {/* TODO: Refactor into a map for each <li> */}
          <li 
            className="feature-item"
            id="featureTwo"
            onMouseOver={this.featureTwoImgSrcSet}
            onFocus={this.featureTwoImgSrcSet}
          > 

            {/* TODO: MOVE to separate file for readability} */}
            <svg className={`icons icon-${icons[2]}`} ><use xlinkHref={`#icon-${icons[2]}`} viewBox="0 0 32 32" /></svg>

            <section>
              <h3> {content.featureTwoTitle} </h3>
              <p> {content.featureTwoContent} </p>
            </section>
          </li>

          <li 
            className="feature-item"
            id="featureThree"
            onMouseOver={this.featureThreeImgSrcSet}
            onFocus={this.featureThreeImgSrcSet}
          > 
            <svg className={`icons icon-${icons[3]}`} ><use xlinkHref={`#icon-${icons[3]}`} viewBox="0 0 32 32" /></svg>

            <section>
              <h3> {content.featureThreeTitle} </h3>
              <p> {content.featureThreeContent} </p>
            </section>
          </li>

          <li 
            className="feature-item"
            id="featureFour"
            onMouseOver={this.featureFourImgSrcSet}
            onFocus={this.featureFourImgSrcSet}
          > 
            <section>
              <h3> {content.featureFourTitle} </h3>
              <p> {content.featureFourContent} </p>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   images: state.images, // array
//   content: state.content, // object
// });
export default Project;
// export default connect(mapStateToProps)(Project);
