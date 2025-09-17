import React, { useState } from 'react'

// const TwoWayBinding = () => {
//     let [userName, setUserName] = useState("Sums")
//     let bind = {
//         value: userName,
//         onChange: (e)=> setUserName(e.target.value) 
//     }
//   return (
//     <>
//     <h1>User name is {userName}</h1>
//     <input className='bg-clip-border border-2 p-3 m-3' type="text" {...bind}/>
    
//     </>
//   )
// }

// export default TwoWayBinding





const TwoWayBinding = () => {

    const [userName, setUserName] = useState("")

    let handle = (e) =>{
        e.preventDefault()
        console.log(userName);
        setUserName('')
        
    }

  return (
    <>
    <form onSubmit={(e)=>{
        handle(e)
    }}>
        <input className='bg-clip-border border-2 p-3 m-3' type="text" placeholder='Enter your name' value={userName} onChange={(e)=>{
            setUserName(e.target.value)
            
        }}/>
        <button className='bg-amber-900 py-2 px-4 rounded-md text-white cursor-pointer'>Submit</button>
    </form>
    
    </>
  )
}

export default TwoWayBinding