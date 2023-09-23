import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Oder from '../Oder/Oder';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCard] = useState([]);
    useEffect(() => {
        {
            fetch('products.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }, [])

    const addToCard = (product) => {
        const newCart = [...cart, product];
        setCard(newCart)
    }
    return (
        <div className='Shop-container'>
            <div className='product-item'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div>
                <Oder cart={cart}></Oder>
            </div>
        </div>
    );
};

export default Shop;