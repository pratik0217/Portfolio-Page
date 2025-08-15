import React from 'react'
import SoicalMediaBar from './SoicalMediaBar'

export default function Education() {
  return (
    <>
      <div className="education-container">
        <div className="educationList">
          <h1 className='education-item'>Computer Science Engineering | B. Tech</h1>
          <h2 className='education-item'>D.Y. Patil School of Engineerig & Technology, Pune</h2>
          <p className='education-item'>Year : 2021-2025</p>
        </div>

        <div className="educationList">
          <h1 className='education-item'>12<sup>th</sup> | Biology & Maths</h1>
          <h2 className='education-item'>Aabasaheb Patil Junior College of Science, Kolhapur</h2>
          <p className='education-item'>Year : 2019-2021</p>
        </div>

        <div className="educationList">
          <h1 className='education-item'>10<sup>th</sup> | Warana Vidyaniketan Nave Pargoan, Kolhapur</h1>
          <p className='education-item'>Year : 2019</p>
        </div>
      </div>

      <SoicalMediaBar />
    </>
  )
}
