const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
const departmentschema=require('./departmentSchema')
const Department = new mongoose.model('department',departmentschema)
const {Faculty} = require('./facultyRoute.js')

router.post('/',async (res,rep)=>{

    let{ departmentName,departmentCode,departmentFaculty} = res.body
    let FID
    const faculty = await Faculty.find()
   
    
    
    
    const department = await Department.find({departmentCode:departmentCode})
    if (department.length == 0){

        for (let i = 0; i < faculty.length; i++) {
            const element = faculty[i];
            if (element.facultyName == departmentFaculty){  
                FID = element
            }
            
        }

        Department.create({departmentName,departmentCode,Faculty_ID:FID},(err,user)=>{
            console.log(err)
            
         })
   } else{
       console.log('exist')
   }
             
     
     
      
    })

    module.exports={ router,Department}