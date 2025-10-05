import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {id} = useParams();
    // console.log(id);
    
   return (
    <>
    <h1>user detail page: {id}</h1>

    {/* nested route */}
    <nav>
    <Link to="posts">View Posts</Link>
    </nav>
    <hr />
    {/*  Child route yahan render hoga */}
    <Outlet />
    
    </>
  )
}

export default UserDetail
