import React, { Component } from 'react';

class SectionHeading extends Component {

  render() {
    const { sectionHeadingText } = this.props;
    return(
      <h3 className='section-heading'>{sectionHeadingText}</h3>
    )
  }
}

export default SectionHeading;