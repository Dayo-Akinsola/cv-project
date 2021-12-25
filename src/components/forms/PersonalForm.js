import React, { Component} from 'react';

class PersonalForm extends Component {
  
  render() {

    const { handleInputChange, formState } = this.props;
    const { first, last, email, phone, address, title, profile } = formState;
    return (
      <div className='section section--personal'>
        <form className='form form--personal'>
          <div className='name-container'>
            <input name='first' type='text' onChange={handleInputChange} value={first} placeholder='First Name' className='form__input form__input--first-name' />
            <input name='last' type='text' onChange={handleInputChange} value={last} placeholder='Last Name' className='form__input form__input--last-name' />
          </div>
          <input name='email' type='email' onChange={handleInputChange} value={email} placeholder='Email' className='form__input form__input--email' />
          <input name='phone' type='tel' onChange={handleInputChange} value={phone} placeholder='Phone Number' className='form__input form__input--phone-number' />
          <input name='address' type='text' onChange={handleInputChange} value={address} placeholder='Address' className='form__input form__input--address' />
          <input name='title' type='text' onChange={handleInputChange} value={title} placeholder='Title' className='form__input form__input--title' />
          <textarea name='profile' onChange={handleInputChange} value={profile} placeholder='Profile' rows='5' className='form__input form__input--profile' />
        </form>
      </div>
    )
  }
}

export default PersonalForm;