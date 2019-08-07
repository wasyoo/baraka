import React from 'react'
import './titles.css';
export default function H2({title}) {
  return (
    <div className="title-content">
       <div className="title-icon" />
       <span className="the-title">
          {title}
       </span>
    </div>
  )
}
