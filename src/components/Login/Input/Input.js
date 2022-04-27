import React from 'react'

import './Input.css'

export default function Input({attribute, handleChange, param}) {
  return (
    <div>
        <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={param ? 'input-error' : 'regular-style'}
        />
    </div>
  )
}