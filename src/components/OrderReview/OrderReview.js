import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    const history = useHistory()
    const handlePlaceOrder = () =>{
        history.push("/placeorder")
        setCart([])
        clearTheCart()

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem product = {product} key = {product.key} handleRemove={handleRemove}></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
            <button onClick={handlePlaceOrder}
            className="btn-regular">Place Order</button>
                </Cart>
            </div>
         
        </div>
    );
};

export default OrderReview;