import React from "react";

export default function CartHeader(): JSX.Element {
  return (
    <>
      <h1 className="main">Shopping Cart</h1>
      <ul className="product-list table-head">
        <li className="prodcur-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-actions"></div>
        </li>
      </ul>
    </>
  );
}
