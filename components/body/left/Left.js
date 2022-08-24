import React from 'react'
import Lists from '../../cards/Lists'
import { useState } from 'react'

const Left = () => {
  const [list, setlist] = useState([
    {key:"phone",
    value:"289-980-3172"},
    {key:"E-mail",
    value:"azriasat@Gmail.com"},
    {key:"Address",
    value:"North York, ON, CAN"},
  ])
  
  const value = list.map((list)=> <Lists value1={list.key} value3={list.value} key={list.key} />)
  return (
    <div className='left-container'>
      <h1 className='cards-heading'>Contact me</h1>
     {value}
    </div>
  )
}

export default Left