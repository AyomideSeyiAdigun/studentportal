 
import css from "./Faculty.css";
import { useState } from "react";
import axios from 'axios'




function FacultyReg(){
    const [facultyInfo, setFacultyinfo] = useState({facultyName:'',facultyCode:'',facultyType:''})
   
    function handleEvent(event,type){
        if (type==='name') {
             facultyInfo.facultyName=event.target.value    
        }
        else if (type ==='code'){
            facultyInfo.facultyCode=event.target.value   
        }
        
        else if (type ==='type'){
            facultyInfo.facultyType=event.target.value   
        }
        
     }
   

     function submitFacultyReg(){
        axios.post('http://localhost:2009/FacultyReg',facultyInfo).then(res=>console.log(res))
       
    }


    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <form>
        <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">Faculty  name</label>
      <input type="text" class="form-control" id="validationDefault01"   onChange={e=>handleEvent(e,'name')}   required/>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Faculty code</label>
      <input type="text" class="form-control" id="validationDefault02" onChange={e=>handleEvent(e,'code')}   required/>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">type</label>
        <select  onChange={e=>handleEvent(e,'type')}  class="form-control" id="validationDefault03"  required>
        <option disabled>choose..</option>
            <option value="nonTeaching">Non-teaching</option>
            <option value="teaching">Teaching</option>
        </select>
    </div>
  </div>
  <button class="btn btn-primary" type="submit" onClick={submitFacultyReg}>Submit form</button>
</form>
                   
                </div>

            </div>

        </div>
           
        </>
    )
}

export default FacultyReg