import React from 'react'
import { useParams } from 'react-router-dom'

const UserPosts = () => {
    const {id} = useParams()
  return (
    <div>
        <h2>Post for user id: {id}</h2>
        <ul>
            <li>Post 1 by user {id}</li>
            <li>Post 2 by user {id}</li>
            <li>Post 3 by user {id}</li>
        </ul>
      
    </div>
  )
}

export default UserPosts
