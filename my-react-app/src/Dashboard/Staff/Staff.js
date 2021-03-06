import  css from "./Staff.css";
import $ from 'jquery';
import Maincontent from "../../Views/contentRoute/StaffContent/Maincontent";

import { useDispatch} from "react-redux";


function StaffDashboard(){
   
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

//setstate

async function SetState (types){
  if(types === 'courses'){
    dispatch({ type: 'staffPart', payload:'courseList'});
  }
  else if (types === 'stdList'){
    dispatch({ type: 'staffPart', payload:'stdList'});
  }
  else if (types === 'setQuestion'){
    dispatch({ type: 'staffPart', payload:'setQuestion'});
  }
  else if (types === 'scoreSheet'){
    dispatch({ type: 'staffPart', payload:'scoreSheet'});
  }
  else if (types === 'staffProfile'){
    dispatch({ type: 'staffPart', payload:'staffProfile'});
  }
  else if (types === 'calender'){
    dispatch({ type: 'staffPart', payload:'calender'});
  }
  else if (types === 'history'){
    dispatch({ type: 'staffPart', payload:'history'});
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
            <span>General</span>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span>Course List</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a onClick={()=>SetState('courses')} >Courses
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('stdList')}>
              <i class="fa fa-shopping-cart"></i>
              <span>Student Lists</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('setQuestion')}>
              <i class="far fa-gem"></i>
              <span>Set Question</span>
            </a>
          </li>
          <li class="sidebar">
            <a onClick={()=>SetState('scoreSheet')}>
              <i class="fa fa-chart-line"></i>
              <span>Score Sheet</span>
            </a>
          </li>
          <li class="header-menu">
            <span>Personal</span>
          </li>
          <li>
            <a onClick={()=>SetState('staffProfile')}>
              <i class="fa fa-book"></i>
              <span>Profile</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a onClick={()=>SetState('calender')}>
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
  {/* <!-- page-content" --> */}
</div>
  </div>
   );
 }
export default StaffDashboard;