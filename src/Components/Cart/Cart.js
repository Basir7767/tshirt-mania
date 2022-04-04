import React from 'react';
import './Cart.css'
const Cart = ({ handleRemoveFromCart, cart }) => {
    // Conditional rendering option
    // 1.Element option 
    // 2.ternary operator condition ? true : false
    // 3. && operator (shorthand)
    // 4. || 
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Ohh kipta, koros kor</h5>
            <p>Kinos na ken</p>
        </div>
    }
    else if (cart.length == 1) {
        command = <p>Please Add more item..</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div >
            <h2>Item Selected:{cart.length} </h2>

            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button></p>
                )
            }
            {command}
            {cart.length == 0 || <p className='orange'>YaH you are buying</p>}
            {cart.length == 3 && <div className='orange'>
                <h5>Trigonal</h5>
                <p>Tin jon ke ki Gift diba</p>
            </div>}
            {cart.length !== 4 ? <p>Keep adding </p> : <button>Remove All</button>}
            {cart.length == 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;