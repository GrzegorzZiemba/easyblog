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

app.post('/register', async(req, res)=> {
    const user = req.body;
    const isUser = await UserModel.find({username: user.username})
    if(isUser.length === 0){
        const user = new UserModel({
            ...user
        })
        await newUser.generateAuthTokens();
        await newUser.save()
        res.send(201).send({msg: "User Created"})
            }
    else{
        res.status(400).send({error: "Something Went WRONG"})
    }
})


app.post('/user/1234/login', async(req,res) => {
    console.log('login')
    try{
        console.log(req.body.mail)
        const user = await UserModel.loginUser(req.body.username, req.body.password)
        await user.generateAuthTokens()
        res.status(200).send({msg: "Created user"})

    }
    catch(error){
        res.status(400).send({error: "Cannot Login"})
    }
})

app.listen(5005, () => {
    console.log(`Example app listening on port 5005`)
  })