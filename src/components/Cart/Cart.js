import React from 'react';
import './Cart.css'
import '../Product/Product.css'


const Cart = (props) => {
    const{cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const totalPrice = total.toFixed(2)
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered:{cart.length}</h5>
            <p style={{color: 'red'}}>Total: ${totalPrice}</p>
            <button className="btn-regular">Review your order</button>
        </div>
    );
};

export default Cart;