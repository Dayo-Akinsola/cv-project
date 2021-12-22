import React, { Component} from 'react';
import SectionHeading from './SectionHeading';

class EducationForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='section section--education'>
        <SectionHeading headingTextContent='Education' />
        <form className='form form--education'>
          <input type='text' placeholder='University Name' className='form__input form__input--university-name' />
          <input type='text' placeholder='Degree' className='form__input form__input--degree' />
          <input type='text' placeholder='Department' className='form__input form__input--department' />
          <input type='date' placeholder='Start Date' className='form__input form__input--start-date' />
          <input type='date' placeholder='End Date' className='form__input form__input--end-date' />
          <input type='text' placeholder='Relevant Modules' className='form__input form__input--relevant-modules' />
        </form>
      </div>

    )
  }
}

export default EducationForm;