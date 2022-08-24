import React from 'react'
import Lists from './Lists'
import { useState } from 'react'

const Skills = () => {
  const [list, setlist] = useState([
    {key:"Front-end",
    value:"Angular/React/NextJs",
    experience:"2 years"
  },
  {key:"Backend",
  value:"Django/Nodejs/Spring Boot",
  experience:"3 years"
},
{key:"DataBase",
value:"MySql, postgreSql, MongoDB, MariaDb, GraphQl",
experience:"2 years"
},
{key:"Micro-Services",
value:"Spring Boot micro service, gate-way, load balancer,circuit breaker,service regisrty",
experience:"2 years"
},]
  )
  const value = list.map((list)=> <Lists value1={list.key} value2={list.experience} value3={list.value} key={list.key} />)
  return (
    <>
   
      {value}
     
     
    
   
    </>
  )
}

export default Skills