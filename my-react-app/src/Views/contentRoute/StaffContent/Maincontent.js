 import Calender from "../../Staff/calender/calender";
import CourseList from "../../Staff/CourseList/CourseList";
import Profile from "../../Staff/Profile/Profile";
import ScoreSheet from "../../Staff/ScoreSheet/ScoreSheet";
import SetQuestion from "../../Staff/SetQuestion/SetQuestion";
import StudentList from "../../Staff/StudentList/StudentList";
import Home from "../../Staff/Home/Home";
import History from "../../Staff/history/history";
import { useSelector } from "react-redux";

function Maincontent(){
    let stateValue = useSelector(state=>state.Staff)
    let display
    
    if (stateValue=='courseList') {
        display = <CourseList />
    }else if (stateValue =='stdList'){
        display = <StudentList/>
      }
    else if (stateValue =='setQuestion'){
        display =  <SetQuestion/>
    }
    else if (stateValue =='scoreSheet'){
        display=<ScoreSheet/>
    }
    else if (stateValue =='staffProfile'){
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
         {display}
         
        </>
    )
}

export default Maincontent