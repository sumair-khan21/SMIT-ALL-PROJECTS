// import React, { useState } from 'react'

// const OneWayBinding = () => {
//     let [userName, setUserName] = useState("Sumair");
//   return (
//     <>
//     <h1>The user name is {userName}</h1>
//     <input className='bg-clip-border border-2 p-3 m-3' type="text" placeholder='One way data binding' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
//     </>
//   )
// }

// export default OneWayBinding




// tasks

import React, { useState } from 'react'

const OneWayBinding = () => {
  const [name, setName] = useState("")
  return (
    <>
    <h1>
      this is my {name}
    </h1>
    <input type="text"  onChange={(e)=>{
      setName(e.target.value)
    }} />
    </>
  )
}

export default OneWayBinding