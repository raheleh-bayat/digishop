// import { ArrowRight } from 'react-bootstrap-icons';
import { useState } from "react";
import Button from "./CartBadge";
import './cart.css';

const Item = (props) => {
  const [counter, setcounter] =useState([
      {id:1,value:0}
  ])

  let count = 0;
  const handlercounter = () => {
    
       if(count.length > 1){
          counter = 1;
       }
       setcounter({count});
       console.log(count);
  }

  const increment = () =>{
    return(
      <div>
          {counter.map((count) => {
              <Button key={count.id} value={count} addcounter={handlercounter}/>
          })}
      </div>
    )
  }
  
  
  return (
    <div className="div_carf">
      <div className="card mb-4 ">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                className="img-fluid"
                alt="Generic placeholder image"
              />
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <div>
                <p className="small text-muted mb-4 pb-2">Name</p>
                <p className="lead fw-normal mb-0">{props.config.name}</p>
              </div>

              <button
                type="button"
                className="btn btn-link btn-icon"
                onClick={handlercounter}
              ></button>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <div>
                <p className="small text-muted mb-4 pb-2">Color</p>
                <p className="lead fw-normal mb-0">
                  <i
                    className="fas fa-circle me-2"
                    style={{ color: props.config.color }}
                  >
                    {props.config.color}
                  </i>
                </p>
              </div>
            </div>

            <div className="col-md-2 d-flex justify-content-center">
              <div>
                <p className="small text-muted mb-4 pb-2">Quantity</p>
                <p className="lead fw-normal mb-0">{props.config.quantity}</p>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <div>
                <p className="small text-muted mb-4 pb-2">Price</p>
                <p className="lead fw-normal mb-0">{props.config.price}</p>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center">
              <div>
                <p className="small text-muted mb-4 pb-2">Total</p>
                <p className="lead fw-normal mb-0">{props.config.total}</p>
              </div>
            </div>
            <div className="change">
              <i class="bi bi-x-square-fill"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square-fill"
                viewBox="0 0 16 16"
                onClick={() => props.onDelete(props.config.id)}
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn-cart" onClick={handelcart}>delete</button> */}
    </div>
  );
};
export default Item;
