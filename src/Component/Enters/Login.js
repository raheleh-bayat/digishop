import React, { useState, useEffect, useRef } from "react";
import './login.css';
 export const Login = () => {
  const intialvalues = {
    email: "",
    password: "",
  };
  const [formvalues, setvalues] = useState(intialvalues);
  const [formerrors, seterrors] = useState(intialvalues);
  const [formsubmit, setsubmit] = useState(false);

  const handelsubmit = (ev) => {
    ev.preventDefault();
    seterrors(formvalid(formvalues));
  };
  const handlechange = (ev) => {
    const { name, value } = ev.target;
    setvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
    setsubmit(true);
  };
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formvalues).length === 0 && setsubmit) {
      console.log(formvalues);
    }
  }, [formvalues]);

  const formvalid = (values) => {
    const error = {};
    const regex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!values.email) {
      error.email = "email is required";
    }
    if (!values.password) {
      error.password = "password is required";
    }
   
    return error;
  };
  return (
    <div className="form form-div">
      {/* <pre>{JSON.stringify(formvalues, undefined, 2)}</pre> */}
      <form onSubmit={handelsubmit}>
        <div className="form-parent-div">
        <div className="form-input-form">
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
        <div className="form-input-form">
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
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        </div>
        <button type="submit" className="btn btn-primary btn-submit-login">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
