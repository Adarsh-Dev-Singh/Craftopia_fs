import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += Number.parseInt(item.price);
    });
    setTotalPrice(total);
  };

  const handlePlaceOrder = async (e) => {
    calculateTotalPrice(cartItems);

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    try {
      const response = await axios.post("https://craftopianewbackend.up.railway.app/api/v1/order", {
        amount: totalPrice * 100, // Amount is in paisa
        currency: "INR",
        receipt: "qwsaq1",
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const order = response.data;
      console.log(order);

      const options = {
        key: "rzp_test_Oa95jLPD02g5KJ", // Replace with your Razorpay key
        amount: totalPrice * 100, // Amount is in paisa
        currency: "INR",
        name: "Acme Corp", // Replace with your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await axios.post(
            "https://craftopianewbackend.up.railway.app/api/v1/order/validate",
            body,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = validateRes.data;
          console.log(jsonRes);
        },
        prefill: {
          name: "Web Dev Matrix", // Replace with customer's name
          email: "webdevmatrix@example.com",
          contact: "9000000000", // Replace with customer's contact
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      e.preventDefault();
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in local storage');
          return;
        }
        const response = await axios.get('https://craftopianewbackend.up.railway.app/api/v1/items', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setCartItems(response.data.items);
        calculateTotalPrice(response.data.items);
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
        console.error('Token not found in local storage');
        return;
      }
      await axios.delete(`https://craftopianewbackend.up.railway.app/api/v1/items/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setCartItems(cartItems.filter((item) => item._id !== id));
      calculateTotalPrice(cartItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li className='flex' key={item.id}>
            <div className="grid items-center gap-x-8 gap-y-2 grid-cols-3">
              <img style={{ borderRadius: '150px' }} className="object-scale-down h-48 w-96 my-2 " src={item.urlToImage} alt={item.title} />
              <div>
                <b>{item.title}</b> - <i>Rs {item.price} only</i>
                <br />
                <br />
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveItem(item._id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: Rs {totalPrice}</p>
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
