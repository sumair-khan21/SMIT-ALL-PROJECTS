// import React, { useState } from 'react'
import './index.css'
import MyUseState from './Components/MyUseState'
import NormalCss from './Components/NormalCss'
import InlineCss from './Components/InlineCss'
import ModuleCss from './Components/ModuleCss'
import Tailwind from './Components/Tailwind'
import FormHandling from './Components/FormHandling'
import OneWayBinding from './Components/OneWayBinding'
import TwoWayBinding from './Components/TwoWayBinding'
import AllTasks from './Components/AllTasks'


const App = () => {
    // let userName = "Sumair Khan"
    // let age = 22

    // const [a, setA] = useState(10)

    // let abc = () =>{
    //     console.log("Button Clicked");
    //     setA(20)
    // }

  return (
    <>
    {/* ============================== All Tasks Here ==================================== */}
    <AllTasks />
    
    {/* <h1>Hello {userName}</h1>
    <h1>Hello {age}</h1> */}
    {/* <h1>Value of a is {a}</h1>
    <button className='btn' onClick={abc}>Click Me</button> */}


    {/* ========================================= useState ========================================== */}
    {/* <MyUseState /> */}
    {/* ========================================= Normal Css ======================================= */}
    {/* <NormalCss /> */}
    {/* ========================================= Inline Css ======================================= */}
    {/* <InlineCss /> */}
    {/* ========================================= Module Css ======================================= */}
    {/* <ModuleCss /> */}
    {/* ========================================= Tailwind Css ======================================= */}
    {/* <Tailwind /> */}
    {/* ========================================= Form Handling  ======================================= */}
    {/* <FormHandling /> */}
    {/* ========================================= One way data binding  ======================================= */}
    {/* <OneWayBinding /> */}
        {/* ========================================= two way data binding  ======================================= */}
        {/* <TwoWayBinding /> */}


    
    
    
    </>
  )
}

export default App