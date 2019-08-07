import React from 'react';
import './contact.css'

export default function Contact() {
  return (
    <div className="contact-btn">
      <div className="contact-msg">
        <span>Contactez <br /> Nous</span>
      </div>
      <div className="contact-phone">
        <span className="contact-phone-icon"> 
          <i class="fas fa-phone-alt"></i>
        </span> 
        <span className="contact-phone-num">71 186 689</span>
      </div>
    </div>
  )
}
