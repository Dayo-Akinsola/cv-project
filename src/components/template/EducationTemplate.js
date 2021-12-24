import React, { Component } from 'react';

class EducationTemplate extends Component {

  render() {
    const { formState, formatDate } = this.props;
    const { uniname, degree, location, start, end } = formState;
    const [ startDate, endDate ] = [start, end].map((date) => formatDate(date));
    return (
      <div className="template__container template__container--education">
        <div className="template__content template__content--education">
          <div className="template__date-location template__date-location--education">
            <span className="template__location-name template_location-name--education">{location}</span>
            <div className="template__dates template__dates--education">
              <span className="template__start-date template__start-date--education">{startDate}</span>
              <span className="dash"> - </span>
              <span className="template__end-date template__end-date--education">{endDate}</span>
            </div>
          </div>
          <div className="template__university-details">
            <span className="template__university-name"><b>{uniname}</b></span>
            <span className="template__degree-name">{degree}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationTemplate;