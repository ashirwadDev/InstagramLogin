const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ashirwad:ashirwad1632011@cluster0l.njaipxx.mongodb.net/")

const userModel = new mongoose.Schema({
    username:String,
    password:String
})

module.exports=mongoose.model("User", userModel)
