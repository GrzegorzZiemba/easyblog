const express = require('express')
const cors = require('cors')
const db = require('./db')
const PostModel = require('./models/postModel')


const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req,res)=> {
    console.log('working')
})


app.post('/add_post', async(req,res) => {
    const now = new Date()
    const post = req.body
    console.log(post)
    const newPost = new PostModel({
        text: body.text,
        date: now,
        image: "https://images-platform.99static.com//iZpcs65tZC6-Ecy_cjHxE69wmMc=/0x0:1920x1920/fit-in/590x590/99designs-contests-attachments/61/61964/attachment_61964231",
        description: body.description,
        keywords: body.keywords
        

    })
})


app.listen(5005, () => {
    console.log(`Example app listening on port 5005`)
  })