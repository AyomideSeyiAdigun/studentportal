import { useSelector } from "react-redux"
import CourseReg from "../../Students/CourseRegistration/CourseReg"
import CourseList from "../../Students/CourseList/courseList"
import Profile from "../../Students/Profile/Profile"
import Results from "../../Students/Results/Results"
import Tests from "../../Students/tests/test"
import Calender from "../../Students/calender/calender"
import History from "../../Students/history/history"
import Home from "../../Students/Home/Home"
function Maincontent(){

    let stateValue = useSelector(state=>state.Student)
    let display
    
    if (stateValue=='courseReg') {
        display = <CourseReg />
    }else if (stateValue =='courseList'){
        display = <CourseList/>
      }
    else if (stateValue =='checktest'){
        display =   <Tests/>
    }
    else if (stateValue =='checkresults'){
        display=<Results/>
    }
    else if (stateValue =='studentProfile'){
        display =<Profile/>
    }
    else if (stateValue =='calender'){
        display = <Calender/>
    }
    else if (stateValue =='history'){
        display= <History/>
    }
    else{
        display=<Home/>
    }

    return(
        <>
        <div>
          {display}
        </div>

        
        </>
    )
}

export default Maincontent