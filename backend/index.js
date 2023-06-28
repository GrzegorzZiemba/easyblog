const express = require('express')
const cors = require('cors')
const db = require('./db')
const PostModel = require('./models/postModel')
const UserModel = require('./models/userModel')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req,res)=> {
    console.log('workingaś')
})


app.post('/addpost', async(req,res) => {
    const now = new Date()
    const post = req.body
 
    const newPost = new PostModel({
        title: post.title,
        date: now,
        image: "https://images-platform.99static.com//iZpcs65tZC6-Ecy_cjHxE69wmMc=/0x0:1920x1920/fit-in/590x590/99designs-contests-attachments/61/61964/attachment_61964231",
        description: post.description,
        keywords: ['Keyword'],
        code: post.code,
        

    })

    await newPost.save()
})


app.get('/posts', async(req,res)=> {
    const posts = await PostModel.find()
    console.log(posts)
    console.log("POSTS")
    res.json({posts:posts})
})


app.post('/register', async(req, res)=> {
    const user = req.body;
    const isUser = await UserModel.find({username: user.username})
    if(isUser.length === 0){
        const newUser = new UserModel({
            ...user
        })
        await newUser.generateAuthTokens();
        await newUser.save()
        res.status(201).send({msg: "User Created"})
            }
    else{
        res.status(400).send({error: "Something Went WRONG"})
    }
})


app.post('/login', async(req,res) => {
    console.log('login')
    try{
        console.log(req.body.username)
        const user = await UserModel.loginUser(req.body.username, req.body.password)
        await user.generateAuthTokens()
        res.status(200).send({msg: "Logged In"})

    }
    catch(error){
        res.status(400).send({error: "Cannot Login"})
    }
})

app.listen(5005, () => {
    console.log(`Example app listening on port 5005`)
  })