import { useEffect, useState } from "react";

function Item({item}) {
 
  return (
    <div className="item">
      <figure className="item__img--wrapper">
        <img src={item.images[0]} alt="" className="item__img" />
      </figure>
      <h2 className="item__title">{item.title}</h2>
      
    </div>
  );
}

export default Item;
