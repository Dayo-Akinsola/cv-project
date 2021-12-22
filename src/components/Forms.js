import React, { Component} from 'react';
import PersonalForm from './forms/PersonalForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';

class Forms extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='forms'>
        <PersonalForm />
        <EducationForm />
        <ExperienceForm />
        <button type='button' className='submit-btn'>Submit</button>
      </div> 
    )
  }
}

export default Forms;

