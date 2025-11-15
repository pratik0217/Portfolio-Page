import React from 'react'

export default function Contact() {
  return (
    <div id='contact-selection' className='container flex flex-col gap-12.5'>
      <div id='contact-heading' className='text-7xl font-bold mt-20'>
        <h1>Contact</h1>
      </div>

      <div id='contact-info' className='flex flex-col gap-1'>
        <p>Email : jadhavpratik0208@gmail.com</p>
        <p>Phone : +91 7038302915</p>
        <p><span><a href="https://www.linkedin.com/in/pratik-nandkumar-jadhav/" target='_blank'><i className="fa-brands fa-linkedin"></i> LinkedIn/pratikjadhav</a></span> <span><a href="https://github.com/pratik0217" target='_blank'><i className="fa-brands fa-github"></i> GitHub/pratik0217</a></span></p>
        <address><i class="fa-solid fa-location-dot"></i> Pimpri-Chinchwad, Pune, Maharashtra, India</address>
      </div>
    </div>
  )
}
