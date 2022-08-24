import React from 'react'

const Project = () => {
  return (
    <div className='project-card-container'>
  
        <div className='project-card-body'>

        <div className='circle-logo'>A</div>
        <div className='project-card-title'>
             <h1>Facebook Demo App</h1>
        </div>
        </div>

        <div >

            <div className='project-card-empty-image'></div>

        <div className='project-card-body-discription'>
            <h1>Web Application</h1>
            <p>NextJs, SpringBoot and Tailwind CSS</p>
        </div>

        <div className='project-card-body-button'>
            <button>Learn More ...</button>
        </div>

        </div>
        
    </div>
  )
}

export default Project