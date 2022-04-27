import React from 'react'

export default function Label({text}) {
  return (
    <div className='label-container'>
      <label>{text}</label>
    </div>
  )
}