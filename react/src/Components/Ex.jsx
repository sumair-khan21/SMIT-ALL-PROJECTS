import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <div>
      <h1>this is example {props.users}</h1>
      <Ex2 hello={props.users}/>
    </div>
  )
}

export default Ex
