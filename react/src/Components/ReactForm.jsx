// import React from 'react'
// import { useState } from 'react'

// const ReactForm = () => {
//     const [data, setData] = useState("")
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(data);
//         setData(e.target.value)
//     }
//   return (
//     <>
//     <form >
//         {/* <input type="text" placeholder='Enter name' name={data} onChange={handleSubmit}  onChange={(e)=> setData(e.target.value)}/> */}
//         <p>Current value: {data}</p>
//     </form>
    
//     </>
//   )
// }

// export default ReactForm










// ================================== React Submit Forms ==================================


// import React from 'react'
// import { useState } from 'react'

// const ReactForm = () => {
//     const [name, setName] = useState("")
//     const handleChange = (e) =>{
//         setName(e.target.value)
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         alert(`Your name is ${name}`)
//         console.log(name);
        
//         setName("")
//     }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <input type="text" name={name} onChange={handleChange} />
//         <button type='submit'>Submit</button>
//     </form>
//     </>
//   )
// }

// export default ReactForm





// ================================== React textarea ==================================


// import React from 'react'
// import { useState } from 'react'

// const ReactForm = () => {
//     const [name, setName] = useState("")
//     const handleChange = (e) =>{
//         setName(e.target.value)
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         alert(`Your name is ${name}`)
//         console.log(name);
        
//         setName("")
//     }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <textarea value={name} onChange={handleChange} placeholder='Write here'></textarea>
//         <button type='submit'>Submit</button>
//     </form>
    
//     </>
//   )
// }

// export default ReactForm



// ================================== React select option ==================================

// import React from 'react'
// import { useState } from 'react'

// const ReactForm = () => {
//     const [name, setName] = useState("BMW")
//     const handleChange = (e) =>{
//         setName(e.target.value)
//         console.log(e.target.value);
        
//     }
//     // const handleSubmit = (e) =>{
//     //     e.preventDefault();
//     //     alert(`Your name is ${name}`)
//     //     console.log(name);
        
//     //     setName("")
//     // }
//   return (
//     <>
//     {/* <form onSubmit={handleSubmit}> */}
//        <select value={name} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="BMW">BMW</option>
//         <option value="AUdi">AUdi</option>
//        </select>
//     {/* </form> */}
    
//     </>
//   )
// }

// export default ReactForm







