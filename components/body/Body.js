import React from 'react'
import Center from './center/Center'
import Left from './left/Left'
import Right from './right/Right'

const Body = () => {
  return (
    <div className='body-container'>
        <div className='side-container'>
        <Left />
        </div>
        <div className='center-container'>
        <Center />
        </div>
        <div className='side-container'>
        <Right />
        </div>




    </div>
  )
}

export default Body