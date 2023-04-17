import React, { useState } from 'react';
import './Cart.css';

function Cart({ cart, handleRemoveFromCart }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement checkout logic
  };

  // const handleRemove = (id) => {
  //   const updatedCart = cart.filter((item) => item.id !== id);
  //   handleRemoveFromCart(updatedCart);
  // };

  // Remove duplicates and items with quantity of 0 or NaN
  const filteredCart = cart.reduce((acc, item) => {
    if (item.price * item.quantity && !isNaN(item.price * item.quantity)) {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    }
    return acc;
  }, []);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {filteredCart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredCart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  {/* <td>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                    
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-container">
            <form onSubmit={handleSubmit}>
              <h3>Checkout</h3>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <button type="submit">Submit</button>
            </form>
            {/* <button onClick={handleProceedToCheckout}>Proceed to Checkout</button> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
