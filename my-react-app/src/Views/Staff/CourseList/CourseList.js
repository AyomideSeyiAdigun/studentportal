import css from "./CourseList.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
function CourseList(){
    let [courselist,setcourselist]=useState([])
    async function getCourse(){ 
        let getStaff = localStorage.getItem('staffEmail')
        await axios. post('http://localhost:2009/getInfo/staff/course',{getStaff}).then(res=>{
        setcourselist([...res.data])
   
         
        })
      }
    
       useEffect( () => {
        getCourse()  
        })

    return(
        <div>
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