import React from 'react'
import { Link } from 'react-router'


export default function SoicalMediaBar() {
  return (
    <div className='social-media'>
      <div className="socialMedia-link">
        <div className="text-media">
          <p>Follow Me</p>
        </div>
        <div className="socialMedia-icon">
          <ul>
            <li><Link className='social-link' to='https://github.com/pratik0217'>GitHub</Link></li>
            <li><Link className='social-link' to='https://www.linkedin.com/in/pratik-nandkumar-jadhav/'>LinkedIn</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
