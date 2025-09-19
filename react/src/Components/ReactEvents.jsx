// import React from 'react'


// ReactEvents call
// const ReactEvents = () => {
//     let shoot = ()=>{
//         alert("Goal")
//     }
//   return (
//     <>

//     <button onClick={shoot}>Click Me</button>
//     </>
//   )
// }

// export default ReactEvents


// ReactEvents pass argument
// import React from 'react'
// const ReactEvents = () => {
//     let shoot = (a)=>{
//         alert(a)
//     }
//   return (
//     <div>
//             <button onClick={()=>shoot("Goal")}>Shoot Me</button>
//     </div>
//   )
// }

// export default ReactEvents



// event handler bhi send krna arg k sath

import React from 'react'
const ReactEvents = () => {
    let shoot = (a,b)=>{
        alert(b.type)
    }
  return (
    <div>
            <button onClick={(event)=>shoot("Goal", event)}>Shoot Me</button>
    </div>
  )
}

export default ReactEvents