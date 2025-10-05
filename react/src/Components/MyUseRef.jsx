import React from 'react'
import { useRef, forwardRef } from "react";



// Child component
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Parent component
const MyUseRef = () => {

 const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
     <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>

  )
}

export default MyUseRef
