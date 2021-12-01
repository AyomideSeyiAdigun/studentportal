import Hundredlevel from "../../Admin/CoursesRegistered/100level/100level"
import Twohundredlevel from "../../Admin/CoursesRegistered/200level/200level"
import Threehundredlevel from "../../Admin/CoursesRegistered/300level/300level"
import Fourhundredlevel from "../../Admin/CoursesRegistered/400level/400level"
import Fivehundredlevel from "../../Admin/CoursesRegistered/500level/500level"
import Medical from "../../Admin/CoursesRegistered/MedicalStd/Medical"
import SpillOver from "../../Admin/CoursesRegistered/SpillOver/SpillOver"
import Profile from "../../Admin/Profile/Profile"
import Rhundredlevel from "../../Admin/RegisterCourse/100level/100level"
import Rtwohundredlevel from "../../Admin/RegisterCourse/200level/200level"
import Rthreehundredlevel from "../../Admin/RegisterCourse/300level/300level"
import Rfourhundredlevel from "../../Admin/RegisterCourse/400level/400level"
import Rfivehundredlevel from "../../Admin/RegisterCourse/500level/500level"
import RMedical from "../../Admin/RegisterCourse/MedicalStd/Medical"
import RSpillOver from "../../Admin/RegisterCourse/SpillOver/SpillOver"
import  Newstudent from "../../Admin/RegisterStudent/Newstudent/100level"
import  Directentry from "../../Admin/RegisterStudent/DirectEntry/200level"
import  Special from "../../Admin/RegisterStudent/Specialstd/300level"
import Lhundredlevel from "../../Admin/StudentList/100level/100level"
import Ltwohundredlevel from "../../Admin/StudentList/200level/200level"
import Lthreehundredlevel from "../../Admin/StudentList/300level/300level"
import Lfourhundredlevel from "../../Admin/StudentList/400level/400level"
import Lfivehundredlevel from "../../Admin/StudentList/500level/500level"
import LMedical from "../../Admin/StudentList/MedicalStd/Medical"
import LSpillOver from "../../Admin/StudentList/SpillOver/SpillOver"
import Nonteaching from "../../Admin/RegisterStaff/Non-teaching/Non-teaching"
import TeachingStaff from "../../Admin/RegisterStaff/TeachingStaff/TeachingStaff"
import LNonteaching from "../../Admin/StaffList/Non-teaching/Non-teaching"
import LTeachingStaff from "../../Admin/StaffList/TeachingStaff/TeachingStaff"
import Calender from "../../Admin/calender/calender"
import History from "../../Admin/history/history"
import Home from "../../Admin/Home/Home"
import DepartmentReg from "../../Admin/DepartmentReg/Department"
import FacultyReg from "../../Admin/FacultyReg/Faculty"
import { useSelector } from "react-redux";


function Maincontent(){

    let stateValue = useSelector(state=>state.Admin)
    let display
    
     if ( stateValue=='100levelRegstcourse'){
         display= <Hundredlevel/>
     }
    
    else if ( stateValue=='200levelRegstcourse'){
         display= <Twohundredlevel/>
     }
    
    else if ( stateValue=='300levelRegstcourse'){
         display= < Threehundredlevel/>
     }
    
    else if ( stateValue=='400levelRegstcourse'){
         display= <Fourhundredlevel/>
     }
    
    else if ( stateValue=='500levelRegstcourse'){
         display= <Fivehundredlevel/>
     }
    
    else if ( stateValue=='MedicalRegstcourse'){
         display= <Medical/>
     }
    
    else if ( stateValue=='SpillOverRegstcourse'){
         display= < SpillOver/>
     }
    
    else if ( stateValue=='profile'){
         display= <Profile/>
     }
    
    else if ( stateValue=='100levelRegcourse'){
         display= <Rhundredlevel/>
     }
    
    else if ( stateValue=='200levelRegcourse'){
         display= <Rtwohundredlevel/>
     }
    
    else if ( stateValue=='300levelRegcourse'){
         display= < Rthreehundredlevel/>
     }
    
    else if ( stateValue=='400levelRegcourse'){
         display= <Rfourhundredlevel/>
     }
    
    else if ( stateValue=='500levelRegcourse'){
         display= <Rfivehundredlevel/>
     }
    
    else if ( stateValue=='MedicalRegcourse'){
         display= <RMedical/>
     }
    
    else if ( stateValue=='SpillOverRegcourse'){
         display= < RSpillOver/>
     }
    
    
    else if ( stateValue=='newStudent'){
         display= <Newstudent/>
     }
    
    else if ( stateValue=='directEntry'){
         display= <Directentry/>
     }
    
    else if ( stateValue=='special'){
         display= < Special/>
     }
    
    else if ( stateValue=='100levelstdlist'){
         display= <Lhundredlevel/>
     }
    
    else if ( stateValue=='200levelstdlist'){
         display= <Ltwohundredlevel/>
     }
    
    else if ( stateValue=='300levelstdlist'){
         display= <Lthreehundredlevel/>
     }
    
    else if ( stateValue=='400levelstdlist'){
         display= <Lfourhundredlevel/>
     }
    
    else if ( stateValue=='500levelstdlist'){
         display= <Lfivehundredlevel/>
     }
    
    else if ( stateValue=='Medicalstdlist'){
         display= <LMedical/>
     }
    
    else if ( stateValue=='SpillOverstdlist'){
         display= <LSpillOver/>
     }
    
    else if ( stateValue=='teachReglect'){
         display= <TeachingStaff/>
     }
    
    else if ( stateValue=='nonteachReglect'){
         display= <Nonteaching/>
     }
    
    else if ( stateValue=='teachListlect'){
         display= <LTeachingStaff/>
     }
    
    
    else if ( stateValue=='nonteachListlect'){
         display= <LNonteaching/>
     }else if (stateValue =='calender'){
        display = <Calender/>
    }
    else if (stateValue =='history'){
        display= <History/>
    }
    else if (stateValue =='departmentReg'){
        display= <DepartmentReg/>
    }
    else if (stateValue =='facultyReg'){
        display= <FacultyReg/>
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