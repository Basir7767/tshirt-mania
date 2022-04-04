import React from 'react';
import './Tsirt.css'
const Tshirt = ({ handleAddToCart, tShirt }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:$ {price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To cart</button>
        </div>
    );
};

export default Tshirt;