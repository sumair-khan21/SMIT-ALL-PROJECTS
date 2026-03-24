import React, { useState } from 'react'

const RadioInput = () => {
    const [inpust, setInpust] = useState({
        fullname: "",
        friuts: "mango",  
    })
    const handleChange = (e) =>{
      const {name, value} = e.target;
      setInpust((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inpust)
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <label >
        full name:
          <input type="text" name='fullname' value={inpust.fullname} onChange={handleChange}/>
    </label>
    <label>
        <br />
        <input type="radio" name='friuts' value="cherry" checked={inpust.friuts === "cherry"} onChange={handleChange}/>cherry <br />
        <input type="radio" name='friuts' value="mango" checked={inpust.friuts === "mango"} onChange={handleChange}/>mango <br />
        <input type="radio" name='friuts' value="apple" checked={inpust.friuts === "apple"} onChange={handleChange}/>apple <br />
    </label>
    <button type='submit'>submit</button>
   </form>
   </>
  )
}

export default RadioInput
