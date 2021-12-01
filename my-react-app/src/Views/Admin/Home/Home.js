import css from "./Home.css";
import { useEffect, } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";


function Home(){
const dispatch = useDispatch()
  async function getFaculty(){ 
    await axios. get('http://localhost:2009/getInfo').then(res=>{
     let sendContent  ={teachfaculty:res.data.faculty,department:res.data.department,courseList:res.data.course,nonteachFaculty:''}
       dispatch({ type: 'backendcontent', payload:sendContent});
     
    })
  }

   useEffect( () => {
    getFaculty()  
    },[])

    return(
        <div>
            Home
        </div>
    )
}

export default Home