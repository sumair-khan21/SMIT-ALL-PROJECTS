// import React, { useState } from "react";
// import { ThemeContext } from "../../../context";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const MyUseContext = () => {
// //   const theme = "blue";
// const [theme, setTheme] = useState("light")
// const toggleTheme = () =>{
//     setTheme((prev)=> (prev === "light" ? "dark" : "light"))
// }
//   return (
//     <>
//       <ThemeContext.Provider value={{theme, toggleTheme}}>
//         <div>
//           <Navbar />
//           <h1>Welcome to My App</h1>
//           <Footer />
//         </div>
//       </ThemeContext.Provider>
//     </>
//   );
// };

// export default MyUseContext;




// ==============================================================================================
// 🧩 Level 3 — Multi-Component Communication

// Goal:
// Ek component me context ka data change ho aur doosre component me automatically reflect ho jaye —
// bina props pass kiye.

// 🧠 Example: User Login System

// Scenario:

// LoginForm → user ka naam input karta hai

// Profile → wahi naam display karta hai

// dono components same context share karte hain


// import React, { useState } from 'react'
// import { UserContext } from '../../../context'
// import LoginForm from './LoginForm'
// import Profile from './Profile'

// const MyUseContext = () => {
    
//     const [user, setUser] = useState("")
//   return (
//    <>
//    <UserContext.Provider value={{user, setUser}}>
//     <div>
//         <LoginForm />
//         <Profile />
//     </div>

//    </UserContext.Provider>
   
//    </>
//   )
// }

// export default MyUseContext



// ==============================================================================================
// 🧩 Level 4 — Nested Contexts (Multiple Contexts)

// Goal:
// Ek hi app me multiple contexts handle karna (e.g. Theme + User).

// Example:

// App me dono global data hone chahiye:

// User (login info)

// Theme (dark / light)




import React, { useState } from 'react'
import { UserContext } from '../../../context'

const MyUseContext = () => {
    const [user, setuser] = useState("Sumair")
    const [theme, setTheme] = useState("dark")

    const handleToggle = () =>{
        setTheme((prev) => (prev === " dark" ? "light" : "dark"))

    }
  return (
    <div>
      <UserContext value={{user, setuser}}>
        


      </UserContext>
    </div>
  )
}

export default MyUseContext












