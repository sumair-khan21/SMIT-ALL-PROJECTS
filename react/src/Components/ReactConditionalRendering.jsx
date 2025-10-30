// import React from 'react'

// const ReactConditionalRendering = ({isGoal}) => {
// //   let isGoal = props.isGoal
//   if(isGoal){
//     return <MadeGoal />
//   }
//   return <MissedGoal />
// }

// export default ReactConditionalRendering



// function MissedGoal(){
//     return <h1>Goal Missed</h1>
// }


// function MadeGoal(){
//     return <h1>Goal</h1>
// }





// using && operator

// import React from 'react'

// const ReactConditionalRendering = (props) => {
//   return (
//     <>
//     {props.brand && <h1>my car is a {props.brand} </h1>} 

//     </>
//   )
// }

// export default ReactConditionalRendering



//ternary operator

import React from 'react'

const ReactConditionalRendering = ({isGoal}) => {
return(
    <>
    {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
)
}

export default ReactConditionalRendering



function MissedGoal(){
    return <h1>Goal Missed</h1>
}


function MadeGoal(){
    return <h1>Goal</h1>
}

