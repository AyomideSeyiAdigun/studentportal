import css from "./Student.css";
import Homenav from "../../HomeNav/Homenav";
 function StudentLogin(){
     return(
        <>
        <Homenav/>
        <section class="login-block">
            <div class="container">
            <div class="row ">
                <div class="col login-sec">
                    <h2 class="text-center">Login Now</h2>
                    <form class="login-form">
          <div class="form-group">
            <label for="exampleInputEmail1" class="text-uppercase">Username</label>
            <input type="text" class="form-control" placeholder=""/>
            
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="text-uppercase">Password</label>
            <input type="password" class="form-control" placeholder=""/>
          </div>
          
          
            <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input"/>
              <small>Remember Me</small>
            </label>
            <button type="submit" class="btn btn-login float-right">Submit</button>
          </div>
          
        </form>
          </div>
            </div>
            </div>
        </section>
      </>
     )
 }

 export default StudentLogin;