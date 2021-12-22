import React, { Component } from 'react';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headingTextContent } = this.props;
    return(
      <h3 className='section-heading'>{headingTextContent}</h3>
    )
  }
}

export default Heading;