import React from 'react';
import './button.css'

export default function Button({value, type}) {
  return (
    <div className={`button-submit ${type === "validate" && "validate"}`}>
      {value}
    </div>
  )
}
