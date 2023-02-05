// import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addProduct from "../../actions/product";
import { useNavigate } from "react-router-dom";
import ImageUplaoder from "../Imageuploder/image";

export default function Product() {
  const navigate = useNavigate();

  const [productForm, setProductForm] = useState({
    product_name: "",
    product_price: "",
    product_image : "",
  });

  const handlerProductForm = (ev) => {
    const { name, value } = ev.target;
    setProductForm({ ...productForm, [name]: value });
    console.log(productForm);
  };

  const handelersubmit = (ev) => {
    ev.preventDefault();
  };
  let addtoproduct = useDispatch();

  // const addtoproduct = useDispatch();

  return (
    <div className="div-main">
      <form className="container" onSubmit={handelersubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <ImageUplaoder
            className="form-control"
            productForm={productForm}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            onChange={handlerProductForm}
            value={productForm.product_name}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>



        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            type="text"
            name="product_price"
            className="form-control"
            onChange={handlerProductForm}
            value={productForm.product_price}
          />
          <span></span>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-submit"
          onClick={() => {
            addtoproduct(addProduct(productForm.product_image,productForm.product_name,productForm.product_price));
            navigate("/products");
          }}
        >
          Add to product
        </button>
      </form>
    </div>
  );
}
