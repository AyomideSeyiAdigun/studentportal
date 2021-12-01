import css from "./300level.css";

import { useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";

function  Special(){
   const [studentInfo, setstudentinfo] = useState({studentName:'',studentCode:'',studentDept:'',studentFaculty:'',studentUnit:''})
   let stateValue = useSelector(state=>state.backendCont)
   let faculty = stateValue.teachfaculty
   let department=stateValue.department
   
   function handleEvent(event,type){
      if (type==='name') {
           studentInfo.studentName=event.target.value    
      }
      else if (type ==='email'){
          studentInfo.studentCode=event.target.value   
      }
      else if (type ==='dept'){
          studentInfo.studentDept=event.target.value   
      }
      else if (type ==='faculty'){
          studentInfo.studentFaculty=event.target.value   
      }
      else if (type ==='level'){
          studentInfo.studentUnit=event.target.value   
      }
       
   }

   function submitstudentInfo(){
      axios.post('http://localhost:2009/studentReg/specialEntry',studentInfo).then(res=>console.log(res))
     
  }

    return(
        <section class="get-in-touch">
        <h1 class="title">Get in touch</h1>
        <form class="contact-form row">
           <div class="form-field col-lg-6">
              <input id="name" class="input-text js-input" type="text" onChange={e=>handleEvent(e,'name')}  required/>
              <label class="label" for="name">Name</label>
           </div>
           <div class="form-field col-lg-6 ">
              <input id="email" class="input-text js-input" type="email" onChange={e=>handleEvent(e,'email')}  required/>
              <label class="label" for="email">E-mail</label>
           </div>
           <div class="form-field col-lg-6 ">
           <select id="company" class="input-text js-input" type="text" onChange={e=>handleEvent(e,'dept')}>
        {
         department.length > 0 ? department.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No department</option>}
      </select><label class="label" for="company">Department</label>
           </div>
            <div class="form-field col-lg-6 ">
            <select id="phone" class="input-text js-input" type="text"  onChange={e=>handleEvent(e,'faculty')}>
        {
         faculty.length > 0 ? faculty.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No faculty</option>}
      </select><label class="label" for="phone">Faculty</label>
           </div>
           <div class="form-field col-lg-6">
              <input id="message" class="input-text js-input" type="text" onChange={e=>handleEvent(e,'level')}  required/>
              <label class="label" for="message">Level</label>
           </div>
           <div class="form-field col-lg-12">
              <input class="submit-btn" type="submit" onClick={submitstudentInfo}  value="Submit"/>
           </div>
        </form>
     </section>
    )
}

export default  Special