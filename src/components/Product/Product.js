import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const {name, img, seller, price, stock, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className ="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div style ={{marginLeft: '15px'}}>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                initialRating={star}
                emptySymbol="far fa-star icon"
                fullSymbol="fas fa-star icon"
                readonly
                ></Rating>
                <br />
                <br />
                <button onClick={()=>props.handleAddToCart(props.product)}
                className="btn-regular">{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;