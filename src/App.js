import React, { Component } from  'react';
import PersonalForm from './components/forms/PersonalForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import TemplateSidebar from './components/template/TemplateSidebar';
import EducationTemplate from './components/template/EducationTemplate';
import ExperienceTemplate from './components/template/ExperienceTemplate';
import TemplateHeader from './components/template/TemplateHeader';
import SectionHeading from './components/SectionHeading';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor() {
    super();

    const educationFormId = uuidv4();
    const experienceFormId = uuidv4();
    const taskID = uuidv4();
    this.state = {
      educationForms: [{
        uniname: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        id: educationFormId
      }],
      experienceForms: [{
        title: '',
        company: '',
        location: '',
        start: '',
        end: '',
        id: experienceFormId,
      }],
      tasks: [{
        text: '',
        id: taskID,
        addTaskBtn: true,
        experienceFormId,
      }]
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.addExperienceForm = this.addExperienceForm.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.addTaskEntry = this.addTaskEntry.bind(this);
  }

  formatDate(date) {
    if (date === '') return;
    const dateArray = date.split('-');
    const formattedDate = [dateArray[2], dateArray[1], dateArray[0]];
    return formattedDate.join('/');
  }

  handleInputChange(event, id) {
    const { name, value } = event.target;
    
    this.setState({
      educationForms: this.state.educationForms.map((form) => {
        if (form.id && form.id === id) {
          form[name] = value;
        }
        return form;
      }),
      experienceForms: this.state.experienceForms.map((form) => {
        if (form.id && form.id === id) {
          form[name] = value;
        }
        return form;
      })
    });
  }

  handleTaskChange(event, formID, taskID) {
    const { value } = event.target;


    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.experienceFormId === formID && task.id === taskID) {
          task.text = value
        }
        return task;
      })
    })
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

  addExperienceForm() {

    const newFormId = uuidv4();
    
    const newForm = {
      title: '',
      company: '',
      location: '',
      start: '',
      end: '',
      id: newFormId,
    }

    const newTask = { 
      text: '',
      id: uuidv4(),
      addTaskBtn: true,
      experienceFormId: newFormId,  
    }


    this.setState({
      experienceForms: this.state.experienceForms.concat(newForm),
      tasks: this.state.tasks.concat(newTask),
    })
  }

  addTaskEntry(event, formID) {
    event.preventDefault();
    const newTaskEntry = {
      text: '',
      id: uuidv4(),
      addTaskBtn: false,
      experienceFormId: formID,
    }

    this.setState({
      tasks: this.state.tasks.concat(newTaskEntry)
    })
  }

  deleteForm(id) {
    this.setState({
      educationForms: this.state.educationForms.filter((form) => form.id !== id),
      experienceForms: this.state.experienceForms.filter((form) => form.id !== id)
    })
  }

  render() {
  
    const deleteBtnClassNameEducation = 
      this.state.experienceForms.length === 1 ? 
      'section__delete-education-btn btn--hidden' 
      : 'section__delete-education-btn btn'
    
      const deleteBtnClassNameExperience = 
        this.state.experienceForms.length === 1 ? 
        'section__delete-education-btn btn--hidden' 
        : 'section__delete-education-btn btn'

    return(
      <div className="page-content">
        <div className='forms'>
          <SectionHeading sectionHeadingText='Personal' />
          <PersonalForm  />
          <SectionHeading sectionHeadingText='Education' />
          {this.state.educationForms.map((form) => {
            return (
              <EducationForm 
              key={form.id}
              form={form} 
              handleInputChange={this.handleInputChange}
              addForm={this.addEducationForm}
              deleteForm={this.deleteForm}
              deleteBtnClassName={deleteBtnClassNameEducation}
              />
            )
          })}
           <div className="section btn-container--add">
              <button onClick={this.addEducationForm} className="section__add-education-btn btn">Add</button>
          </div>
          <SectionHeading sectionHeadingText='Experience' />
          {this.state.experienceForms.map((form) => {
            return (
              <ExperienceForm 
                key={form.id}
                form={form}
                tasks={this.state.tasks}
                handleInputChange={this.handleInputChange}
                handleTaskChange={this.handleTaskChange}
                addTaskEntry={this.addTaskEntry}
                deleteForm={this.deleteForm}
                deleteBtnClassName={deleteBtnClassNameExperience}
              />
            )
          })}
          <div className="section btn-container--add">
            <button onClick={this.addExperienceForm} className="section__add-education-btn btn">Add</button>
          </div>
          <button type='button' className='submit-btn'>Submit</button>
        </div> 
        <div className="template">
          <TemplateHeader />
          <div className="template__sections">
            <SectionHeading sectionHeadingText='Education' />
            <hr />
            {this.state.educationForms.map((form) => 
              <EducationTemplate key={form.id} formState={form} formatDate={this.formatDate} />
            )}
            <SectionHeading sectionHeadingText='Experience' />
            <hr />
            {this.state.experienceForms.map((form) => 
              <ExperienceTemplate key={form.id} formState={form} formatDate={this.formatDate} tasks={this.state.tasks} />
            )}
          </div>
          <TemplateSidebar />
        </div>
      </div>
    )
  }
}


export default App;