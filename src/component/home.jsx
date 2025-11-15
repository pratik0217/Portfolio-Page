import React from 'react'

export default function home(props) {
  return (
    <div id='home-container' className='pt-14 min-h-screen'>
      <div className="container flex justify-between items-center">
        <div id="introduction-section" className="flex flex-col gap-5 font-bold uppercase w-[30%]">
            <h3 className='text-2xl'>Hi, I'm Pratik</h3>
            <h1 className='text-8xl'>I'm a React Frontend Developer</h1>
            <a href={props.CV} download className='text-center py-3 px-5 border-2 border-white rounded-full'>Download CV</a>
        </div>

        <div id="profile-image" className="">
            <img src={props.profileImage} className='h-[500px] w-full object-cover' alt="Pratik Jadhav Img" />
        </div>
      </div>
    </div>
  )
}
