const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
const { Department } = require('./departmentRoute')
const { Faculty } = require('./facultyRoute')
const studentschema=require('./studentschema')
const Student = new mongoose.model('student',studentschema)
const Year = new Date().getFullYear();
const first = new Date().getFullYear() - 1000

async function  stdcode (faculty,department){
    let student = await Student.find().length
    code = `${department.departmentCode}/${Year}/${faculty.facultyName}${first}${student} `
    return code 
}
router.post('/newStudent',async (res,rep)=>{

    let{ studentName,studentEmail,studentFaculty,studentDept} = res.body
    const department = await Department.find({departmentName:studentDept})
    const faculty = await Faculty.find({facultyName:studentFaculty})   
        let code = await stdcode(department,faculty)
        console.log(department)
             
      Student.create({studentName,studentEmail,faculty_ID:faculty[0], department_ID:department[0],studentCode:code,studentYear:100},(err,user)=>{
         console.log(err)
         
      })
     
      
    })
    
    router.post('/directEntry',async (res,rep)=>{

        let{ studentName,studentEmail,studentFaculty,studentDept,studentYear} = res.body
        const department = await Department.find({departmentName:studentDept})
        const faculty = await Faculty.find({facultyName:studentFaculty})   
            let code = await stdcode(department,faculty)
                 
          student.create({studentName,studentEmail,faculty_ID:faculty[0], department_ID:department[0],studentYear,studentCode:code},(err,user)=>{
             console.log(err)
     
          })
        })

        router.post('/specialEntry',async (res,rep)=>{
            let{ studentName,studentEmail,studentFaculty,studentDept,studentYear} = res.body
            const department = await Department.find({departmentName:studentDept})
            const faculty = await Faculty.find({facultyName:studentFaculty})   
                let code = await stdcode(department,faculty)
                     
              Student.create({studentName,studentUnit,studentEmail,faculty_ID:faculty[0], department_ID:department[0],studentCode:code,studentYear},(err,user)=>{
                 console.log(err)
                 
              })
            
    
            })

            module.exports ={ router,Student}