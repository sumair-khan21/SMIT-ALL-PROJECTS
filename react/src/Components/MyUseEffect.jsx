// 🧩 Level 1 — Basic Understanding
// Goal: Samajhna ke useEffect kab run hota hai aur dependencies ka kya role hai.
// 🔹 Task 1: Basic Console Log
// Ek counter banao (count state ke sath)
// Ek useEffect likho jo har render par console.log("Rendered!") kare.
// Phir dependency array add karke dekhna ke kab log hota hai.
// 👉 Concepts:
// No dependency array
// Empty dependency array ([])
// Specific dependency ([count])



// import React, { useEffect, useState } from 'react'
// const MyuseEffect = () => {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//       console.log("Component rendered or re-rendered!");
      
//     },[count])
    
//   return (
//     <>

//     <h1>Count {count}</h1>

//     <button onClick={()=> setCount(count + 1)}>Plue</button>
//     <button onClick={()=> setCount(count - 1)}>Minus</button>
    
//     </>
//   )
// }

// export default MyuseEffect





// ==========================================================================================

// ⚙️ Level 2 — Real-Time Updates
// Goal: State aur effect ke relation ko samajhna.
// 🔹 Task 2: Window Title Updater
// Ek input lo (e.g. username).
// useEffect use karke document title ko update karo:
// document.title = "Hello, " + username
// 👉 Concepts:
// Side effect in DOM
// Cleanup not needed


// import React, { useEffect, useState } from 'react'
// const MyuseEffect = () => {
//     const [userName, setUserName] = useState('')
//     useEffect(() => {
//          if (userName) {
//     console.log(`Welcome ${userName}!`)
//   }
//       document.title = userName ? `Hello ${userName}` : "please enter your name";
    
      
//     },[userName])
    
//   return (
//    <>
//    <h1>Window title updater</h1>
//    <input type="text" placeholder='Please enter your name' onChange={(e)=> setUserName(e.target.value)} value={userName}/>
   
//    </>
//   )
// }

// export default MyuseEffect



// ========================================================================================

// 🕒 Level 3 — Cleanup Functions
// Goal: Cleanup ka importance samajhna (memory leaks avoid karna).
// 🔹 Task 3: Timer App
// Ek timer banao jo component mount hone par start ho jaye.
// Har second ek counter update kare.
// Jab component unmount ho, timer clear ho jaye.
// 👉 Concepts:
// setInterval, clearInterval
// Cleanup function in useEffect


// import React, { useEffect, useState } from 'react'

// const MyuseEffect = () => {
//     const [count, setcount] = useState(0)
//     useEffect(() => {
//       const intervel = setInterval(()=>{
//         setcount(pre => pre + 1)
//       }, 1000)
//     return () => {
//         clearInterval(intervel)
//         console.log("Timer stopped — component unmounted.")
//     }
      
//     }, [])
    
//   return (
//     <div>
//       <h1>Timer {count}</h1>
     
//     </div>
//   )
// }

// export default MyuseEffect


// =========================================================================================

// 🌐 Level 4 — API Calls
// Goal: Side effect ke zariye data fetch karna.
// 🔹 Task 4: Fetch User Data
// Ek button banao: “Fetch Users”
// Jab button click ho, ek API call karo (e.g. https://jsonplaceholder.typicode.com/users)
// Data ko state me store karo aur UI me show karo.
// 👉 Concepts:
// Async function inside useEffect
// Dependency array empty vs. with state trigger

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'



// const MyuseEffect = () => {
//     const [userData, setuserData] = useState([])
//     const [loading, setLoading] = useState(true)

//     // const fetchUsers = async () =>{
//     //     try{
//     //         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     //         setuserData(res.data)
//     //         console.log(res.data);
//     //     }catch(err){
//     //         console.log("Error fetching users:", err);
            
//     //     }

//     // }


//     useEffect(() => {
//       const fetchUsers = async () => {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//         setuserData(res.data)
//         setLoading(false)
//       }
//       fetchUsers()
    
      
//     }, [])
    
    
//   return (
//     <div>
//         <h1>Fetch User data</h1>
//         <button >click</button>
//         {
//             loading ? <p>loading...</p> : userData.map(user => (
//                <li key={user.id}>{user.name}</li>
//             ))
//         }
      
//     </div>
//   )
// }

// export default MyuseEffect


// =======================================================================================

// 🧠 Level 5 — Conditional Effects
// Goal: Jab koi specific state change ho tabhi effect chale.
// 🔹 Task 5: Search Filter
// Ek input banao (search bar).
// Jab user type kare, useEffect me API call karo (debounce k sath ya 500ms delay).
// Result ko show karo.
// 👉 Concepts:
// Conditional trigger
// Cleanup (timeout clear karna)


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const MyuseEffect = () => {
//     const [query, setQuery] = useState('')
//     const [request, setRequest] = useState([])
//     const [loading, setloading] = useState(true)

   
//   useEffect(() => {
//     if (!query) {
//       setRequest([])
//       return
//     }

//     const delay = setTimeout(async () => {
//       try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//         const filtered = res.data.filter((user) =>
//           user.name.toLowerCase().includes(query.toLowerCase())
//         )
//         setRequest(filtered)
//         setloading(false)
//         console.log("API called for:", query)
//       } catch (error) {
//         console.error("Error fetching users:", error)
//       }
//     }, 500)

//     return () => clearTimeout(delay)
//   }, [query])
    

//   return (
//     <div>
//         <h1>🔍 Search Users</h1>
//         <input type="text" placeholder='search by name...' onChange={(e)=> setQuery(e.target.value)} value={query}/>
//         <ul>
//             {
//                 loading ? <p>loading...</p> :  request.map((user) => (
//                 <li key={user.id}>{user.name}</li>
//             ))
//             }
//         </ul>
      
//     </div>
//   )
// }

// export default MyuseEffect


// ==================================================================================


// 🔁 Level 6 — Multiple Effects
// Goal: Multiple side effects manage karna.
// 🔹 Task 6: Theme + API Combo
// Ek dark/light theme toggle banao.
// Ek alag effect banao jo theme ke hisab se document.body.style.backgroundColor change kare.
// Dusra effect banao jo mount hone par API se data fetch kare.
// 👉 Concepts:
// Multiple useEffect hooks
// Independent dependencies

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyuseEffect = () => {
    const [theme, setTheme] = useState('light')
    const [users, setUsers] = useState([])

    useEffect(() => {
      if(theme == "dark"){
        document.body.style.backgroundColor = '#222'
      }else{
        document.body.style.backgroundColor = '#fff'
      }
      console.log(`Theme changed to: ${theme}`)
    }, [theme])

    useEffect(() => {
     const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        console.log('✅ Users fetched successfully')
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchUsers()
    }, [])
    
    

  return (
     <div style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      <h1>🌗 Theme + API Combo</h1>

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyuseEffect



