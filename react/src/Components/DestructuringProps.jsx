import React from 'react'

const DestructuringProps = () => {
  return (
    <>
    {/* <Car brand0="Audi" brand1="BMW" year={1969} model="Mustang"/> */}
    <Car brand="Ford"/>
    </>
  )
}

export default DestructuringProps




// function Car(props){
//     let {brand0, year} = props;
//     return(
//         <>
//         <h1>i am a {brand0}, {year}</h1>
//         </>
//     )
// }




// function Car({brand0, brand1, ...rest}){
//     return(
//         <>
//         <p>My {brand0} is {rest.model} and {brand1} and year is {rest.year}</p>
//         </>
//     )
// }



// function Car({color = "blue", brand}) {
//   return (
//     <h2>My {color} {brand}!</h2>
//   );
// }