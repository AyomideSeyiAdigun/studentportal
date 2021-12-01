import { useState } from "react";
import css from "./ScoreSheet.css";
import axios from "axios";
import { useEffect } from "react";
function ScoreSheet(){
    let [result,setresult]=useState([])
    let [course,setcourse]=useState([])
    async function getResult(){
          
        await axios. get('http://localhost:2009/getInfo/staff/course').then(res=>{
            setcourse([...res.data])
        })
       
      }


      async function handleEvent(event){
        await axios. get('http://localhost:2009/getInfo/staff/courseResult').then(res=>{
            setresult([...res.data])
        })
      }
    
       useEffect( () => {
        getResult()  
        })


    return(
        <div>
            
            <select onChange={e=>handleEvent(e)} >
                {
                course.length ? course.forEach((info)=>{
                        return <option>{info}</option>
                    }) :<option>No Courses</option>
                }
            </select>


            <table border="2px solid black">
                    <tr>
                        <th>S/N</th>
                        <th>STUDENT MATRIC NO</th>
                        <th>COURSE CODE</th>
                        <th>SCORE</th>
                        <th>TOTAL</th>
                    </tr>
                    {
                        result.forEach((info,i)=>{
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{info.studentcode}</td>
                                <td>{info.resultcoursecode}</td>
                                <td>{info.score}</td>
                                <td><button>ACTIVATE</button></td>
                                <td><button>DEACTIVATE</button></td>
                                <td><button>DELETE</button></td>
                            </tr>
                        })
                    }

                </table>
        </div>
    )
}

export default ScoreSheet