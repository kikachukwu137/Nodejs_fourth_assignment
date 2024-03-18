const express = require('express')
const authorRoute = express.Router()

const authors = [{
    "name" : "FRANK LAMAWAL",
    "year" : 78,
    "id" : 1

    },
    {
        "name": "THELMA NONSO",
        "Year": 59,
        "id": 2
    },
    {
        "name": "GOODNEWS JUB",
        "year": 89,
        "id": 3
    }
]

//CRUD
//read
authorRoute.get("/",(req,res)=>{
    res.json(authors)
})

authorRoute.get("/:id",(req,res)=>{
    const id = req.params.id
    const author = authors.find(author => author.id == id)
    if(!author){
        res.status(404)
        res.send(`author with id ${id} doest not exist`)
        return
    }
    res.send(author)

})
//creat

authorRoute.post("/",(req,res)=>{
    const newAuthor = req.body
    authors.push(newAuthor)

    res.json(newAuthor)

})


//update 
authorRoute.put("/:id",(req,res)=>{
    const id = req.params.id
    const author = req.body
    const index = authors.findIndex(author =>author.id == id)
    if(index == -1){
        res.status(404).send("author records doest not exist")
        return
    }
    authors[index] = author
    res.json(author)
    

})

//delete

authorRoute.delete("/:id",(req,res)=>{
    const id = req.params.id
    const index = authors.findIndex(author => author.id == id)
    if(index == -1){
        res.status(404).send("author records not found thus we cant delete unfound records")
        return
    }
    authors.splice(index,1)
    res.json(authors)
})
module.exports = authorRoute

