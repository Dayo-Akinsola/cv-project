import React, { Component } from 'react';

class ExperienceTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="template__container template__container--experience">
        <h3 className="template__heading template__heading--experience"> Experience </h3>
        <hr />
        <div className="template__content template__content--experience">
          <div className="template__date-location template__date-location--experience">
            <span className="template__location-name template_location-name--experience"></span>
            <div className="template__dates template__dates--experience">
              <span className="template__start-date template__start-date--experience"></span>
              <span className="dash"> - </span>
              <span className="template__end-date template__end-date--experience"></span>
            </div>
          </div>
          <div className="template__experience-details">
            <span className="template__position-title"><b></b></span>
            <span className="template__company-name"></span>
            <span className="template__work-description"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceTemplate;