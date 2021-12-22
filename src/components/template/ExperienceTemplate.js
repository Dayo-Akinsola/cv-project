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
            <span className="template__location-name template_location-name--experience">London, UK</span>
            <div className="template__dates template__dates--experience">
              <span className="template__start-date template__start-date--experience">2017</span>
              <span className="dash"> - </span>
              <span className="template__end-date template__end-date--experience">2019</span>
            </div>
          </div>
          <div className="template__experience-details">
            <span className="template__position-title"><b>Software Engineer</b></span>
            <span className="template__company-name">Facebook</span>
            <span className="template__work-description">Lead the team that designed facebook's friend finder algorithm.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceTemplate;