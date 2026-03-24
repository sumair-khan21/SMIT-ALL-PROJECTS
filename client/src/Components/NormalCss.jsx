import React from 'react'
import '../index.css'


const NormalCss = () => {
  return (
    <>
    <div className="heroMain">
        <div className="heroText">
            <h1>Welcome to React</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div className="heroBtn">Get Start</div>
        </div>
        <div className="heroImage">
            <img src="vite.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default NormalCss