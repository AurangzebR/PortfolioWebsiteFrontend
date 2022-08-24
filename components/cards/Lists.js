import React from 'react'

const Lists = (props) => {
  return (
    <div >
    <div className='cards-container myHover'>
        <div>
        {props.value1 && <div className='list-key'>{props.value1}</div>}
        {props.value3 && <div className='list-experience'>{props.value3}</div>}
        </div>
        
        {!props.value1 && <div className='list-value'>Phone Number</div>}
        {props.value2 &&   <div className='list-value'>{props.value2}</div>}
        
      
    
      
    </div>
    </div>
  )
}

export default Lists