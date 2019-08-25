import React from 'react';

export default function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 col-lg-2 mx-auto" >
        <img 
          src={img} 
          style={{width: "5rem", height: "5rem"}} 
          className="img-fluid" 
          alt="Product" 
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto" >
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto" >
        <span className="d-lg-none">price: </span>
        {price}
      </div>
      <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0" >
        <div className="d-flex justify-content-center">
          <span 
            className="btn btn-black mx-1" 
            onClick={() => decrement(id)}>
              -
            </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span 
            className="btn btn-black mx-1" 
            onClick={() => increment(id)}>
              +
            </span>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto" >
        <div 
          className="cart-icon"
          onClick={() => removeItem(id)} >
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto" >
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}