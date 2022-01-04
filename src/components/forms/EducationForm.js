import React from 'react';

const EducationForm = ({ form, handleInputChange, deleteForm, deleteBtnClassName }) => {
  return (
    <div className='section section--education'>
      <form className='form form--education'>
        <input 
          name='uniname' 
          value={form.uniname} 
          onChange={(event) => handleInputChange(event, form.id)} 
          placeholder='University Name' 
          className='form__input form__input--university-name' 
        />
        <input 
          name='degree' 
          value={form.degree} 
          onChange={(event) => handleInputChange(event, form.id)} 
          placeholder='Degree' 
          className='form__input form__input--degree' 
        />
        <input 
          name='location' 
          value={form.location} 
          onChange={(event) => handleInputChange(event, form.id)} 
          placeholder='Location' 
          className='form__input form__input--location' 
        />
        <input 
          name='start' 
          type='date'
          value={form.start} 
          onChange={(event) => handleInputChange(event, form.id)} 
          placeholder='Start Year' 
          className='form__input form__input--start-date' 
        />
        <input 
          name='end'
          type='date' 
          value={form.end} 
          onChange={(event) => handleInputChange(event, form.id)} 
          placeholder='End Year' 
          className='form__input form__input--end-date' 
        />
      </form>
      <div className="section btn-container--delete">
        <button onClick={() => deleteForm(form.id)} className={deleteBtnClassName}>Delete</button>
      </div>
    </div>

  )
} 


export default EducationForm;