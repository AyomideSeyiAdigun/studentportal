import css from "./Non-teaching.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
function Nonteaching(){
    let [stafflist,setstafflist]=useState([])
    async function getFaculty(){ 
        await axios. get('http://localhost:2009/getInfo/staff/non-teaching').then(res=>{
        setstafflist([...res.data])
   
         
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
                <th>staff Name</th>
                <th> staff Code</th>
                <th>Level</th>
                <th>Position</th>
            </tr>

            { stafflist.forEach((info,i)=>{
            return    <tr key={i}>
                <td > {i+1}</td>
                <td>{info.staffName }</td>
                <td>{info.staffCode}</td>
                <td>{info.staffLevel}</td>
                <td>{info.staffPosition}</td>
            </tr>
            }) }
        </table>
        </div>
    )
}

export default Nonteaching