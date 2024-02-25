import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Handle error: Token not found
          console.error('Token not found in local storage');
        
          return;
        }
        const response = await axios.get('http://localhost:3000/api/v1/items',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle error: Token not found
        console.error('Token not found in local storage');
        return;
      }
      await axios.delete(`http://localhost:3000/api/v1/items/${id}`,{headers: {
        'Authorization': `Bearer ${token}`
      }});
      
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map((item) => (
        <li className='flex ' key={item.id}>
          <div className="grid items-center gap-x-8 gap-y-2 grid-cols-3">
        <img  style={{borderRadius:'150px'}} className="object-scale-down h-48 w-96 my-2 " src={item.urlToImage} alt={item.title} />
          <div ><b>{item.title}</b> -  <i>Rs {item.price} only</i>
          <br/>
          <br/>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveItem(item._id)}>Remove</button>
          </div>
      </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Cart;
