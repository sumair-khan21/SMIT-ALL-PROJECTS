
import React, { useContext } from "react";
import { ThemeContext } from "../../../context";

const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
  <div>
    Navbar - Current Theme: {theme} 
    <button onClick={toggleTheme}> Toggle Theme</button>
  
  </div>

)
};

export default Navbar;
