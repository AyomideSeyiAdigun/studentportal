import css from "./300level.css";
import axios from 'axios'
import { useEffect, useState, } from "react";

function Threehundredlevel(){
    let [courselist,setcourselist]=useState([])
    async function getFaculty(){ 
        await axios. get('http://localhost:2009/getInfo/course/100l').then(res=>{
        setcourselist([...res.data])
   
         
        })
      }
    
       useEffect( () => {
        getFaculty()  
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
                <th>Lecturer</th>
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

export default Threehundredlevel