import React from 'react';
import './Oder.css'

const Oder = (props) => {
    // const ProductPrice = cart.price;
    // console.log(ProductPrice)
    // const total = 0;
    // const TotalPrice = () => {
    //     const newPrice = total * ProductPrice;
    // }
    return (
        <div className='Oder-info'>
            <h2>Oder summary</h2>
            <h2>Selected item : {props.length}</h2>
            <h2>Total Price : {TotalPrice} </h2>
        </div>
    );
};

export default Oder;