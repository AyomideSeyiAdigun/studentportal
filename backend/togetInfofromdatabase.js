const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
const {Course} =require('./courses')
const {Department}=require('./departmentRoute')
const { Faculty } = require('./facultyRoute')
const { Staff } = require('./staffRoutes')
const { Student } = require('./students')
 



router.get('/',async (req,res)=>{
     let course = await Course.find()
     course =  course.map((info)=>(info.courseName))

     let department = await Department.find()
     department = department.map(info=>(info.departmentName))

     let faculty = await Faculty.find()
     faculty = faculty.map(info=>(info.facultyName))


    let student = await Student.find()
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))

     let SchoolInfo = {
         faculty,department,course,student
     }

     res.send(SchoolInfo)
      
    })

    //student List

    router.get('/std/100l',async (req,res)=>{

        let student = await Student.find({studentYear:'100'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })

    
    router.get('/std/200l',async (req,res)=>{

        let student = await Student.find({studentYear:'200'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })

    
    router.get('/std/300l',async (req,res)=>{

        let student = await Student.find({studentYear:'300'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })
    
    
    router.get('/std/400l',async (req,res)=>{

        let student = await Student.find({studentYear:'400'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })

    
    router.get('/std/500l',async (req,res)=>{

        let student = await Student.find({studentYear:'500'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })

    
    router.get('/std/medical',async (req,res)=>{

        let student = await Student.find({studentYear:'Medical'})
    student = student.map(info=>(info.studentName && info.studentCode && info.studentDepartment))
    res.send(Student)
    })

    //course List

    
    router.get('/course/100l',async (req,res)=>{

        let course = await Course.find({courseYear:'100'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/200l',async (req,res)=>{

        let course = await Course.find({courseYear:'200'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })
    router.get('/course/300l',async (req,res)=>{

        let course = await Course.find({courseYear:'300'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/400l',async (req,res)=>{

        let course = await Course.find({courseYear:'400'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/500l',async (req,res)=>{

        let course = await Course.find({courseYear:'500'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/Medic1',async (req,res)=>{

        let course = await Course.find({courseYear:'1'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/Medic2',async (req,res)=>{

        let course = await Course.find({courseYear:'2'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    router.get('/course/Medic3',async (req,res)=>{

        let course = await Course.find({courseYear:'3'})
    course = course.map(info=>(info.courseName && info.courseCode && info.courseDepartment && info.courseUnit ))
    res.send(course)
    })

    // staff List

    router.get('/staff/teaching',async (req,res)=>{

        let staff = await Staff.find({staffType:'teaching'})
    staff = staff.map(info=>(info.staffName && info.staffCode && info.staffLevel && info.staffPosition && info.staffCoursetaken ))
    res.send(staff)
    })


    router.get('/staff/non-teaching',async (req,res)=>{
 
        let staff = await Staff.find({staffType:'non-teaching'})
    staff = staff.map(info=>(info.staffName && info.staffCode && info.staffLevel && info.staffPosition ))
    res.send(staff)
    })

    module.exports = router