import React, { useState } from "react";
import Item from "./Item";

const Cart = () => {
     const [Configs , setConfigs] = useState([
    {
      id:1,
      name: "iPhad",
      color: "red",
      quantity: "9",
      price: "100$",
      total: "100$",
      remove:"dfsd",
    },
    {
      id:2,  
      name: "iPhone",
      color: "blue",
      quantity: "1",
      price: "200$",
      total: "200$",
    },
    {
      id:3,
      name: "apple watch",
      color: "green",
      quantity: "82",
      price: "500$",
      total: "500$",
    },
    
  ]);
  
  
  const deleteBtn = (id) =>{
    setConfigs(Configs.filter(item => item.id !== id))
  }

  return (
    <div>
      {Configs.map((cfg) => (
        <Item key={cfg.id} config={cfg}  onDelete={deleteBtn}/>
      ))}
      

    </div>
  );

};
export default Cart;
