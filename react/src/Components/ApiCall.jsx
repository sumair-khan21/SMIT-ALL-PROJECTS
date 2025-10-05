import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const ApiCall = () => {
    const [data, setData] = useState([])
    const fetchData = async () =>{
        try{
            const res = await axios.get('https://picsum.photos/v2/list')
            // console.log(res.data);
            setData(res.data)
            // console.log(data);
            
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
      fetchData()
    
      
    }, [])
    
    
  return (
    <>

    {/* <button onClick={fetchData}>Get Data</button> */}
   <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-100 min-h-screen'>
     {
        data.map((item, index)=>(
            // <div key={index} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
            //     <p>{item.author}</p>
            //     <img src={item.download_url} alt="" height={200} width={300}/>
            // </div>
            <Card key={index} author={item.author} download_url={item.download_url} id={item.id} url={item.url} height={item.height} width={item.width}/>
        ))
    }
   </div>
    
    </>
  )
}

export default ApiCall
