 
import css from "./Department.css";
import { useEffect, useState } from "react";
import axios from 'axios'




function DepartmentReg(){
    const [departmentInfo, setdepartmentinfo] = useState({departmentName:'',departmentCode:'',departmentFaculty:''})
    let [department, setdepartment] = useState([])
     
    function handleEvent(event,type){
        if (type==='name') {
             departmentInfo.departmentName=event.target.value    
        }
        else if (type ==='code'){
            departmentInfo.departmentCode=event.target.value   
        }
        
        else if (type ==='faculty'){
            departmentInfo.departmentFaculty=event.target.value   
        }
 
     }
   

     function submitDepartmentReg(){
        axios.post('http://localhost:2009/DepartmentReg',departmentInfo).then(res=>console.log(res))
       
    }

    async function getFaculty(){ 
    await axios. get('http://localhost:2009/getInfo').then(res=>{
       setdepartment(res.data.faculty)
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
      <label for="validationDefault01">Department  name</label>
      <input type="text" class="form-control" id="validationDefault01"   onChange={e=>handleEvent(e,'name')}   required/>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Department code</label>
      <input type="text" class="form-control" id="validationDefault02" onChange={e=>handleEvent(e,'code')}   required/>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Faculty</label>
      <select  class="form-control" id="validationDefault03" onChange={e=>handleEvent(e,'faculty')}>
        {
         department.length > 0 ? department.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No faculty</option>}
      </select>

    </div>
  </div>
  <button class="btn btn-primary" type="submit" onClick={submitDepartmentReg}>Submit form</button>
</form>
                   
                </div>

            </div>

        </div>
           
        </>
    )
}

export default DepartmentReg