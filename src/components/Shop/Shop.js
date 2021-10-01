import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [displayProducts,setDisplayProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data=> {setProducts(data);
            setDisplayProducts(data);
        })
    },[])

    //localstorage useEffect
    useEffect(() =>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for(const key in savedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct)
            }
        }
        
            setCart(storedCart)
        }
    },[products])
    const handleAddToCart = (product)=> {
        const newCart = [...cart,product]
        const existing = cart.find(c=> c.key === product.key);
        // if(existing){
        //     product.quantity = product.quantity + 1;
        // }
        // else{
        //     product.quantity = 1;
        //     newCart.push(product);
        // }
        setCart(newCart)
        //save to local storage for now
        addToDb(product.key)
        // console.log(product);

    }

    let totalQuantity = 0;
    for(const product of cart){
        product.quantity = !product.quantity ? 1: product.quantity;
        totalQuantity = totalQuantity + product.quantity;
       
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProducts.length)
        setDisplayProducts(matchedProducts)
    }
    
    return (
        <div>
             <div className="input-div">
                <input className="input" onChange={handleSearch}
                type="text" placeholder="Search" /><span style={{color: 'white', fontWeight: '800'}}>{element}<small style={{color: 'rgb(240, 187, 53)'}}>{totalQuantity}</small></span>
            </div>
        
            <div className="shop-container">
            <div className="product-container">
                {
                    displayProducts.map(product => <Product product ={product} key ={product.key}
                        handleAddToCart={handleAddToCart} ></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;