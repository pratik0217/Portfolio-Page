import React from 'react'
import SoicalMediaBar from './SoicalMediaBar'

export default function Home() {
  return (
    <>
      <div className="homePage-container">
        <div className="intro-container">
        <div className="heading-box">
          <h2 className='heading'>I'm Pratik Jadhav</h2>
          <h1 className='colorMix-heading'>React.js Frontend Web Developer....!</h1>
        </div>
        <div className="info-box">
          <p>Results oriented software developer in React.js Frontend Web technologies.</p>
          <p>My goal is to create software keeping user in mind with intuitive user interface. I also understand the importance of creating highly readable and easily maintainable source code. I am constantly striving to learn new technologies and look to ways to better myself in this rapidly changing industry.</p>
        </div>
      </div>
      </div>
      {/* <SoicalMediaBar /> */}
    </>
  )
}
