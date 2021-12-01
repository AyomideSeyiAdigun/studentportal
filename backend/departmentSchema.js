const express = require('express') 
const mongoose = require('mongoose')
const { Faculty } = require('./facultyRoute')
const app = express()

  const departmentschema =mongoose.Schema({
    departmentName:{
        required:true,
        type:String,
        minLength:3
    },
    departmentCode:{
        required:true,
        type:String,
        minLength:3
    },
    Faculty_ID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Faculty,
    },
    
})





module.exports=departmentschema