import cartReducer from "./cart";
import productReducer from "./product";
import { combineReducers } from "redux";

 const redu = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default redu;