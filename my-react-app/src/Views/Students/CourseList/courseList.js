import css from "./courseList.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
 
function CourseList(){
    let [courselist,setcourselist]=useState([])
    let [level,setlevel]=useState([])
    async function getCourse(){ 
        let getStudent = localStorage.getItem('studentEmail')
        await axios. post('http://localhost:2009/getInfo/student/course',{getStudent}).then(res=>{
        setcourselist([...res.data])
   
         
        })  
      }
    
       useEffect( () => {
        getCourse()  
        })

        async function handleEvent (event){
            let level = event.target.value
            let getStudent = localStorage.getItem('studentEmail')

            await axios. post('http://localhost:2009/getInfo/student/course',{getStudent,level}).then(res=>{
            setcourselist([...res.data])
       
             
            })
        }   

    return(
        <div>

            <select onChange={e=>handleEvent(e)} >
                 <option value="100l">100 level</option>
                 <option  value="200l">200 level</option>
                 <option  value="300l">300 level</option>
                 <option  value="400l">400 level</option>
                 <option  value="500l">500 level</option>
                 <option  value="Med1">Medical 1</option>
                 <option  value="Med2">Medical 2</option>
                 <option  value="Med3">Medical 3</option>
            </select>


            <br/>
        <table border="2px solid black">
            <tr>
                <th>S/N.</th>
                <th>Course Name</th>
                <th> Course Code</th>
                <th>Course Unit</th>
                <th>Department</th>
            </tr>

            { courselist.forEach((info,i)=>{
            return    <tr key={i}>
                <td > {i+1}</td>
                <td>{info.courseName }</td>
                <td>{info.courseCode}</td>
                <td>{info.courseUnit}</td>
                <td>{info.courseDepartment}</td>
                <td></td>
            </tr>
            }) }
        </table>
        </div>
    )
}

export default CourseList