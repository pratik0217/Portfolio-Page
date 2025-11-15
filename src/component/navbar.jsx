import React from 'react'
import { NavLink } from 'react-router'

export default function navbar() {
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark")
    }
  return (
      <div id="navbar-container" className="container flex flex-row-reverse justify-between items-center py-6">
            <div id="social-links" className="flex justify-around text-2xl gap-5">
                <div id="linkedin">
                    <a href="https://www.linkedin.com/in/pratik-nandkumar-jadhav/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div id="github">
                    <a href="https://github.com/pratik0217" target='_blank'><i className="fa-brands fa-github"></i></a>
                </div>
                <div id="dark-mode" onClick={toggleDarkMode}>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
            </div>

            <div id="navbar-menu">
                <nav className='flex text-lg font-semibold gap-6'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About me</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </div>
  )
}
