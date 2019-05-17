import React, { useState, useEffect } from 'react'
import { ButtonComponent, Sizes, Types } from './ButtonComponent';
export default function PostFormComponent({ addNameHandler, addSurNameHandler, addPostTextHandler, submitPostHandler, name, surName, postContent }) {

  const [disabled, toggleButton] = useState(true);

  const handleNameChange = (e) => {
    addNameHandler(e.target.value);
  }
  const handleSurNameChange = (e) => {
    addSurNameHandler(e.target.value);
  }
  const handlePostChange = (e) => {
    addPostTextHandler(e.target.value);
  }
  const handlePostSubmit = () => {

    submitPostHandler();


  }

  useEffect(() => {
    if (name !== '' && surName !== '' && postContent !== '') {
      toggleButton(false);
    }
    else {
      toggleButton(true);
    }

  }, [name, surName, postContent])
  return (
    <div className='formContainer'>
      <form >
        <div className='inputContainer'>
          <input placeholder='Name' onChange={handleNameChange} value={name} />
          <input placeholder='Surname' onChange={handleSurNameChange} value={surName} />
        </div>
        <div className='textContainer'>
          <textarea className='textArea' placeholder='text content here' onChange={handlePostChange} value={postContent}></textarea>
          <ButtonComponent onclickFunc={handlePostSubmit} Type={disabled ? Types.DISABLED : Types.BLUE} Size={Sizes.SMALL} >Submit</ButtonComponent>
        </div>

      </form>
    </div>)
}
