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
import Props from './Components/Props'
import ClassComp from './Components/ClassComp'
import DestructuringProps from './Components/DestructuringProps'
import Parent from './Components/PropsChildren'
import ReactEvents from './Components/ReactEvents'
import ReactConditionalRendering from './Components/ReactConditionalRendering'
import ReactLists from './Components/ReactLists'
import ReactPortal from './Components/ReactPortal'
import ReactRouter from './Components/ReactRouterNav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import User from './Pages/User'
import UserDetail from './Pages/UserDetail'
import UserPosts from './Pages/UserPosts'
import MyUseRef from './Components/MyUseRef'
import Card from './Components/Card'
import Ex from './Components/Ex'
import ApiCall from './Components/ApiCall'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { DataContext } from './context/UserContext'
import MyuseEffect from './Components/MyuseEffect'
// import ReactForm from './Components/ReactForm'
// import MultipleInputs from './Components/MultipleInputs'
// import CheckboxInput from './Components/CheckboxInput'
// import RadioInput from './Components/RadioInput'


const App = () => {
    // let userName = "Sumair Khan"
    // let age = 22

    // const [a, setA] = useState(10)

    // let abc = () =>{
    //     console.log("Button Clicked");
    //     setA(20)
    // }



    // ====================================sheryians code ============================

//     const users = [
//   {
//     "name": "Ali Khan",
//     "age": 25,
//     "city": "Karachi",
//     "profession": "Frontend Developer",
//     "profile_image": "https://randomuser.me/api/portraits/men/45.jpg"
//   },
//   {
//     "name": "Sara Ahmed",
//     "age": 28,
//     "city": "Lahore",
//     "profession": "Graphic Designer",
//     "profile_image": "https://randomuser.me/api/portraits/women/68.jpg"
//   },
//   {
//     "name": "Hassan Raza",
//     "age": 30,
//     "city": "Islamabad",
//     "profession": "Software Engineer",
//     "profile_image": "https://randomuser.me/api/portraits/men/23.jpg"
//   },
//   {
//     "name": "Zainab Fatima",
//     "age": 26,
//     "city": "Rawalpindi",
//     "profession": "Content Writer",
//     "profile_image": "https://randomuser.me/api/portraits/women/55.jpg"
//   },
//   {
//     "name": "Usman Ali",
//     "age": 32,
//     "city": "Faisalabad",
//     "profession": "Digital Marketer",
//     "profile_image": "https://randomuser.me/api/portraits/men/78.jpg"
//   }
// ]


    // const data = useContext(DataContext)
    // console.log(data);
    


  return (
    <>
    {/* ============================== All Tasks Here ==================================== */}
    {/* <AllTasks /> */}
     {/* ============================== All Tasks Here ==================================== */}

    {/* <h1>Hello {userName}</h1>
    <h1>Hello {age}</h1> */}
    {/* <h1>Value of a is {a}</h1>
    <button className='btn' onClick={abc}>Click Me</button> */}


    {/* ======================= useState ================================= */}
    {/* <MyUseState /> */}
    {/* ======================= Normal Css ============================== */}
    {/* <NormalCss /> */}
    {/* ======================= Inline Css ============================== */}
    {/* <InlineCss /> */}
    {/* ======================= Module Css ============================== */}
    {/* <ModuleCss /> */}
    {/* ======================= Tailwind Css ============================== */}
    {/* <Tailwind /> */}
    {/* ======================= Form Handling  ============================== */}
    {/* <FormHandling /> */}
    {/* ======================= One way data binding  ============================== */}
    {/* <OneWayBinding /> */}
    {/* ======================= two way data binding  ============================== */}
    {/* <TwoWayBinding /> */}
     {/* ======================= Props  ============================== */}
     {/* <Props /> */}
     {/* ======================= Class Comp  ============================== */}
     {/* <ClassComp /> */}
       {/* ======================= Props Destructure ============================== */}
       {/* <DestructuringProps /> */}
       {/* ======================= Props Child ============================== */}
       {/* <Parent /> */}
       {/* ======================= Reaact Event ============================== */}
       {/* <ReactEvents /> */}
       {/* ======================= React Conditional Rendering ====================== */}
        {/* <ReactConditionalRendering isGoal={true} /> */}
          {/* ======================= React Conditional && ====================== */}
          {/* <ReactConditionalRendering brand="Mustang" /> */}
       {/* ======================= React Lists ====================== */}
       {/* <ReactLists /> */}
       
       {/* ======================= React Form ====================== */}
       {/* <ReactForm /> */}
       
       {/* ======================= React multiple inputs ====================== */}
       {/* <MultipleInputs /> */}
       
       {/* ======================= React checkbox inputs ====================== */}
       {/* <CheckboxInput /> */}
       {/* ======================= React radio inputs ====================== */}
       {/* <RadioInput /> */}
       {/* ======================= React Portal inputs ====================== */}
       {/* <ReactPortal /> */}
       {/* ======================= basic React Routes ======================  */}
       {/* <ReactRouter />
       <Routes> 
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
       </Routes> */}
       
       {/* ======================= dynamic React Routes ======================  */}
       {/* <ReactRouter />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
        <Route path='/users/:id' element={<UserDetail />} />
       </Routes> */}

       {/* ======================= nested React Routes ======================  */}
        {/* <ReactRouter />
       <Routes>
        <Route path='/' element={<Home />} /> */}

        {/* Parent Route */}
        {/* <Route path='/users' element={<User />} /> */}

        {/* Nested Route */}
        {/* <Route path='/users/:id' element={<UserDetail />}>
          <Route path='posts' element={<UserPosts />} />
        </Route>
      </Routes> */}


      {/* ====================== All hooks  ================================================ */}
      {/* <MyUseRef /> */}
      <MyuseEffect />












      {/* ===================================== sheryians code ========================== */}
      {/* ========================== Props ============================================== */}
            {/* <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-100 min-h-screen'>
              {
                users.map((user, index)=>(
                  <Card key={index} userName={user.name} age={user.age} city={user.city} profession={user.profession} profile_image={user.profile_image}/>
                ))
              }

            </div> */}

            {/* <Ex users="Sumair"/> */}
            {/* =================================== Api Calling ====================== */}
            {/* <ApiCall /> */}

            {/* ====================== react hook useContext ===================== */}
            {/* <h1>App {data}</h1>
            <Header />
            <Section />
            <Footer /> */}


      {/* ===================================== sheryians code ========================== */} 

       
    
    
    </>
  )
}

export default App