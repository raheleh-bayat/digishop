import "./App.css";
import "./Css/Design.css";
import "bootstrap/dist/css/bootstrap.css";

import Sign from "./Component/Sign";
import React, { useState } from "react";
import Router from "./Component/Router";
import Navbar from "./Component/Navbar";
import Counters from "./Component/Counters";

// import React, { useState } from "react";
// import React, { useState , Object } from "react";
function App() {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handelDelete = (counterId) => {
    console.log("welcome", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handelReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // const usernameRef = useRef();
  const [values, setvalues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "username",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      lable: "",
      pattern: "^(/^[A-Za-z]+$/)",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      lable: "",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      lable: "",
      pattern: `{^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20`,
      required: true,
    },

    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      lable: "",
    },

    {
      id: 5,
      name: "Confirmpassword",
      type: "password",
      placeholder: "Confirmpassword",
      errorMessage: "Password don't match",
      lable: "",
      pattern: values.password,
      required: true,
    },
  ];
  const handlesubmit = (ev) => {
    ev.preventDefault();
  };
  const onChange = (ev) => {
    setvalues({ ...values, [ev.target.name]: ev.target.value });
  };
  console.log(values);

  return (
    <div className="App">
      <Router></Router>

      <form className="form1" onSubmit={handlesubmit}>
        <h1>registerd</h1>
        {inputs.map((input) => (
          <Sign
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="button" className="btn btn-primary btn-submit">
          summit
        </button>
      </form>
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handelIncrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    </div>
  );
}
export default App;
