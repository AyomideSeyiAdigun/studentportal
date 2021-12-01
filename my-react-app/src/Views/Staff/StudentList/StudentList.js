import css from "./StudentList.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
function StudentList(){
    let [studentlist,setstudentlist]=useState([])
    let [courselist,setcourselist]=useState([])
    async function getFaculty(){
        
        let getStaff = localStorage.getItem('staffEmail')
        await axios. post('http://localhost:2009/getInfo/staff/course',{getStaff}).then(res=>{
            setcourselist([...res.data])
         })
       
      }
    
       useEffect( () => {
        getFaculty()  
        })

        async function getStudent(event){
            let selected = event.target.value
            await axios. post('http://localhost:2009/getInfo/staff/student',{selected}).then(res=>{
                setstudentlist([...res.data])
                })

        }

    return(
        <div>

        <h3> select course</h3>
        <select onChange={e=>getStudent(e)}>
            <option disabled>choose a course</option>
            {
              courselist.length >0?  courselist.forEach((info,i)=>{
                    return <option key={i}>{info}</option>
                }): <option>No course</option>
            }
        </select>
           
            <br/>
            <br/>
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
                <td>{info.faculty}</td>
                <td></td>
            </tr>
            }) }
        </table>
        </div>
    )
}

export default StudentList