import React from 'react'
import './Title.css'

export default function Title({text}) {
  return (
    <div className='title-container'>
        <label className='title-label'>{text}</label>
    </div>
  )
}
