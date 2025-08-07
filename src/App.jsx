import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Education from './component/Education'
import Skills from './component/Skills'
import Projects from './component/Projects'
import ErrorPage from './component/ErrorPage'

export default function App() {
  return (
    <>
      <header>
        <Routes >
          <Route element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='https://github.com/pratik0217' />
            <Route path='https://www.linkedin.com/in/pratik-nandkumar-jadhav/' />
          </Route>

          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </header>
    </>
  )
}
