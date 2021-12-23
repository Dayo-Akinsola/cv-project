import React, { Component} from 'react';
import SectionHeading from './SectionHeading';

class EducationForm extends Component {

  render() {
    const { educationFormState, handleInputChange, addForm } = this.props;
    return (
      <div className='section section--education'>
        <SectionHeading headingTextContent='Education' />
        <form className='form form--education'>
          <input 
            name='uniname' 
            value={educationFormState.uniname} 
            onChange={(event) => handleInputChange(event, educationFormState.id)} 
            placeholder='University Name' 
            className='form__input form__input--university-name' 
          />
          <input 
            name='degree' 
            value={educationFormState.degree} 
            onChange={handleInputChange} 
            placeholder='Degree' 
            className='form__input form__input--degree' 
          />
          <input 
            name='location' 
            value={educationFormState.location} 
            onChange={handleInputChange} 
            placeholder='Location' 
            className='form__input form__input--location' 
          />
          <input 
            name='start' 
            value={educationFormState.start} 
            onChange={handleInputChange} 
            placeholder='Start Year' 
            className='form__input form__input--start-date' 
          />
          <input 
            name='end' 
            value={educationFormState.end} 
            onChange={handleInputChange} 
            placeholder='End Year' 
            className='form__input form__input--end-date' 
          />
        </form>
        <div className="section add-btn-container">
          <button onClick={addForm} className="section__add-education-btn btn">Add</button>
        </div>
      </div>

    )
  }
}

export default EducationForm;