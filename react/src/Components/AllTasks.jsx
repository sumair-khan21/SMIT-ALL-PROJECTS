import React, { useState } from 'react'

const AllTasks = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    let handleForm = (e)=>{
        e.preventDefault()
        // console.log({name,email,password})
        if(!name || !email || !password){
            alert("Please fill all inputs")
        }else{
            alert("Form Submitted successfully")
            console.log({name,email,password});
        }
        setName("")
        setEmail("")
        setPassword("")
    }
  return (
    <>
    {/* 🔹 Task 3 (Mini Project): Signup Form with Preview */}
    <form className='max-w-md mx-auto m-8 rounded-lg p-6 border border-gray-900 bg-gray-300 shadow-md' onSubmit={(e)=>{
            handleForm(e)
    }}>
        <h1 className='text-center font-bold text-blue-950 text-3xl font-serif'>Sign up</h1>
        <div className="mb-6">
            <label htmlFor="name" className='block text-gray-750 text-md font-serif font-semibold mb-2'>Name</label>
            <input onChange={(e)=>{
                setName(e.target.value)
            }} value={name} type="text" className='w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'placeholder='Enter your name'/>
        </div>
        <div className='mb-6'>
            <label htmlFor="Email" className='block text-gray-750 text-md font-serif font-semibold mb-2'>Email: </label>
            <input onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}  type="email" className='w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    ' placeholder='Enter your email'/>
        </div>
        <div className='mb-6'>
            <label htmlFor="Password" className='block text-gray-750 text-md font-serif font-semibold mb-2'>Password: </label>
            <input onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password} type="password" placeholder='Enter your password' className='w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'/>
        </div>
        <button className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
  '>Submit</button>
    </form>

    { (name || email || password) && (
  <div className="max-w-md mx-auto mt-6 p-4 border border-gray-700 rounded-lg bg-white shadow">
    <h2 className="text-xl font-bold mb-2">Form Preview</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Password:</strong> {"*".repeat(password.length)}</p>
  </div>
)}

    </>

  )
}

export default AllTasks