import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const users = [
        {
        id: 1,
        name: "John",
        age: 90,
        
    },
    {
        id: 2,
        name: "Doe",
        age: 80,
    },
    {
        id: 3,
        name: "Smith",
        age: 70,
    }

]
  return (
    <>
    <h1>All Users</h1>
    <ul>
        {
        users.map((user)=>(
            <li key={user.id} style={
                {marginBottom: "10px"}
            }>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
        ))
    }   
    </ul>
    
    </>
  )
}

export default User
