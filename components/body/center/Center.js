import React from 'react'
import Project from '../../cards/Project'
import Skills from '../../cards/Skills'

const Center = () => {
  return (
    <>
    <h1 className='cards-heading'> Projects</h1>
    <div className='cards-container'>
        
        <Project />
        <Project />
        <Project />  
        
    </div>
    <h1 className='cards-heading'> Skills/Experience</h1>
    <div className='list-container'>
    <Skills />
    </div>
     
    
    </>
    
  )
}

export default Center