import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, price, seller, name, ratings } = props.product;
    const addToCard = props.addToCard;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='Product-info'>
                <h6 className='Product-name'>{name}</h6>
                <p className='Product-price'>Price : $ {price}</p>
                <p className='Product-seller'> Manufacturer : {seller}</p>
                <p className='Product-rating'> Rating : {ratings}  Star</p>
                <button onClick={() => addToCard(props.product)} className='product-btn'>AddToCart</button>
            </div>
        </div>
    );
};

export default Product;