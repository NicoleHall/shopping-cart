//for single item

import React from 'react';

const CartItem = (props) => {
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-8">{props.item.name}</div>
        <div className="col-md-2">{props.item.priceInCents}</div>
        <div className="col-md-2">{props.item.quantity}</div>
      </div>
    </div>
  )
}

export default CartItem
