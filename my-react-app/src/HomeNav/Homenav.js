import css from "./Homenav.css";
import {Link} from 'react-router-dom'

function Homenav() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">Navbar</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/student-sign_in">Student</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/staff-sign_in">Lecturer</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/admin">Admin</Link>
          </li>
         
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    );
  }
  
  export default Homenav;



