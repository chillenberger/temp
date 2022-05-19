import React, {
  useState,
  useEffect,
} from 'react'

import {SubmitButton} from './buttons'
import {useNavigate} from 'react-router-dom'


function LoginForm() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    valid: ''
  });
  const navigate = useNavigate();


  const usernameChange = (val) => {
    setLoginData({
      ...loginData,
      username: val.target.value,
    })
  }

  const passwordChange = (val) => {
    setLoginData({
      ...loginData,
      password: val.target.value,
    })
  }

  useEffect(() => {
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      if (loginData.username == 'username' && loginData.password == 'password' ){
        navigate('/dashboard')
      }
    })
  })

  return (
    <>
      <form id="loginFormContainer">
        <input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          onChange={(val) => usernameChange(val)}/>
        <br/>
        <input
          type='text'
          id='password'
          name='passord'
          placeholder='Password'
          onChange={(val) => passwordChange(val)}/>
        <div style={{marginTop: '1rem'}}>
          <SubmitButton
            title="Submit"/>
        </div>
      </form>
    </>
  )
}

export {LoginForm}
