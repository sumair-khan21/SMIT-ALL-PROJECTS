import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {
    const abc = useContext(DataContext)
    console.log(abc);
    
  return (
    <div>
      this is section {abc}
    </div>
  )
}

export default Section
