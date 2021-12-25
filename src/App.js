import React, { Component } from  'react';
import PersonalForm from './components/forms/PersonalForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import TemplateSidebar from './components/template/TemplateSidebar';
import EducationTemplate from './components/template/EducationTemplate';
import ExperienceTemplate from './components/template/ExperienceTemplate';
import TemplateHeader from './components/template/TemplateHeader';
import SectionHeading from './components/SectionHeading';
import PageHeader from './components/PageHeader';
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
      }],
      personalForm: {
        first: '',
        last: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        profile: '',
      }
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.addExperienceForm = this.addExperienceForm.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.addTaskEntry = this.addTaskEntry.bind(this);
    this.deleteTaskEntry = this.deleteTaskEntry.bind(this);
    this.resetForms = this.resetForms.bind(this);
    this.autoFillForms = this.autoFillForms.bind(this);
    this.printTemplate = this.printTemplate.bind(this);
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
      }),
      personalForm: {
        ...this.state.personalForm,
        [name]: value,
      }
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

  deleteTaskEntry(event, formID, taskID) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        if (task.experienceFormId === formID && task.id === taskID) {
          return false;
        }
        return true;
      })
    })
  }

  deleteForm(id) {
    this.setState({
      educationForms: this.state.educationForms.filter((form) => form.id !== id),
      experienceForms: this.state.experienceForms.filter((form) => form.id !== id),
      tasks: this.state.tasks.filter((task) => task.experienceFormId !== id)
    })
  }

  resetForms() {
    const educationFormId = uuidv4();
    const experienceFormId = uuidv4();
    const taskID = uuidv4();
    this.setState({
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
      }],
      personalForm: {
        first: '',
        last: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        profile: '',
        skills: [{
          text: '',
          id: uuidv4(),
        }],
      }
    })
  }

  autoFillForms() {
    const educationFormId = uuidv4();
    const experienceFormIdOne = uuidv4();
    const experienceFormIdTwo = uuidv4();
    const experienceFormIdThree = uuidv4();
    this.resetForms();
    this.setState({
      educationForms: [{
        uniname: 'Imperial College London',
        degree: 'Computer Science',
        location: 'London, UK',
        start: '2016-09-20',
        end: '2019-06-25',
        id: educationFormId
      }],
      experienceForms: [
        {
          title: 'Data Engineer',
          company: 'National Health Service',
          location: 'Bristol, UK',
          start: '2019-12-28',
          end: '',
          id: experienceFormIdOne,
        },
        {
          title: 'Data Analyst',
          company: 'Captial One',
          location: 'Nottingham, UK',
          start: '2016-05-19',
          end: '2017-05-18',
          id: experienceFormIdTwo,
        },
        {
          title: 'Software Engineer Intern',
          company: 'Netflix',
          location: 'London, UK',
          start: '2018-05-19',
          end: '2019-05-19',
          id: experienceFormIdThree,
        }
      ],
      tasks: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          id: uuidv4(),
          addTaskBtn: true,
          experienceFormId: experienceFormIdOne,
        },
        {
          text: 'Kestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent lacinia.',
          id: uuidv4(),
          addTaskBtn: true,
          experienceFormId: experienceFormIdTwo,
        },
        {
          text: 'Etiam ultricies commodo porta. Aenean sit amet ligula sem.',
          id: uuidv4(),
          addTaskBtn: false,
          experienceFormId: experienceFormIdOne,
        },       
        {
          text: 'Donec condimentum arcu felis, a fermentum odio consectetur sed. Nunc vel dignissim orci.',
          id: uuidv4(),
          addTaskBtn: true,
          experienceFormId: experienceFormIdThree,
        },              
      ],
      personalForm: {
        first: 'John',
        last: 'Doe',
        email: 'johndoe@fakeemail.com',
        phone: '012345678912',
        address: 'Bristol, UK',
        title: 'Data Engineer',
        profile: 'Nunc quis luctus lacus, quis mattis diam. Morbi varius scelerisque lacus, quis vestibulum nunc posuere bibendum. Donec sagittis enim justo. Sed placerat in nunc ut semper. Integer feugiat at mauris id sollicitudin.',
      }
    })
  }

  printTemplate() {
    window.print();
  }

  render() {
  
    const deleteBtnClassNameEducation = 
      this.state.educationForms.length === 1 ? 
      'section__delete-education-btn btn--hidden' 
      : 'section__delete-education-btn btn'
    
      const deleteBtnClassNameExperience = 
        this.state.experienceForms.length === 1 ? 
        'section__delete-education-btn btn--hidden' 
        : 'section__delete-education-btn btn'

    return(
      <>
      <PageHeader />
      <div className="page-content">
        <div className='forms'>
          <SectionHeading sectionHeadingText='Personal' />
          <PersonalForm formState={this.state.personalForm} handleInputChange={this.handleInputChange}  />
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
                deleteTaskEntry={this.deleteTaskEntry}
                deleteForm={this.deleteForm}
                deleteBtnClassName={deleteBtnClassNameExperience}
              />
            )
          })}
          <div className="section btn-container--add">
            <button onClick={this.addExperienceForm} className="section__add-education-btn btn">Add</button>
          </div>
          <div className="form__control-btns">
            <button onClick={this.printTemplate} type='button' className='submit-btn btn'>Save / Print</button>
            <button onClick={this.autoFillForms} className="example-btn btn">Load Example</button>
            <button onClick={this.resetForms} className="reset-btn btn">Reset</button>
          </div>
        </div> 
        <div className="template">
          <TemplateHeader formState={this.state.personalForm} />
          <div className="template__sections">
            <SectionHeading sectionHeadingText='Education' />
            <hr />
            {this.state.educationForms.map((form) => 
              <EducationTemplate key={form.id} formState={form} formatDate={this.formatDate} />
            )}
            <SectionHeading sectionHeadingText='Experience' />
            <hr />
            <div className="template__section--experience">
              {this.state.experienceForms.map((form) => 
                <ExperienceTemplate key={form.id} formState={form} formatDate={this.formatDate} tasks={this.state.tasks} />
              )}
            </div>
          </div>
          <TemplateSidebar formState={this.state.personalForm} />
        </div>
      </div>
      </>
    )
  }
}


export default App;