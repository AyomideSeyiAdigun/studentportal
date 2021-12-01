const express = require('express') 
const mongoose = require('mongoose')
const { Faculty } = require('./facultyRoute')
const app = express()

 const staffschema =mongoose.Schema({
   staffName:{
        required:true,
        type:String,
        minLength:3
    },
   staffEmail:{
        required:true,
        type:String,
        minLength:3
    },
     staffPosition:{
        required:true,
        type:String,
        minLength:3  
     },
     staffLevel:{
        required:true,
        type:String,
        minLength:1 
     },
     
     staffCoursetaken:{
        type:Array,
        minLength:3  
     },
    faculty_ID:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:Faculty,
    },
  
    staffCode:{
        required:true,
        type:String,
        minLength:1
    }

})

module.exports=staffschema