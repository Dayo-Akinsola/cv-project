import React, { Component } from 'react';

class ExperienceTemplate extends Component {
  
  render() {
    const { formState, formatDate, tasks } = this.props;
    const { title, company, location, start, end } = formState;
    let [ startDate, endDate ] = [start, end].map((date) => formatDate(date));
    if (endDate === undefined) {
      endDate = 'Present';
    }
    return (
        <div className="template__content template__content--experience">
          <div className="template__date-location template__date-location--experience">
            <span className="template__location-name template_location-name--experience">{location}</span>
            <div className="template__dates template__dates--experience">
              <span className="template__start-date template__start-date--experience">{startDate}</span>
              <span className="dash"> - </span>
              <span className="template__end-date template__end-date--experience">{endDate}</span>
            </div>
          </div>
          <div className="template__experience-details">
            <span className="template__position-title"><b>{title}</b></span>
            <span className="template__company-name">{company}</span>
            <ul className="template__work-description--container">
              {tasks.map((task) => {
                if (task.experienceFormId === formState.id) {
                  return(
                    <li key={task.id} className="template__work-description">{task.text}</li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
        </div>
    )
  }
}

export default ExperienceTemplate;