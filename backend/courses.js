const express = require('express') 
const router =express.Router()
const mongoose = require('mongoose')
 const {courseschema} =require('./courseSchemas')

 const {Department}=require('./departmentRoute')
 
 

 const Course = new mongoose.model('course',courseschema)
router.post('/100',async (req,res)=>{
    let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = req.body
    const course = await Course.find({courseCode:courseCode})
    console.log(req.body)
     if (course.length == 0){
        console.log(courseDept)
         let deptID = await Department.find({departmentName:courseDept})
      Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:100},(err,user)=>{
         console.log(err)
         
      })
    } else{
        console.log('exist')
    }
      
    })
    
    router.post('/200',async (res,rep)=>{
        let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
        const course = await Course.find({courseCode:courseCode})
         if (course.length == 0){
          let deptID = await Department.find({departmentName:courseDept})
          Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:200},(err,user)=>{
             console.log(err)
             
          })
        } else{
            console.log('exist')
        }

        })

        router.post('/300',async (res,rep)=>{
            let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
            const course = await Course.find({courseCode:courseCode})
             if (course.length == 0){
              
              let deptID = await Department.find({departmentName:courseDept})
              Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:300},(err,user)=>{
                 console.log(err)
                 
              })
            } else{
                console.log('exist')
            }
    
            })
            router.post('/400',async (res,rep)=>{
                let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
                const course = await Course.find({courseCode:courseCode})
                 if (course.length == 0){
                       let deptID = await Department.find({departmentName:courseDept})
                  Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:400},(err,user)=>{
                     console.log(err)
                     
                  })
                } else{
                    console.log('exist')
                }
        
                })

                router.post('/500',async (res,rep)=>{
                    let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
                    const course = await Course.find({courseCode:courseCode})
                     if (course.length == 0){
                           let deptID = await Department.find({departmentName:courseDept})
                      Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:500},(err,user)=>{
                         console.log(err)
                         
                      })
                    } else{
                        console.log('exist')
                    }
            
                    })

                router.post('/MedicalOne',async (res,rep)=>{
                    let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
                        const course = await Course.find({courseCode:courseCode})
                         if (course.length == 0){
                               let deptID = await Department.find({departmentName:courseDept})
                          Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:1},(err,user)=>{
                             console.log(err)
                             
                          })
                        } else{
                            console.log('exist')
                        }
                
                        })

                        router.post('/MedicalTwo',async (res,rep)=>{
                            let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
                            const course = await Course.find({courseCode:courseCode})
                             if (course.length == 0){
                                   let deptID = await Department.find({departmentName:courseDept})
                              Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:2},(err,user)=>{
                                 console.log(err)
                                 
                              })
                            } else{
                                console.log('exist')
                            }
                    
                            })

                            router.post('/MedicalThree',async (res,rep)=>{
                                let{ courseName,courseUnit,courseFaculty,courseDept,courseCode} = res.body
                                const course = await Course.find({courseCode:courseCode})
                                 if (course.length == 0){
                                       let deptID = await Department.find({departmentName:courseDept})
                                  Course.create({courseName,courseUnit,department_ID:deptID[0],courseDept,courseCode,courseYear:3},(err,user)=>{
                                     console.log(err)
                                     
                                  })
                                } else{
                                    console.log('exist')
                                }
                        
                                })

module.exports = {router,Course}