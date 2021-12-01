const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
const { Faculty } = require('./facultyRoute')
const staffschema = require('./staffSchema')
const Staff = new mongoose.model('staff',staffschema)

const Year = new Date().getFullYear();
const first = new Date().getFullYear() - 100

router.post('/',async (res,rep)=>{


    async function  staffcode (faculty){
        let staff = await Staff.find()
    
        staff = staff.length+1

        code = ` ${faculty[0].facultyCode}/${Year}/${first}${staff} `
        return code 
    }

    let{staffName,staffPosition,staffLevel,staffEmail,staffCoursetaken,Stafffaculty} = res.body
   
    const staff = await Staff.find({staffEmail:staffEmail})
     
    if (staff.length == 0){
        let faculty = await Faculty.find({facultyName:Stafffaculty}) 
        let code = await staffcode(faculty)  
        Staff.create({staffName,staffCode:code,staffPosition,staffLevel,staffEmail,staffCoursetaken,faculty_ID:faculty[0]},(err,user)=>{
            console.log(err)
            
         })
   } else{
       console.log('exist')
   }
             
     
     
      
    })

    module.exports={router,Staff}