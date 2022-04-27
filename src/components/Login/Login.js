import React, { useState } from 'react'
import {useLocation} from 'wouter'
import Input from './Input/Input'
import Title from './Title/Title'


import './Login.css'


export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [,navigate] = useLocation()
  
  

  const handleSubmit = (e) =>{
    e.preventDefault();

    navigate('/cliente')
  }

  return (
    <div className='App-login'>
      
        <div className='login-container'>
          <Title text='¡Bienvenido!' />
          
          
          <form onSubmit={handleSubmit}>
            <Input
              attribute={{
                type: 'text',
                placeholder: 'Ingrese su usuario',
              }}
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            
            <Input
              attribute={{
                type: 'password',
                placeholder: 'Ingrese su contraseña'
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
           

            <div>
              <button className='login-button'>
                Ingresar
              </button>
            </div>
          </form>
        </div>
      
    </div>

  )
}
