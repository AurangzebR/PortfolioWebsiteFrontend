import React from 'react'
import Lists from '../../cards/Lists'
import { useState } from 'react'

const Right = () => {
  const [list, setlist] = useState(["Azure","Micro Services","Spring Boot"])
  const value = list.map((list)=> <Lists value1={list} key={list} />)
  return (
    <div>
      <h1 className='cards-heading'>Skills List</h1>
      {value}
    </div>
  )
}

export default Right