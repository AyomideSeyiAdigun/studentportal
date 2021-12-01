const express = require('express')  
const app = express()
const cors = require('cors')
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)
require('dotenv').config()
const mongoose = require('mongoose')
// const uri = process.env.URI
const uri2 = process.env.URI2
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const io = socketio(server,{
    cors:{
        origin:'*',
        method:['POST','GET']
    }
})
app.use(cors( ))
app.use(express.urlencoded({extended:true}))
mongoose.connect(uri2,{useNewUrlParser:true,useUnifiedTopology:true}).catch(err => {
    console.log(Error, err.message);
  })
  .then(() => console.log("DB Connected!"))

 
 var {router}= require('./courses.js')
 var courseReg =router

 var {router} = require('./students.js')
 var studentReg = router

 var { router} = require('./facultyRoute.js')
 var facultyReg = router

 var { router} = require('./departmentRoute.js')
 var departmentReg = router

 var router = require('./togetInfofromdatabase.js')
 var getInfo=router

 var{ router }= require('./staffRoutes.js')
 var staffReg=router
 



 

  



app.use('/courseReg',courseReg)
app.use('/studentReg',studentReg)
app.use('/facultyReg',facultyReg)
app.use('/departmentReg',departmentReg)
app.use('/getInfo',getInfo)
app.use('/staffReg',staffReg)

io.on('connection', (socket) =>{    }),
server.listen(2009,()=>{
    console.log('app connected successfully')
})
 
