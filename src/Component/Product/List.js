import { Line } from "react-bootstrap-icons";
import ProductPage from "./ProductPage";
import { useDispatch } from "react-redux";

function List(props) {
  let addToCart = useDispatch();
  let producthandler = useDispatch();
  return (
    <div className="row div_carf">
      {props.products.map((cfg) => (
        <div className="col-6 col-sm-6 col-md-6 mb-4 col-lg-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={cfg.picture}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{cfg.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{cfg.price}</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a
                href="#"
                className="card-link"
                onClick={() => {
                  addToCart({ type: "ADD_CART" });
                }}
              >
                Add to Card
              </a>
              <a
                href="#"
                className="card-link"
                onClick={() => {
                  producthandler({
                    type: "REMOVE_PRODUCT",
                    payload: {
                      id: cfg.id,
                    },
                  });
                }}
              >
                Remove
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
