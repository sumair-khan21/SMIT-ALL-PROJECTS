import React, { useContext, useState } from 'react'
import { UserContext } from '../../../context'

const LoginForm = () => {
    const {setUser} = useContext(UserContext)
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(name)
    }
    return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default LoginForm
