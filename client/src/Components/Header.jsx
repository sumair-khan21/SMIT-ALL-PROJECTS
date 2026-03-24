import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const xyz = useContext(DataContext)
    console.log(xyz);
    
  return (
    <div>
      this is header {xyz}
    </div>
  )
}

export default Header
