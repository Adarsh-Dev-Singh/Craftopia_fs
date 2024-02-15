import React from 'react';

const Cart = ({ cart, removeFromCart, writeCartToJson }) => {
  
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    writeCartToJson();
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="w-full flex rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
          <img style={{borderRadius:'20px'}} className="w-full h-auto" src={item.urlToImage} alt={item.title} />
            <div>{item.title} - Rs {item.price}</div>
        </div>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
