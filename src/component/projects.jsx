import React from 'react'

export default function Projects(props) {
  return (
    <div id='personalProjects' className='container flex flex-col gap-12.5'>
      <div id='personalProjects-heading' className='text-7xl font-bold mt-20'>
        <h1>Projects</h1>
      </div>

      <div id="project-info" className='flex flex-col gap-3'>
        <div id="project-heading-info" className='flex justify-between items-center'>
          <div id="heading-info-text" className='flex flex-col gap-3'>
            <h1 className='text-4xl font-medium'>UsabilityHub</h1>
            <p className='text-2xl font-semibold'>Technical Stack : React.js, HTML, CSS, JavaScript, Vite, Git, GitHub, Vercel.</p>
          </div>

          <div id="project-material" className='flex gap-2.5 text-2xl'>
            <a href="https://github.com/pratik0217/UsabilityHub-Clone" target='_blank'><i className="fa-brands fa-github"></i></a>
            <span className='font-bold'>|</span>
            <a href="https://usability-hub-clone-seven-beta.vercel.app/" target='_blank'><i className="fa-solid fa-display"></i></a>
          </div>
        </div>

        <div id="project-description">
          <ul className='list-disc w-[90%] m-auto'>
            <li>Implemented modular and reusable React components for better scalability and maintainability.</li>
            <li>Used React Router for seamless client-side navigation and improved user experience. </li>
            <li>Integrated props and component communication to manage dynamic content efficiently. </li>
            <li>Deployed the project using Vercel for continuous integration and easy live hosting. </li>
          </ul>
        </div>

        <div id="project-image" className='mt-10'>
          <img src={props.HomePageUsabilityHub} alt="HomePageUsabilityHub" />
        </div>
      </div>

      <div id="project-info" className='flex flex-col gap-3'>
        <div id="project-heading-info" className='flex justify-between items-center'>
          <div id="heading-info-text" className='flex flex-col gap-3'>
            <h1 className='text-4xl font-medium'>ToDesktop</h1>
            <p className='text-2xl font-semibold'>Technical Stack :  React.js, Tailwind CSS, JavaScript (ES6+), Vite, GitHub, Vercel.</p>
          </div>

          <div id="project-material" className='flex gap-2.5 text-2xl'>
            <a href="https://github.com/pratik0217/toDesktop-web" target='_blank'><i className="fa-brands fa-github"></i></a>
            <span className='font-bold'>|</span>
            <a href="https://to-desktop-web.vercel.app/" target='_blank'><i className="fa-solid fa-display"></i></a>
          </div>
        </div>

        <div id="project-description">
          <ul className='list-disc w-[90%] m-auto'>
            <li>Developed a responsive single-page web app using React.js and Vite for fast performance and modern UI. </li>
            <li>Designed an elegant user interface with Tailwind CSS for clean layout and adaptive components. </li>
            <li>Deployed the application using Vercel, ensuring fast global delivery and automatic CI/CD updates. </li>
            <li>Followed modern development practices including clean code structure, version control (Git/GitHub), and modular
              component design. </li>
            <li>Focused on UI/UX design for seamless user experience across desktop and mobile devices. </li>
            <li><mark>In active development adding new modules and UI improvements. </mark></li>
          </ul>
        </div>

        <div id="project-image" className='mt-10'>
          <img src={props.HomePageToDesktop} alt="HomePageToDesktop" />
        </div>
      </div>

      <div id="project-info" className='flex flex-col gap-3'>
        <div id="project-heading-info" className='flex justify-between items-center'>
          <div id="heading-info-text" className='flex flex-col gap-3'>
            <h1 className='text-4xl font-medium'>Altus Solution</h1>
            <p className='text-2xl font-semibold'>Technical Stack : HTML, CSS, Bootstrap, JavaScript, Git/GitHub</p>
          </div>

          <div id="project-material" className='flex gap-2.5 text-2xl'>
            <a href="https://github.com/pratik0217/Altus-Company-Clone-website" target='_blank'><i className="fa-brands fa-github"></i></a>
            <span className='font-bold'>|</span>
            <a href="https://pratik0217.github.io/Altus-Company-Clone-website/" target='_blank'><i className="fa-solid fa-display"></i></a>
          </div>
        </div>

        <div id="project-description">
          <ul className='list-disc w-[90%] m-auto'>
            <li>This project is clone of Altus Solution Company website. </li>
            <li>Smooth navigation with sticky navbar. Hero section with modern design and call-to-action buttons. Interactive sections like
              services, testimonials, and contact. Clean UI/UX inspired by professional corporate websites. </li>
            <li>Practice and showcase frontend development skills. Improve UI/UX understanding and responsive design implementation.
              Clone a modern business website with pixel-perfect design. Building responsive web pages using Flexbox and media queries.  </li>
            <li>Hosting live projects on GitHub Pages. </li>
          </ul>
        </div>

        <div id="project-image" className='mt-10'>
          <img src={props.HomePageAltus} alt="HomePageAltus" />
        </div>
      </div>
    </div>
  )
}
