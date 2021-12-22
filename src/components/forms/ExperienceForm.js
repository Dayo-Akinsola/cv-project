import React, { Component} from 'react';
import SectionHeading from './SectionHeading';

class ExperienceForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='section section--experience'>
        <SectionHeading headingTextContent='Experience' />
        <form className='form form--experience'>
          <input type='text' placeholder='Job Title' className='form__input form__input--job-title' />
          <input type='text' placeholder='Company Name' className='form__input form__input--company-name' />
          <input type='text' placeholder='Location' className='form__input form__input--location' />
          <input type='date' placeholder='Start Date' className='form__input form__input--start-date' />
          <input type='date' placeholder='End Date' className='form__input form__input--end-date' />
          <textarea placeholder='Responsiblity / Achivement' rows='4' className='form__input form__input--responsibility' />
        </form>
      </div>
    )
  }
}

export default ExperienceForm;