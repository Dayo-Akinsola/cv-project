import React, { Component } from 'react';

class TemplateSidebar extends Component {

  render() {
    const { formState } = this.props;
    const { profile, phone, email, address } = formState;
    return (
      <div className="template__sidebar">
        <div className="template__sidebar-content">
          <div className="template__profile-container">
            <h3 className="template__profile--heading">Profile</h3>
            <span className="template__profile--text">{profile}</span>
          </div>
          <div className="template__contact-container">
            <h3 className="template__contact--heading">Contact</h3>
            <div className="template__phone-container">
              <span className="template__phone--heading"><b>Phone</b></span>
              <span className="template__phone--number">{phone}</span>
            </div>
            <div className="template__email-container">
              <span className="template__email--heading"><b>Email</b></span>
              <span className="template__email--text">{email}</span>
            </div>
            <div className="template__address-container">
              <span className="template__address--heading"><b>Address</b></span>
              <span className="template__address-text">{address}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateSidebar;