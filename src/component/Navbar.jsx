import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-menu">
                <nav>
                    <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/education'>Education</NavLink>
                    <NavLink className='link' to='/projects'>Projects</NavLink>
                    <NavLink className='link' to='/skills'>Skills</NavLink>
                    <NavLink className='link' id='github' to='https://github.com/pratik0217'>GitHub</NavLink>
                    <NavLink className='link' id='linkedin' to='https://www.linkedin.com/in/pratik-nandkumar-jadhav/'>LinkedIn</NavLink>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}
