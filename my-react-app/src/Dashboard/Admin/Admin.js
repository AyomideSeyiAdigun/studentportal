import  css from "./Admin.css";
import $ from 'jquery';
import { useDispatch } from "react-redux";
import Maincontent from "../../Views/contentRoute/AdminContent/Maincontent";




function AdminDashboard(){
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
async function CheckState (types){
  if(types === '1ll'){
    dispatch({ type: 'stdList', payload:'100level'});
  }
  else if (types === '2ll'){
    dispatch({ type: 'stdList', payload:'200level'});
  }
  else if (types === '3ll'){
    dispatch({ type: 'stdList', payload:'300level'});
  }
  else if (types === '4ll'){
    dispatch({ type: 'stdList', payload:'400level'});
  }
  else if (types === '5ll'){
    dispatch({ type: 'stdList', payload:'500level'});
  }
  else if (types === 'Medl'){
    dispatch({ type: 'stdList', payload:'Medical'});
  }
  else if (types === 'Spl'){
    dispatch({ type: 'stdList', payload:'SpillOver'});
  }
  else if(types === '1vl'){
    dispatch({ type: 'regCourse', payload:'100level'});
  }
  else if (types === '2vl'){
    dispatch({ type: 'regCourse', payload:'200level'});
  }
  else if (types === '3vl'){
    dispatch({ type: 'regCourse', payload:'300level'});
  }
  else if (types === '4vl'){
    dispatch({ type: 'regCourse', payload:'400level'});
  }
  else if (types === '5vl'){
    dispatch({ type: 'regCourse', payload:'500level'});
  }
  else if (types === 'Medvl'){
    dispatch({ type: 'regCourse', payload:'Medical'});
  }
  else if (types == 'Spvl'){
    dispatch({ type: 'regCourse', payload:'SpillOver'});
  }
  else if(types === '1cl'){
    dispatch({ type: 'courseRegd', payload:'100level'});
  }
  else if (types === '2cl'){
    dispatch({ type: 'courseRegd', payload:'200level'});
  }
  else if (types === '3cl'){
    dispatch({ type: 'courseRegd', payload:'300level'});
  }
  else if (types === '4cl'){
    dispatch({ type: 'courseRegd', payload:'400level'});
  }
  else if (types === '5cl'){
    dispatch({ type: 'courseRegd', payload:'500level'});
  }
  else if (types === 'Medcl'){
    dispatch({ type: 'courseRegd', payload:'Medical'});
  }
  else if (types === 'Spvl'){
    dispatch({ type: 'courseRegd', payload:'SpillOver'});
  }
  else if (types === 'teachR'){
    dispatch({ type: 'lecturer', payload:'teachReg'});
  }
  else if (types === 'nonR'){
    dispatch({ type: 'lecturer', payload:'nonteachReg'});
  }
  else if (types === 'teachL'){
    dispatch({ type: 'lecturer', payload:'teachList'});
  }
  else if (types === 'nonL'){
    dispatch({ type: 'lecturer', payload:'nonteachList'});
  }
  else if (types === 'newStudent'){
    dispatch({ type: 'regStd', payload:'newStudent'});
  }
  else if (types === 'directEntry'){
    dispatch({ type: 'regStd', payload:'directEntry'});
  }
  else if (types === 'special'){
    dispatch({ type: 'regStd', payload:'special'});
  }
  else if (types === 'profile'){
    dispatch({ type: 'personal', payload:'profile'});
  }
  else if (types === 'calender'){
    dispatch({ type: 'personal', payload:'calender'});
  }
  else if (types === 'history'){
    dispatch({ type: 'personal', payload:'history'});
  }
  else if (types === 'departmentReg'){
    dispatch({ type: 'department', payload:'departmentReg'});
  }
  else if (types === 'facultyReg'){
    dispatch({ type: 'faculty', payload:'facultyReg'});
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
              <span>Register Courses</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a   onClick={()=>CheckState('1vl')}>100 level
                    <span class="badge badge-pill badge-success">Pro</span>
                  </a>
                </li>
                <li>
                  <a onClick={()=>CheckState('2vl')}>200 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('3vl')}>300 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('4vl')}>400 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('5vl')}>500 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Medvl')}>Medical students</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Spvl')}>spill over</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>Register Staff</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a onClick={()=>CheckState('teachR')}>Teaching-Staff </a>
                </li>
                <li>
                  <a onClick={()=>CheckState('nonR')}>Non-Teaching Staff</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-gem"></i>
              <span>Register students</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a onClick={()=>CheckState('newStudent')}> New students</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('directEntry')}>Direct-entry</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('special')}>Special</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar">
            <a onClick={()=>CheckState('departmentReg')}>
              <i class="fa fa-tachometer-alt"></i>
              <span>Register department</span>
             
            </a>
            </li>
            <li class="sidebar">
            <a onClick={()=>CheckState('facultyReg')}>
              <i class="fa fa-tachometer-alt"></i>
              <span>Register Faculty</span>
             
            </a>
            </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-chart-line"></i>
              <span>Student List</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a onClick={()=>CheckState('1ll')}>100 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('2ll')}>200 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('3ll')}>300 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('4ll')}>400 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('5ll')}>500 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Medl')}>Medical students</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Spl')}>spill over</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-globe"></i>
              <span>Lecturer List</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a onClick={()=>CheckState('teachL')}>Teaching Staff</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('nonL')}>Non-teaching Staff</a>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-globe"></i>
              <span>Courses Registered</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
              <li>
                  <a onClick={()=>CheckState('1cl')}>100 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('2cl')}>200 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('3cl')}>300 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('4cl')}>400 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('4cl')}>500 level</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Medcl')}>Medical students</a>
                </li>
                <li>
                  <a onClick={()=>CheckState('Spcl')}>spill over</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="header-menu">
            <span>Personal</span>
          </li>
          <li>
            <a onClick={()=>CheckState('profile')}>
              <i class="fa fa-book"></i>
              <span>Profile</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a onClick={()=>CheckState('calender')}>
              <i class="fa fa-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a onClick={()=>CheckState('History')}>
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
export default AdminDashboard;