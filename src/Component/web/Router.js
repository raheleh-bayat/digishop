import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Enters/Login";
import Productlist from "../Product/ProductPage";
import Admin from "../admin";
import Sign from "../Enters/Sign";
// import Tab1 from "../Tab1";
import Cart from "../Cart/Cart";
import CartBadge from "../Cart/CartBadge";
import { propTypes } from "react-bootstrap/esm/Image";
import {useDispatch, useSelector} from 'react-redux';
import addProduct from "../../actions/product"
import Product from "../admin/product"


function Router(props) {
  let cart_badge = useSelector(state => state.cart.number)
  let productHandler = useDispatch()

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/sign">sign up </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    {" "}
                    <Link className="ael" to="/login">
                      login
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    {" "}
                    <Link className="ael" to="/admin">
                      admin
                    </Link>
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link">
                    {" "}
                    <Link className="ael" to="/products">
                      products
                    </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    {" "}
                    <Link className="ael" to="admin/Product">
                      product
                    </Link>
                  </a>
                </li>

                <li>
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <Link className="ael" to="/cart">
                      cart
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <CartBadge number={cart_badge} />
                  </a>
                </li>


                <li className="nav-item">
                  <a className="nav-link" 
                  // onClick={ () => {productHandler(addProduct()) } }
                  >   
                 <Link className="ael" to="admin/product">
                      go to product
                    </Link>
                  </a>
                </li>
               
               
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
               
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="products" element={<Productlist />} />
          <Route
            path="login"
            element={<Login placeholder={props.placeholder} />}
          />
          <Route path="admin" element={<Admin />}>
            {/* <Route path="tab1" element={<Tab1 />} /> */}
          </Route>
          <Route path="sign" element={<Sign />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin/product" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
