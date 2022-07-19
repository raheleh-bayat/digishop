import React from "react";
const Login = () => {

  
   
  return (
    <div className="container form">
    <div className="row  align-items-start" >
         <div className="col-6 dive-form">
           {/* <img src="./img/img2.jpg" alt="img" className="img-thumbnail dive-form"/> */}
         </div>
      <div className="col-6 col-right dive-form">
        <form >
          <div className="form-group">
            <label for="exampleInputEmail1"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder='Email address'
            />
            <small id="emailHelp" className="form-text text-muted">
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" ></label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder='Password'
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label text-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            login
          </button>
          <button type="button" className="btn btn-danger btn-submit">login with google</button>
          <button type="button" className="btn btn-secondary btn-submit">login with facebook</button>
        </form>
      </div>
     
    </div>
    </div>



  );
};

export default Login;
