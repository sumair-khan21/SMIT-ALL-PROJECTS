import React, { useState } from 'react'

const CheckboxInput = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        diet: true,
        personalTrainer: false
    })

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target
    setInputs((prev)=> ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
    }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs)
    }

    // let plain = []
    // if (inputs.diet) plain.push("Diet")
    // if(inputs.personalTrainer) plain.push("Personal Trainer")
    //     const message = `Hello ${inputs.fullname}, you have selected ${plain.length ? plain.join(" +"): "no plan"}`
    // alert(message)
  return (
   <>
   <form onSubmit={handleSubmit}>
    <label >
        full name:
        <input type="text" value={inputs.fullname} name='fullname' onChange={handleChange}/>
    </label>
    <label htmlFor="">
        diet:
        <input type="checkbox" name="diet" checked={inputs.diet} onChange={handleChange}/>
    </label>
    <label htmlFor="">
        personal trainer:
        <input type="checkbox" name='personalTrainer' checked={inputs.personalTrainer} onChange={handleChange}/>
    </label>
    <button type='submit'>Submit</button>
     </form>
   
   </>
  )
}

export default CheckboxInput
