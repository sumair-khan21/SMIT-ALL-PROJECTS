import React from 'react'

const InlineCss = () => {
    let Style = {
        color: 'red',
        textAlign: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif'
    }
    let paraStyle = {
        fontSize: '19px',
        width: '900px',
        margin: 'auto'
    }
  return (
    <>
    <h1 style={Style}>Hello React</h1>
    <p style={paraStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere consectetur perspiciatis labore est aspernatur deserunt laboriosam cum incidunt amet natus assumenda provident velit numquam, suscipit sequi asperiores impedit fuga facilis!</p>
    <button style={{color: "white", backgroundColor: "blue", marginTop: "10px", border:"none", padding: "15px", cursor: "pointer", marginLeft: "220px", fontSize:"20px"}}>Let Start</button>
    </>
  )
}

export default InlineCss