import React, { Component } from 'react';

class EducationTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="template__container template__container--education">
        <h3 className="template__heading template__heading--education"> Education </h3>
        <div className="template__content template__content--education">
          <div className="template__date-location template__date-location--education">
            <span className="template__location-name template_location-name--education">Manchester, UK</span>
            <div className="template__dates template__dates--education">
              <span className="template__start-date template__start-date--education">2017</span>
              <span className="dash"> - </span>
              <span className="template__end-date template__end-date--education">2019</span>
            </div>
          </div>
          <div className="template__university-details">
            <span className="template__university-name"><b>Manchester University</b></span>
            <span className="template__degree-name">Mathematics</span>
            <div className="template__relavant-modules--container">
              <span className="template__relavant-modules--heading"><b>Relevant Modules</b></span>
              <div className="template__relavant-modules--content">
                <span className="template__relavant-module">Operational Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationTemplate;