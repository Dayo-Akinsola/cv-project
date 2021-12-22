import React, { Component} from 'react';
import SectionHeading from './SectionHeading';

class PersonalForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='section section--personal'>
        <SectionHeading headingTextContent='Personal' />
        <form className='form form--personal'>
          <div className='name-container'>
            <input type='text' placeholder='First Name' className='form__input form__input--first-name' />
            <input type='text' placeholder='Last Name' className='form__input form__input--last-name' />
          </div>
          <input type='email' placeholder='Email' className='form__input form__input--email' />
          <input type='tel' placeholder='Phone Number' className='form__input form__input--phone-number' />
          <input type='text' placeholder='Address' className='form__input form__input--address' />
          <input type='text' placeholder='Title' className='form__input form__input--title' />
          <textarea placeholder='Profile' rows='5' className='form__input form__input--profile' />
        </form>
      </div>
    )
  }
}

export default PersonalForm;