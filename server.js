const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const PORT = 3001

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/touch")
const db = mongoose.connection
db.once('open', ()=>{
    console.log("database is connected")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})

const users = mongoose.model("data", userSchema)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/post', async(req, res)=>{
    const {name, email, subject, message} = req.body
    const user = new users({
        name,
        email,
        subject,
        message
    })
    await user.save()
    console.log(user)
    res.send("form session successfully")
})

app.listen(PORT, ()=>{
    console.log(`server is running port: ${PORT}`)
})