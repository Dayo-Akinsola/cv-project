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
          </span>
        </div>
        <div className="template__contact-container">
          <h3 className="template__contact--heading">Contact</h3>
          <div className="template__phone-container">
            <span className="template__phone--heading"><b>Phone</b></span>
            <span className="template__phone--number"></span>
          </div>
          <div className="template__email-container">
            <span className="template__email--heading"><b>Email</b></span>
            <span className="template__email--text"></span>
          </div>
          <div className="template__address-container">
            <span className="template__address--heading"><b>Address</b></span>
            <span className="template__address-text"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateSidebar;