import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const user = useContext(DataContext)
    console.log(user);
    
  return (
    <div>
      this is footer {user}
    </div>
  )
}

export default Footer
