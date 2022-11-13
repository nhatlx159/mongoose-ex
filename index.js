const app = require('express')()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
//REQUIRE ROUTE
const rootRoute = require('./routes/studentRoute')

// CONNECT MONGODB
mongoose.connect(process.env.URI, (err)=>{
    if(err) throw err
    console.log("connect database successfully!!!");
})

const port = process.env.PORT || 3000
app.use(cors())
app.use(require('express').json())

//USE ROUTE
app.use('/', rootRoute)

app.listen(port, ()=> {
    console.log("server running on: http://localhost:" + port);
})

