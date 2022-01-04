import React, { useState } from 'react';
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

const App = () => {
  const educationFormId = uuidv4();
  const experienceFormId = uuidv4();
  const taskID = uuidv4();

  const [educationForms, setEducationForms] = useState(
    [{
      uniname: '',
      degree: '',
      location: '',
      start: '',
      end: '',
      id: educationFormId  
    }]
  );

  const [experienceForms, setExperienceForms ] = useState([{
    title: '',
    company: '',
    location: '',
    start: '',
    end: '',
    id: experienceFormId,    
  }]);

  const [tasks, setTasks] = useState([{
    text: '',
    id: taskID,
    addTaskBtn: true,
    experienceFormId,   
  }]);

  const [personalForm, setPersonalForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    address: '',
    title: '',
    profile: '',  
  })

  const formatDate = (date) => {
    if (date === '') return;
    const dateArray = date.split('-');
    const formattedDate = [dateArray[2], dateArray[1], dateArray[0]];
    return formattedDate.join('/');
  }

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    setEducationForms(educationForms.map(form => {
      if (form.id && form.id === id) {
        form[name] = value;
      }
      return form
    }));
    setExperienceForms(experienceForms.map(form => {
      if (form.id && form.id === id) {
        form[name] = value;
      } 
      return form;
    }))
    setPersonalForm({
      ...personalForm,
      [name]: value,
    })
  }

  const handleTaskChange = (event, formID, taskID) => {
    const { value } = event.target;

    setTasks(tasks.map(task => {
      if (task.experienceFormId === formID && task.id === taskID) {
        task.text = value;
      }
      return task;
    }))
  }

  const addEducationForm = () => {

    const newForm = {
      uniname: '',
      degree: '',
      location: '',
      start: '',
      end: '',
      id: uuidv4(),    
    }

    setEducationForms(
      educationForms.concat(newForm)
    )
  }

  const addExperienceForm = () => {

    const newFormId = uuidv4();
    
    const newForm = {
      title: '',
      company: '',
      location: '',
      start: '',
      end: '',
      id: newFormId,
    }

    setEducationForms(experienceForms.concat(newForm))

    const newTask = { 
      text: '',
      id: uuidv4(),
      addTaskBtn: true,
      experienceFormId: newFormId,  
    }

    setTasks(tasks.concat(newTask))

  }

  const addTaskEntry = (event, formID) => {
    event.preventDefault();
    const newTaskEntry = {
      text: '',
      id: uuidv4(),
      addTaskBtn: false,
      experienceFormId: formID,
    }

    setTasks(tasks.concat(newTaskEntry));
  }

  const deleteTaskEntry = (event, formID, taskID) => {
    event.preventDefault();
    setTasks(tasks.filter(task => {
      if (task.experienceFormId === formID && task.id === taskID) {
        return false;
      }
      return true;
    }))
  }

  const deleteForm = (id) => {
    setEducationForms(educationForms.filter((form) => form.id !== id));
    setExperienceForms(experienceForms.filter((form) => form.id !== id));
    setTasks(tasks.filter((task) => task.experienceFormId.id !== id));
  }

  const resetForms = () => {
    const educationFormId = uuidv4();
    const experienceFormId = uuidv4();
    const taskID = uuidv4();
    setEducationForms(
      [{
        uniname: '',
        degree: '',
        location: '',
        start: '',
        end: '',
        id: educationFormId
      }],   
    );
    setExperienceForms(
      [{
        title: '',
        company: '',
        location: '',
        start: '',
        end: '',
        id: experienceFormId,
      }],
    );
    setTasks(
      [{
        text: '',
        id: taskID,
        addTaskBtn: true,
        experienceFormId,
      }],
    )
    setPersonalForm({
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
    })
  }

  const autoFillForms = () => {
    const educationFormId = uuidv4();
    const experienceFormIdOne = uuidv4();
    const experienceFormIdTwo = uuidv4();
    const experienceFormIdThree = uuidv4();
    resetForms();
    setEducationForms(
      [{
        uniname: 'Imperial College London',
        degree: 'Computer Science',
        location: 'London, UK',
        start: '2016-09-20',
        end: '2019-06-25',
        id: educationFormId
      }]
    );
    setExperienceForms(
      [
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
      ]   
    );
    setTasks(
      [
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
    );
    setPersonalForm(
      {
        first: 'John',
        last: 'Doe',
        email: 'johndoe@fakeemail.com',
        phone: '012345678912',
        address: 'Bristol, UK',
        title: 'Data Engineer',
        profile: 'Nunc quis luctus lacus, quis mattis diam. Morbi varius scelerisque lacus, quis vestibulum nunc posuere bibendum. Donec sagittis enim justo. Sed placerat in nunc ut semper. Integer feugiat at mauris id sollicitudin.',
      }
    )
  }

  const printTemplate = () => {
    window.print();
  }


  const deleteBtnClassNameEducation = 
    educationForms.length === 1 ? 
    'section__delete-education-btn btn--hidden' 
    : 'section__delete-education-btn btn'
  
    const deleteBtnClassNameExperience = 
      experienceForms.length === 1 ? 
      'section__delete-education-btn btn--hidden' 
      : 'section__delete-education-btn btn'

  return(
    <>
    <PageHeader />
    <div className="page-content">
      <div className='forms'>
        <SectionHeading sectionHeadingText='Personal' />
        <PersonalForm formState={personalForm} handleInputChange={handleInputChange}  />
        <SectionHeading sectionHeadingText='Education' />
        {educationForms.map((form) => {
          return (
            <EducationForm 
            key={form.id}
            form={form} 
            handleInputChange={handleInputChange}
            addForm={addEducationForm}
            deleteForm={deleteForm}
            deleteBtnClassName={deleteBtnClassNameEducation}
            />
          )
        })}
          <div className="section btn-container--add">
            <button onClick={addEducationForm} className="section__add-education-btn btn">Add</button>
        </div>
        <SectionHeading sectionHeadingText='Experience' />
        {experienceForms.map((form) => {
          return (
            <ExperienceForm 
              key={form.id}
              form={form}
              tasks={tasks}
              handleInputChange={handleInputChange}
              handleTaskChange={handleTaskChange}
              addTaskEntry={addTaskEntry}
              deleteTaskEntry={deleteTaskEntry}
              deleteForm={deleteForm}
              deleteBtnClassName={deleteBtnClassNameExperience}
            />
          )
        })}
        <div className="section btn-container--add">
          <button onClick={addExperienceForm} className="section__add-education-btn btn">Add</button>
        </div>
        <div className="form__control-btns">
          <button onClick={printTemplate} type='button' className='submit-btn btn'>Save / Print</button>
          <button onClick={autoFillForms} className="example-btn btn">Load Example</button>
          <button onClick={resetForms} className="reset-btn btn">Reset</button>
        </div>
      </div> 
      <div className="template">
        <TemplateHeader formState={personalForm} />
        <div className="template__sections">
          <SectionHeading sectionHeadingText='Education' />
          <hr />
          {educationForms.map((form) => 
            <EducationTemplate key={form.id} formState={form} formatDate={formatDate} />
          )}
          <SectionHeading sectionHeadingText='Experience' />
          <hr />
          <div className="template__section--experience">
            {experienceForms.map((form) => 
              <ExperienceTemplate key={form.id} formState={form} formatDate={formatDate} tasks={tasks} />
            )}
          </div>
        </div>
        <TemplateSidebar formState={personalForm} />
      </div>
    </div>
    </>
  )
}


export default App;