import React from 'react'

const ReactLists = () => {
    let arr = ['Ford', 'BMW', 'Audi']
  return (
    <div>
        {
            arr.map((ele)=>(
                <p>{ele}</p>

            ))
        }
    </div>
  )
}

export default ReactLists