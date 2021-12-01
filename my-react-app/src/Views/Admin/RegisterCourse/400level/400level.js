import css from "./400level.css";

import { useState,useEffect } from "react";
import axios from 'axios'

function Fourhundredlevel(){

  const [courseInfo, setCourseinfo] = useState({courseName:'',courseCode:'',courseDept:'',courseFaculty:'',courseUnit:''})
  let [faculty, setfaculty] = useState([])
  let [department, setdepartment] = useState([])

  function handleEvent(event,type){
      if (type==='name') {
           courseInfo.courseName=event.target.value    
      }
      else if (type ==='code'){
          courseInfo.courseCode=event.target.value   
      }
      else if (type ==='dept'){
          courseInfo.courseDept=event.target.value   
      }
      else if (type ==='faculty'){
          courseInfo.courseFaculty=event.target.value   
      }
      else if (type ==='unit'){
          courseInfo.courseUnit=event.target.value   
      }
      console.log(courseInfo)
   }
 

   function submitfourhundredlevel(){
      axios.post('http://localhost:2009/courseReg/400',courseInfo).then(res=>console.log(res))
     
  }

 async function getFaculty(){ 
    await axios. get('http://localhost:2009/getInfo').then(res=>{
       setdepartment(res.data.department)
       setfaculty(res.data.faculty)
    })
  }

   useEffect( () => {
    getFaculty()  
    },[])



    return(
      <>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <form>
      <div class="form-row">
  <div class="col-md-6 mb-3">
    <label for="validationDefault01">Course  name</label>
    <input type="text" class="form-control" id="validationDefault01"   onChange={e=>handleEvent(e,'name')}   required/>
  </div>
  <div class="col-md-6 mb-3">
    <label for="validationDefault02">Course code</label>
    <input type="text" class="form-control" id="validationDefault02" onChange={e=>handleEvent(e,'code')}   required/>
  </div>
</div>
<div class="form-row">
<div class="col-md-6 mb-3">
      <label for="validationDefault03">Department</label>
      <select  class="form-control" id="validationDefault03" onChange={e=>handleEvent(e,'dept')}>
        {
         department.length > 0 ? department.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No department</option>}
      </select></div>
    
    <div class="col-md-6 mb-3">
      <label for="validationDefault05">Faculty</label>
      <select  class="form-control" id="validationDefault04" onChange={e=>handleEvent(e,'faculty')}>
        {
         faculty.length > 0 ? faculty.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No faculty</option>}
      </select></div>
</div>
<div class="form-group">
<div class="col-md-3 mb-3">
    <label for="validationDefault05">Units</label>
    <input type="number" class="form-control" id="validationDefault05" onChange={e=>handleEvent(e,'unit')} required/>
  </div>
</div>
<button class="btn btn-primary" type="submit" onClick={submitfourhundredlevel}>Submit form</button>
</form>
                 
              </div>

          </div>

      </div>
         
      </>
    )
}

export default Fourhundredlevel