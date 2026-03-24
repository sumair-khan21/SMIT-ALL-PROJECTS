import React from 'react'

const ReactLists = () => {
    const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];

  return (
    <div>
        {
            cars.map((ele,index)=>(
                <p key={index}>{ele.id}, {ele.brand}</p>

            ))
        }
    </div>
  )
}

export default ReactLists