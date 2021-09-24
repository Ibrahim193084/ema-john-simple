import React from 'react';
import './Cart.css'
import '../Product/Product.css'
import { parse } from '@fortawesome/fontawesome-svg-core';


const Cart = (props) => {
    // console.log(props)
    const{cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1: product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
       
    }
    // const totalPrice = total.toFixed(2)
    // const shippingCost = props.shipping
    // const totalReducer = (previous,product) => previous + product.price;
    // const total = cart.reduce(totalReducer,0);
  
    for(const product of cart){
       
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;


   
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered:{totalQuantity}</h5>
            <p style={{color: 'red'}}>Total: ${total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p style={{color: 'red'}}>Grand Total: {grandTotal.toFixed(2)}</p>
            <button className="btn-regular">Review your order</button>
        </div>
    );
};

export default Cart;