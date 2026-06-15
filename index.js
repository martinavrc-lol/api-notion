console.clear()
console.log(`Starting API`)

require('dotenv').config()

const{PORT , MONGO_URI} = process.env

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router')
const { middleware404, middleware500 } = require('./middlewares')

const connect = async ()=>{
    await mongoose.connect (MONGO_URI)
        .then(res => console.log(`Connected to Mongo`))
        .catch(err=>console.log(err))

}

connect()

const app = express ()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/notion' , router)

app.use(middleware404)
app.use(middleware500)


app.listen(PORT , ()=> console.log(`Connected to localhost:${PORT}`))