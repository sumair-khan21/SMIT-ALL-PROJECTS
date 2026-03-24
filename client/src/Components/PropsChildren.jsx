import React from 'react'

const Parent = () => {
  return (
    <>

    <Son>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis vitae quos recusandae laboriosam eveniet a maiores error! Itaque doloribus expedita temporibus porro aliquam culpa ipsum nulla, ea sint! Numquam.</p>
    </Son>

    <Daughtar>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam, iure fuga eveniet repellendus consequuntur exercitationem ea officia libero. Officiis eos veniam facilis impedit ullam excepturi voluptatibus quo aut velit!</p>
    </Daughtar>
    
    </>
  )
}

export default Parent

function Son(props){
    return(
        <>
        <div style={{background: 'lightgreen'}}>
            <h1>This is the Son</h1>
            <p>{props.children}</p>
        </div>
        </>
    )
}

function Daughtar(props){
    return(
        <>
        <div style={{background: 'lightblue'}}>
            <h1>This is the Daughtar</h1>
            <p>{props.children}</p>
        </div>
        </>
    )
}