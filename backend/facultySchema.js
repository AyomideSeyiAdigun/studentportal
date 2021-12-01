const express = require('express') 
const mongoose = require('mongoose')
const app = express()

  const facultyschema =mongoose.Schema({
    facultyName:{
        required:true,
        type:String,
        minLength:3
    },
    facultyCode:{
        required:true,
        type:String,
        minLength:3
    },
    facultyType:{
        required:true,
        type:String,
        minLength:3
    }
    
})





module.exports=facultyschema