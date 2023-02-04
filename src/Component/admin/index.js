import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./product";
import Cart from "../Cart/Cart";
import Productlist from "./productList";

const Admin = () => {
  const [undermenu, setundermenu] = useState({ active: false });
  const [content, setContent] = useState({ page: "product" , page: "cart" , page : "productlist" , page : ""});
  let renderSwitch = () => {
    switch(content.page) {
      case 'product':
        return <Product/>;
      case 'cart':
        return <Cart/>;
        case 'productlist':
          return <Productlist/>
      default:
        return 'welcome';
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-3 sidebar">
          <ul className="nav flex-column ">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a-sidebar" href="#" onClick={()=>{setContent({ page: "product" })}}>
                  New Product
                <i class="bi bi-chevron-right"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link a-sidebar" href="#" onClick={()=>{setContent({page:"cart"})}}>
                cart
                <i class="bi bi-chevron-right"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link a-sidebar" href="#" onClick={()=>{setContent({page:"productlist"})}} >
                productlist
                <i class="bi bi-chevron-right"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
              <i class="bi bi-chevron-right"></i>
            </li>
            <li className="nav-item">
              <a className="nav-link a-sidebar" href="#">
                Link
                <i class="bi bi-chevron-right"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">

        {renderSwitch()}

        </div>
      </div>
    </div>
  );
};
export default Admin;
