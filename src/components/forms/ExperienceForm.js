import React, { Component} from 'react';

class ExperienceForm extends Component {
 
  render() {
    const { form, tasks,  handleInputChange, handleTaskChange, deleteForm, deleteBtnClassName, addTaskEntry, deleteTaskEntry } = this.props;
    const { title, company, location, start, end } = form;

    return (
      <div className='section section--experience'>
        <form className='form form--experience'>
          <input 
            name='title' 
            type='text' 
            value={title}
            placeholder='Job Title' 
            className='form__input form__input--job-title' 
            onChange={(event) => handleInputChange(event, form.id)}
          />
          <input 
            name='company' 
            type='text' 
            value={company}
            placeholder='Company Name' 
            className='form__input form__input--company-name' 
            onChange={(event) => handleInputChange(event, form.id)}
          />
          <input 
            name='location' 
            type='text'
            value={location} 
            placeholder='Location' 
            className='form__input form__input--location'
            onChange={(event) => handleInputChange(event, form.id)} 
          />
          <input 
            name='start' 
            type='date' 
            value={start}
            placeholder='Start Date' 
            className='form__input form__input--start-date' 
            onChange={(event) => handleInputChange(event, form.id)}
          />
          <input 
            name='end' 
            type='date'
            value={end} 
            placeholder='End Date' 
            className='form__input form__input--end-date' 
            onChange={(event) => handleInputChange(event, form.id)}
          />
          <div className="responsibilities-container">
            {tasks.map((task) => {
               const button = task.addTaskBtn ? 
               <button onClick={(event) => addTaskEntry(event, form.id)} className="add-responsibility-btn task-btn">&#43;</button> :
               <button onClick={(event) => deleteTaskEntry(event, form.id, task.id)} className="delete-responsibility-btn task-btn">&#8722;</button>
               if (form.id === task.experienceFormId){
                return(
                  <div key={task.id} className="responsibility-container">
                    <textarea 
                      name='task' 
                      value={task.text} 
                      placeholder='Responsiblity / Achivement' 
                      rows='2' 
                      className='form__input form__input--responsibility' 
                      onChange={(event) => handleTaskChange(event, form.id, task.id)}
                    />
                    {button}
                  </div>
                )
               }
               return null;
              }
            )}    
          </div>
        </form>
        <div className="section btn-container--delete">
          <button onClick={() => deleteForm(form.id)} className={deleteBtnClassName}>Delete</button>
        </div>
      </div>
    )
  }
}

export default ExperienceForm;