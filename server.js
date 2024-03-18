const express = require('express')
require('dotenv').config()
const authorRoute = require('./route/author')
const logger = require('./logger')



const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/authors",authorRoute)
app.use(logger)

app.get("/",(req,res)=>{
    res.status(200).send("you are welcome to out home page")
})

app.get("/about",(req,res)=>{
    res.status(200).send("this is our about page")
})

app.get("/contact",(req,res)=>{
    res.status(200).send('this is our contact page')

})

app.get("*",(req,res)=>{
    res.status(404).send("file not found")
})

app.listen(PORT,()=>{
    console.log(`server is up and running at http://[::1]:${PORT}`)
})