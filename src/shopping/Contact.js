import React from 'react'
import './Contact.css'
import 'animate.css';
function Contact() {
  return (
    <div className='social'>
      <div className='insta'>
        <p>I</p>
        <span className='i'>InstaGram</span>
      </div>
      <div className='face'>
        <p>F</p>
        <span className='f'>FaceBook</span>
      </div>
      <div className='twit'>
        <p>T</p>
        <span className='t'>Twitter</span>
      </div>
      <div className='you'>
        <p>Y</p>
        <span className='y'>YouTube</span>
      </div>
      <div className='git'>
        <p>G</p>
        <span className='g'>GitHub</span>
      </div>
    </div>
  )
}

export default Contact
