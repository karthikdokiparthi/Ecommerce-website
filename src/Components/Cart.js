import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, proceedToPayment }) => {
    const total = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>
                                    <button onClick={() => decreaseQuantity(item)}>-</button>
                                    {item.quantity}
                                    <button onClick={() => increaseQuantity(item)}>+</button>
                                    RS.{item.newPrice}
                                </p>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: Rs.{total.toFixed(2)}</h3>
                    <button className="proceed-to-payment" onClick={proceedToPayment}>Proceed to Payment</button>
                </>
            )}
        </div>
    );
};

export default Cart;
