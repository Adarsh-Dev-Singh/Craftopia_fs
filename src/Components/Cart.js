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
          <li className='flex ' key={item.id}>
            <div className="grid items-center gap-x-8 gap-y-2 grid-cols-3">
          <img  style={{borderRadius:'150px'}} className="object-scale-down h-48 w-96 my-2 " src={item.urlToImage} alt={item.title} />
            <div ><b>{item.title}</b> -  <i>Rs {item.price} only</i>
            <br/>
            <br/>
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
        </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
