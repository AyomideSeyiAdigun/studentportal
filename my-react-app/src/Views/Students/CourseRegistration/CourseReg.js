import { useEffect, useState } from "react";
import css from "./CouraeReg.css";
import axios from 'axios'
function CourseReg(){
let [courseInfo, setcourseInfo] = useState({faculty:'', department:'',course:'',level:''})
let [courseList,setcourselist]=useState([])
let [allcourse,setallcourse]=useState([])
    function handleCoursereg(event, type){

        if ( type == 'faculty'){
            courseInfo.faculty = event.target.value 
        }
        else if ( type == 'department'){
            courseInfo.department = event.target.value
        }
        else if ( type == 'course'){
            courseInfo.course = event.target.value
        }
        else if ( type == 'level'){
            courseInfo.level = event.target.value
        }
    }

        async function getallCourses(){
            await axios. get('http://localhost:2009/getInfo/student/course').then(res=>{
                setallcourse([...res.data])
        })
        }

        useEffect( () => {
            getallCourses()  
            })

        
            function getCourses(){

            }

    return(
        <div>
         
            <h3>Register for your course </h3>
            
            <select onChange={e=>handleCoursereg(e,'faculty')}>
                <option>select faculty</option>
                {
                    courseInfo.faculty !== null ? courseInfo.faculty.forEach((info,i) => {
                     return <option key={i}>{info}</option>   
                    }):<option>noting yet</option>
                }
            </select>

            <select onChange={e=>handleCoursereg(e,'department')}>
                <option>select department</option>
                {
                    courseInfo.department !== null ?    courseInfo.department.forEach((info,i) => {
                     return <option key={i}>{info}</option>   
                    }):<option>noting yet</option>
                }
            </select>

            <select onChange={e=>handleCoursereg(e,'course')}>
                <option>select course </option>
                {
                    courseInfo.course !== null ?   courseInfo.course.forEach((info,i) => {
                     return <option key={i}>{info}</option>   
                    }):<option>noting yet</option>
                }
            </select>

            <select onChange={e=>handleCoursereg(e,'level')} >
                 <option value="100l">100 level</option>
                 <option  value="200l">200 level</option>
                 <option  value="300l">300 level</option>
                 <option  value="400l">400 level</option>
                 <option  value="500l">500 level</option>
                 <option  value="Med1">Medical 1</option>
                 <option  value="Med2">Medical 2</option>
                 <option  value="Med3">Medical 3</option>
            </select>
                    <button onClick={getCourses}>search course</button>


                    <br/> <br/>
        <table border="2px solid black">
            <tr>
                <th>S/N.</th>
                <th>Course Name</th>
                <th> Course Code</th>
                <th>Course Unit</th>
                <th>register</th>
            </tr>

            { courseList.forEach((info,i)=>{
            return    <tr key={i}>
                <td > {i+1}</td>
                <td>{info.courseName }</td>
                <td>{info.courseCode}</td>
                <td>{info.courseUnit}</td>
                <td> <button>register</button></td>
                <td></td>
            </tr>
            }) }
        </table>
            
        </div>
    )
}

export default CourseReg