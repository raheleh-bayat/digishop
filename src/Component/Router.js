import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import Sign from "./Sign";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a classNamee="navbar-brand " > */}
              <Link className="ael" to="/login">login</Link>
            {/* </a> */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                {/* <a className="nav-link" > */}
                  <Link to="/home">home</Link>
                  <span className="sr-only">(current)</span>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link"> */}
                  <Link to="/admin">admin</Link>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link"> */}
                  <Link to="/sign">sign up </Link>
                {/* </a> */}
              </li>
            </ul>
             {/* <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>

        

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login placeholder="username" />} />
          <Route path="admin" element={<Admin />} />
          <Route path="sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
