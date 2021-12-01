import css from "./Teachingstaff.css";
import { useEffect, useState} from "react";
import axios from 'axios'


function TeachingStaff(){


  const [staffInfo, setstaffinfo] = useState({staffName:'',staffPosition:'',staffLevel:'',staffEmail:'',staffCoursetaken:[],Stafffaculty:''})
  const [faculty, setfaculty] = useState([])

  function handleEvent(event,type){
    if (type==='name') {
         staffInfo.staffName=event.target.value    
    }
    else if (type ==='position'){
        staffInfo.staffPosition=event.target.value   
    }
    else if (type ==='level'){
        staffInfo.staffLevel=event.target.value   
    }
    else if (type ==='email'){
        staffInfo.staffEmail=event.target.value   
    }
    else if (type ==='courseTaken'){
      staffInfo.staffCoursetaken.push(event.target.value  )
  }
  else if (type ==='faculty'){
    staffInfo.Stafffaculty=event.target.value
}
    

 }

 function submitteaching(){
  axios.post('http://localhost:2009/staffReg',staffInfo).then(res=>console.log(res))
 
}


async function getFaculty(){ 
  await axios. get('http://localhost:2009/getInfo').then(res=>{
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
      <label for="validationDefault01">Name</label>
      <input type="text" class="form-control" id="validationDefault01"  onChange={e=>handleEvent(e,'name')}  required/>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Position</label>
      <input type="text" class="form-control" id="validationDefault02"  onChange={e=>handleEvent(e,'position')} required/>
    </div>
  </div>
  <div class="form-row">
  <div class="col-md-6 mb-3">
      <label for="validationDefault05">Email</label>
      <input type="text" class="form-control" id="validationDefault05"  onChange={e=>handleEvent(e,'email')} required/>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault03">Level</label>
      <input type="number" class="form-control" id="validationDefault03"  onChange={e=>handleEvent(e,'level')} required/>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Faculty</label>
      <select  class="form-control" id="validationDefault03" onChange={e=>handleEvent(e,'faculty')}>
        {
         faculty.length > 0 ? faculty.map((element,i)=>{
        return  <option key={i} value={element} >{element}</option>
        }) : <option value="no faculty">No department</option>}
      </select></div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault04">State</label>
       
    </div>
    </div>
  </div>
  <button class="btn btn-primary" onClick={submitteaching} type="submit">Submit form</button>
</form>
                </div>
            </div>
        </div>
    </>
    )
}

export default TeachingStaff