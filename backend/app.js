const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')
app.use(express.json());


app.listen(port, ()=>{
    console.log("Server running on 3000 port");
})


app.get('/', (req, res)=>{
    // res.send('Hello world')
    res.send(data)
})


app.post('/data', (req, res)=>{
        const {make,model,year,color,mileage_km,city,price_usd,owner_name,is_available} = req.body
        res.send("Car name is " + make + " " + model + " of year " + year, "color", color);
})

// body
// {
//  "make": "Honda",
//   "model": 2022,
//   "year": 2025
// }