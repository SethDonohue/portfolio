import React, { Component, Fragment } from 'react';

import './_under-construction.scss';

// Declare styling and animation constants here:
// miliseconds,should be double what $transition-slow is in style/_varss.scss

class UnderConstruction extends Component {
  render() {
    return (
      <section className="under-construction">
        <h3> This Page is Currently Under Construction </h3>
        <p> Please visit again soon! </p>
      </section>
    );
  }
}
export default UnderConstruction;
