import React from 'react'
import {LoginForm} from '../components/forms'

const air = 'https://www.aevumspace.com/static/Aevum_Air_Cargo.jpeg';
const logo = 'https://www.aevumspace.com/static/Aevum_Autonomous_Logo.png'

export default function Login() {
  return (
    <div className='mainLoginC8R'>
      <div>
        <img src={logo} className='logo'/>
      </div>
      <hr/>
      <div className='imageContainer'>
        <img src={air} className='image'/>
      </div>
      <hr/>
      <div className='formContainer'>
        <LoginForm/>
      </div>
    </div>
  )
}
