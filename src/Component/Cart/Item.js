// import { ArrowRight } from 'react-bootstrap-icons';
import { useState } from "react";
import Button from "./CartBadge";

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
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  className="img-fluid" alt="Generic placeholder image" />
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0">{props.config.name}</p>
                </div>a
                <button type="button" className="btn btn-link btn-icon" onClick={()=> props.onDelete(props.config.id) }>delete</button>
                <button type="button" className="btn btn-link btn-icon" onClick={handlercounter}>0</button>
                
              </div>
              
              <div className="col-md-2 d-flex justify-content-center">


                <div>
                  <p className="small text-muted mb-4 pb-2">Color</p>
                  <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: props.config.color }}>{props.config.color}</i>
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
            </div>

          </div>
        </div>
      {/* <button className="btn-cart" onClick={handelcart}>delete</button> */}
    </div>
  );
};
export default Item;
