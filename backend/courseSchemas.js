const express = require('express') 
const mongoose = require('mongoose')
const { Department } = require('./departmentRoute')
const app = express()

  const courseschema =mongoose.Schema({
    courseName:{
        required:true,
        type:String,
        minLength:3
    },
    courseCode:{
        required:true,
        type:String,
        minLength:3
    },
    courseDept:{
        required:true,
        type:String,
        minLength:3
    },
    department_ID:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:Department,
    },
    courseUnit:{
        required:true,
        type:String,
        minLength:1
    },
    courseYear:{
        required:true,
        type:String,
        minLength:1
    }

})





module.exports={courseschema}