import React from 'react'

const Props = () => {
  // let x = "Ford";
  // let x = [1964, 1965, 1966];
  // let y = {name: "Ford", model: "Mustang"};


  // object pass kiya hy
  // let carInfo = {
  //   name: "Ford",
  //   year: 1999,
  //   color: "Blue",
  //   model:"Mustang"
  // }


  // arr pass kiya hy
  let carInfo = ["Ford", 1999, "Blue", "Mustang"] 
  return (
    <>
    <h1>Who lives in my Garage?</h1>
    {/* <Car brand="Audi"/>
    <Car brand="BMW"/> */}
    {/* <Car brand0="Audi" brand1="BMW" brand2={x} brand3={y} year={1969} /> */}
    <Car carinfo={carInfo}/>
    </>
  )
}

export default Props


function Car(props){
  console.log(props);
  
    return(
        <>
        {/* <h1>I am a {props.brand}</h1> */}

        {/* object access kiya */}

        {/* <p>{props.carinfo.name}</p>
        <p>{props.carinfo.model}</p>
        <p>{props.carinfo.year}</p>
        <p>{props.carinfo.color}</p> */}

        {/* arr access kiya */}
          <p>
            {props.carinfo[0]}
            {props.carinfo[1]}
            {props.carinfo[2]}
            {props.carinfo[3]}
          </p>
        </>
    )
}