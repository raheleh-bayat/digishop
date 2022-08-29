// import { useState } from "react";
import { setNestedObjectValues } from "formik";
import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import Button from "../CartBadge";
import {useSelector} from 'react-redux';

const Productlist = (props) => {

  let products = useSelector(state => state.product)

  return (
    <div classname="container">
      <div className="row">
        <div className="col-md-3">
          <Filter></Filter>
        </div>

        <div className="col-md-9">
          <List products={products} ></List>
        </div>
      </div>
    </div>
  );
};
export default Productlist;
