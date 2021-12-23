import React, { Component } from  'react';
import PersonalForm from './components/forms/PersonalForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import TemplateSidebar from './components/template/TemplateSidebar';
import EducationTemplate from './components/template/EducationTemplate';
import ExperienceTemplate from './components/template/ExperienceTemplate';
import TemplateHeader from './components/template/TemplateHeader';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor() {
    super();

    const id = uuidv4();
    this.state = {
      educationForm: {
        uniname: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        id   
      },
      educationForms: [{
        uniname: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        id 
      }],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
  }

  handleInputChange(event, id) {
    const { name, value } = event.target;
    
    this.setState({
      educationForm: this.state.educationForms.filter((form) => {
        if (form.id === id) {
          
          return true;
        }
        return false;

      })
    });
  }

  addEducationForm() {

    const newForm = {
      uniname: '',
      degree: '',
      location: '',
      start: '',
      end: '',
      id: uuidv4(),    
    }

    this.setState({
      educationForms: this.state.educationForms.concat(newForm),
    })
  }

  render() {
    return(
      <div className="page-content">
        <div className='forms'>
          <PersonalForm  />
          {this.state.educationForms.map((form) => {
            return (
              <EducationForm 
              key={form.id}
              educationFormState={this.state.educationForm} 
              handleInputChange={this.handleInputChange}
              addForm={this.addEducationForm}
              />
            )
          })}
          <ExperienceForm />
          <button type='button' className='submit-btn'>Submit</button>
        </div> 
        <div className="template">
          <TemplateHeader />
          <div className="template__sections">
            <EducationTemplate educationFormState={this.state.educationForm} />
            <ExperienceTemplate />
          </div>
          <TemplateSidebar />
        </div>
      </div>
    )
  }
}


export default App;