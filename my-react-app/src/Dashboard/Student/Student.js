import  css from "./Student.css";
import $ from 'jquery';
import Maincontent from "../../Views/contentRoute/studentContent/Maincontent";
import { useDispatch} from "react-redux";

 function StudentDashboard(){
  const dispatch = useDispatch()  

  $(".sidebar-dropdown > a").click(function() {
  // $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


async function SetState (types){
  if(types === 'courseReg'){
    dispatch({ type: 'studentPart', payload:'courseReg'});
  }
  else if (types === 'courseList'){
    dispatch({ type: 'studentPart', payload:'courseList'});
  }
  else if (types === 'test'){
    dispatch({ type: 'studentPart', payload:'checktest'});
  }
  else if (types === 'results'){
    dispatch({ type: 'studentPart', payload:'checkresults'});
  }
  else if (types === 'profile'){
    dispatch({ type: 'studentPart', payload:'studentProfile'});
  }
  else if (types === 'calender'){
    dispatch({ type: 'studentPart', payload:'calender'});
  }
  else if (types === 'history'){
    dispatch({ type: 'studentPart', payload:'history'});
  }
   
  
}

  

   return (
  <div>
    <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="#">pro sidebar</a>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src=""
            alt="User picture"/>
        </div>
        <div class="user-info">
          <span class="user-name">Jhon
            <strong>Smith</strong>
          </span>
          <span class="user-role">Administrator</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
      {/* <!-- sidebar-header  --> */}
      <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Search..."/>
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- sidebar-search  --> */}
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>Course</span>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('courseReg')}>
              <i class="far fa-gem"></i>
              <span>Course Registration</span>
            </a>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('courseList')}>
              <i class="fa fa-chart-line"></i>
              <span>Course List</span>
            </a>
          </li>
          <li class="sidebar">
            <a  onClick={()=>SetState('test')}>
              <i class="far fa-gem"></i>
              <span>Test</span>
            </a>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('results')}>
              <i class="fa fa-globe"></i>
              <span>Results</span>
            </a>
          </li>
          
          <li class="header-menu">
            <span>Personal</span>
          </li>
          <li>
            <a onClick={()=>SetState('profile')}>
              <i class="fa fa-book"></i>
              <span>Profile</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a  onClick={()=>SetState('calender')}>
              <i class="fa fa-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a onClick={()=>SetState('history')}>
              <i class="fa fa-folder"></i>
              <span>History</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- sidebar-menu  --> */}
    </div>
    {/* <!-- sidebar-content  --> */}
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
  {/* <!-- sidebar-wrapper  --> */}
  <main class="page-content">
    <Maincontent/>
  </main>
 
</div>
  </div>
   );
 }
export default StudentDashboard;