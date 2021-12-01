import css from "./400level.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
function Fourhundredlevel(){
    let [studentlist,setstudentlist]=useState([])
    async function getFaculty(){ 
        await axios. get('http://localhost:2009/getInfo/std/400l').then(res=>{
        setstudentlist([...res.data])
   
         
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
                <th>student Name</th>
                <th> student Code</th>
                <th>Department</th>
                <th>Faculty</th>
            </tr>

            { studentlist.forEach((info,i)=>{
            return    <tr key={i}>
                <td > {i+1}</td>
                <td>{info.studentName }</td>
                <td>{info.studentCode}</td>
                <td>{info.studentDepartment}</td>
                <td></td>
            </tr>
            }) }
        </table>
        </div>
    )
}

export default Fourhundredlevel