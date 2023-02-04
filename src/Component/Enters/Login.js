import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email:"",
      error: "",
    };
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
  };

  handelonChange = (ev) => {
    this.setState({
      [ev.target.id]: [ev.target.value],
    });
  };

  setUsername(ev) {
    let u = ev.target.value;
    this.state.username = u;
    this.setState(this.state);
  }

  validform(ev){
    let e = ev.target.value;
    let email= this.state.email = e
    let password = this.state.password = e
    let error = "";
    if(email === "" || password === ""){
        error.push("wrong");
    }
    console.log(error);
  }

  render() {
    return (
      <div className="container form">
        <div className="row  align-items-start">
          <div className="col-4"></div>
          <div className="col-6 col-right div-form">
            <form onSubmit={this.handleSubmit} validform={this.validform}>
              <div className="form-group">
                <label for="exampleInputEmail1" ></label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  id="email"
                  onChange={this.setUsername.bind(this)}
                  value={this.state.email}
                />
                  <span></span>
                
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  onChange={this.setUsername.bind(this)}
                  value={this.state.password}
                />
                <span></span>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label
                  className="form-check-label text-label"
                  for="exampleCheck1"
                >
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                login
              </button>
              <button type="button" className="btn btn-danger btn-submit">
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
  }
}

export default Login;
