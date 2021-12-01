 import Home from './Home/home'
 import Homenav from './HomeNav/Homenav'
 import AdminLogin from "./Login/Admin/Admin";
 import StudentLogin from "./Login/Student/Student";
 import StaffLogin from "./Login/Staff/staff";
 import AdminDashboard from "./Dashboard/Admin/Admin";
 import StudentDashboard from "./Dashboard/Student/Student";
 import StaffDashboard from "./Dashboard/Staff/Staff";
 import { Switch,Route} from "react-router-dom";

  
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/student-sign_in" component={StudentLogin} />
        <Route  path="/admin" component={AdminLogin} />
        <Route  path="/staff-sign_in" component={StaffLogin} />
        <Route  path="/admin_Dashboard" component={AdminDashboard} />
        <Route  path="/staff_Dashboard" component={StaffDashboard} />
        <Route  path="/student_Dashboard" component={StudentDashboard} />
      </Switch>
    </div>
  );
}

export default App;
