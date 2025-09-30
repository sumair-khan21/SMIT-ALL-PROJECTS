// import React from 'react'
// import { useState } from 'react'

// const MultipleInputs = () => {
//     const [inputs, setinputs] = useState({})
//     const handleChange = (e) =>{
//         const name = e.target.name;
//         const value = e.target.value;
//         setinputs(values => ({...values, [name]: value}))
//     }
//   return (
//   <>

//   <form >
//     <label htmlFor="">First Name
//         <input type="text" name='firstName' value={inputs.firstName || ""} onChange={handleChange}/>
//     </label>
//     <label htmlFor="">Last Name
//         <input type="text" name='lastName' value={inputs.lastName || ""} onChange={handleChange}/>
//     </label>

//     <p>Current Value: {inputs.firstName} {inputs.lastName}</p>
//   </form>
  
//   </>
//   )
// }

// export default MultipleInputs