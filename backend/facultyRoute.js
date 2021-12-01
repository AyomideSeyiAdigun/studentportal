const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
const facultyschema=require('./facultySchema')
const Faculty = new mongoose.model('faculty',facultyschema)


router.post('/',async (res,rep)=>{

    let{ facultyName,facultyCode,facultyType} = res.body
    
    const faculty = await Faculty.find({facultyCode:facultyCode})
    if (faculty.length == 0){
        console.log(facultyType)
        Faculty.create({facultyName,facultyCode,facultyType},(err,user)=>{
            console.log(err)
            
         })
   } else{
       console.log('exist')
   }
             
     
     
      
    })

    module.exports={router,Faculty}