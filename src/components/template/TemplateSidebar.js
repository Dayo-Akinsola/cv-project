import React, { Component } from 'react';

class TemplateSidebar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="template__sidebar">
        <div className="template__profile-container">
          <h3 className="template__profile--heading">Profile</h3>
          <span className="template__profile--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia congue tortor, eget pharetra nisl consequat sit amet. Cras sed elementum lacus. Suspendisse cursus elit in consequat venenatis. Mauris commodo enim quis mauris pretium, sit amet rhoncus nibh sodales. 
          </span>
        </div>
        <div className="template__contact-container">
          <h3 className="template__contact--heading">Contact</h3>
          <div className="template__phone-container">
            <span className="template__phone--heading"><b>Phone</b></span>
            <span className="template__phone--number">0123456789</span>
          </div>
          <div className="template__email-container">
            <span className="template__email--heading"><b>Email</b></span>
            <span className="template__email--text">random@address.com</span>
          </div>
          <div className="template__address-container">
            <span className="template__address--heading"><b>Address</b></span>
            <span className="template__address-text">Fake Address, London, UK</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateSidebar;