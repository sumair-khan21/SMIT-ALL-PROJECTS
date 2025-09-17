// import React from 'react'

// const FormHandling = () => {

//     let handleForm = (e)=>{
//         e.preventDefault()
//         // console.log("aaaa");
        
//     }

//   return (
//     <>
//     <form onSubmit={(e)=>{
//             handleForm(e)
//         }}>
//         <input  className='bg-clip-border border-2 p-3 m-3' type="text" placeholder='Enter your name'/>
//         <button className='bg-amber-900 py-2 px-4 rounded-md text-white cursor-pointer'>Submit</button>
//     </form>
//     </>
//   )
// }

// export default FormHandling







import React, { useState } from 'react'

const FormHandling = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let handle = (e) =>{
    e.preventDefault()
    console.log({
      name,
      email,
      password
    });
    setName("")
    setEmail("")
    setPassword("")
    

  }
  return (
    <>
    <form className='mt-20 max-w-md mx-auto p-6 rounded-b-lg bg-white shadow-lg border border-gray-300' onSubmit={(e)=>{
      handle(e)
    }}>
      <h1 className='text-3xl font-semibold text-center text-gray-7 mb-6'>Sign Form</h1>
     <div className="mb-4">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
      Name
    </label>
    <input 
      type="text" 
      id="name" 
      placeholder="Enter your name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
      Email
    </label>
    <input 
      type="email" 
      id="email" 
      placeholder="Enter your email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>

  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
      Password
    </label>
    <input 
      type="password" 
      id="password" 
      placeholder="Enter your password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>

  <button 
    type="submit" 
    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Submit Data
  </button>
    </form>
    </>
  )
}

export default FormHandling