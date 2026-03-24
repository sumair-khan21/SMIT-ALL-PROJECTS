import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const ReactRouterNav = () => {
//     const navLinkStyles = ({ isActive }) => ({
//     color: isActive ? "red" : "black",
//     textDecoration: isActive ? "none" : "underline",
//     fontWeight: isActive ? "bold" : "normal",
//     padding: "5px 10px"
//   });

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "red" : "black",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: "none",
  marginRight: "10px",
});

  return (
    <>
    {/* <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> 
    </nav> */}
    {/* basic route */}
    {/* <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
      <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
    </nav> */}

    {/* dynamic routes */}
    {/* <nav >
      <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
      <NavLink to="/users" style={navLinkStyles}>Users</NavLink>
    </nav> */}

     {/* nested routes */}
    <nav >
      <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
      <NavLink to="/users" style={navLinkStyles}>Users</NavLink>
    </nav>
    </>
  )
}

export default ReactRouterNav
