import "./../Css/Design.css";
import React, { useState ,useEffect , useRef} from "react";

const Sign = () => {
  const intialvalues = {firstname:"", lastname:"", email:"", password:"", confirmpassword:""};
  const[formvalues,setvalues]=useState(intialvalues);
  const[formerrors,seterrors]=useState(intialvalues);
  const[formsubmit,setsubmit]=useState(false);
  // const useRef =useRef(null);

// useEffect(()=>{
//   useRef.current.focus();
// },[])

  const handelsubmit = (ev) => {
    ev.preventDefault();
    seterrors(formvalid(formvalues));
  }
  const handlechange = (ev) =>{
    const {name , value} = ev.target;
    setvalues({...formvalues, [name]:value});
    console.log(formvalues);
    setsubmit(true);
  }
  useEffect(() => {
    console.log(formerrors);
    if(Object.keys(formvalues).length === 0 && setsubmit){
      console.log(formvalues);
    }
  },[formvalues]);

  const formvalid = (values) => {
    const error ={};
    const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if(!values.firstname){
      error.firstname= "firstname is required"
    }
    if(!values.lastname){
      error.lastname= "lastname is required"
    }
    if(!values.email){
      error.email= "email is required"
    }
    if(!values.password){
      error.password= "password is required"
    }
    if(!values.confirmpassword){
      error.confirmpassword= "confirmpassword is required"
    }
    return error;
  }
  return (
        <div className="container form">
        <div className="row  align-items-start">
          <div className="col-4"></div>
          <div className="col-6 col-right div-form2">
            {/* <pre>{JSON.stringify(formvalues, undefined, 2)}</pre> */}
            <form onSubmit={handelsubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="firstname"
                  id="firstname"
                  value={formvalues.firstname}
                  onChange={handlechange}

                /> 
                <p className="line-error">{formerrors.firstname}</p>               
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="lastname"
                  id="lastname"
                  value={formvalues.lastname}
                  onChange={handlechange}
                  // ref={useRef}
                />   
                <p className="line-error">{formerrors.lastname}</p>             
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  id="email"
                  value={formvalues.email}
                  onChange={handlechange}
                  // ref={useRef}
                />   
                <p className="line-error">{formerrors.email}</p>             
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"></label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  value={formvalues.password}
                  onChange={handlechange}
                  // ref={useRef}
                />
                <p className="line-error">{formerrors.password}</p>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  type="password"
                  name="confirmpassword"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="confirmpassword"
                  id="password"
                  value={formvalues.confirmpassword}
                  onChange={handlechange}
                  // ref={useRef}
                />  
                <p className="line-error">{formerrors.confirmpassword}</p>              
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label
                  className="form-check-label text-label"
                  for="exampleCheck1"
                >
                  Check me out
                </label>
              </div> */}
              <button type="submit" className="btn btn-primary btn-submit-first">
                login
              </button>
              <div className="line"></div>
              <button type="button" className="btn btn-danger btn-submit-middle">
                login with google
              </button>
              <button type="button" className="btn btn-secondary btn-submit">
                login with facebook
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};
export default Sign;
