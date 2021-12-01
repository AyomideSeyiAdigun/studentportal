const express = require('express') 
const mongoose = require('mongoose')
const { Department } = require('./departmentRoute')
const { Faculty } = require('./facultyRoute')
const app = express()

 const studentschema =mongoose.Schema({
   studentName:{
        required:true,
        type:String,
        minLength:3
    },
   studentEmail:{
        required:true,
        type:String,
        minLength:3
    },
    department_ID:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:Department,
    },
    faculty_ID:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:Faculty,
    },
   studentYear:{
        required:true,
        type:String,
        minLength:1
    },
    studentCode:{
        required:true,
        type:String,
        minLength:1
    }

})

module.exports=studentschema