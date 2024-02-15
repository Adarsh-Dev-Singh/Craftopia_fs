
  import React, { useState, useEffect } from 'react';
  import { Route, Routes } from 'react-router-dom';
  import ArtCards from './Components/ArtCards';
  import ArtFullDetails from './Components/ArtFullDetails'; 
  import MusicCards from './Components/MusicCards';
  import MusicFullDetails from './Components/MusicFullDetails';
  import PotteryCards from './Components/PotteryCards';
  import PotteryFullDetails from './Components/PotteryFullDetails';
  import './output.css';
  import Navbar from './Components/Navbar';
  import Footer from './Components/Footer'; 
  import Home from './Components/Home';
  import Cart from './Components/Cart';

  const App = () => {
    const [arts, setArts] = useState([]);
    const [musics, setMusics] = useState([]);
    const [potteries, setPotteries] = useState([]);

    useEffect(() => {
      fetch('/arts.json') 
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch events (${response.status} ${response.statusText})`);
          }
          return response.json();
        })
        .then((data) => setArts(data.Arts))
        .catch((error) => console.error('Error fetching events:', error));
    }, []);
    useEffect(() => {
      fetch('/musics.json') 
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch Music (${response.status} ${response.statusText})`);
          }
          return response.json();
        })
        .then((data) => setMusics(data.Musics))
        .catch((error) => console.error('Error fetching Musics:', error));
    }, []);
    useEffect(() => {
      fetch('/potteries.json') 
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch Pottery (${response.status} ${response.statusText})`);
          }
          return response.json();
        })
        .then((data) => setPotteries(data.Pottery))
        .catch((error) => console.error('Error fetching Potteries:', error));
    }, []);
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
       setCart([...cart, item]);
      writeCartToJson([...cart, item]);
    };
    const fetchCartData = () => {
      fetch('http://localhost:3001/cartData') // Update URL if needed
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch cart data (${response.status} ${response.statusText})`);
          }
          return response.json();
        })
        .then((data) => setCart(data))
        .catch((error) => console.error('Error fetching cart data:', error));
    };
    useEffect(() => {
      fetchCartData(); 
    }, []);
    
  
    const removeFromCart = (id) => {
      const updatedCart = cart.filter(item => item.id !== id);
      setCart(updatedCart);
      writeCartToJson(updatedCart);
    };

    const writeCartToJson = (cartData) => {
      fetch('http://localhost:3001/writeCartToJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to write cart data to JSON');
        }
        console.log('Cart data written to JSON successfully');
      })
      .catch(error => {
        console.error('Error writing cart data to JSON:', error);
      });
    };
    
    return (
      <>
      <Navbar/>
    <Routes>
        <Route />
        <Route path="/" element={<Home/>}/>
        <Route path="/arts" element={<div  style={{margin:'15px',padding:'15px'}} className='flex flex-wrap md:items-center'>
          {arts.map((art) => (
            <div className="w-full md:w-1/3" key={art.id}>
              <ArtCards art={art} />
            </div>
          ))}
        </div>} />
        <Route
          path="/arts/:artId"
          element={<ArtFullDetails addToCart={addToCart} arts={arts} />}
        />
        <Route />
        <Route />
        <Route path="/potteries" element={<div  style={{margin:'15px',padding:'15px'}} className='flex flex-wrap -mx-4'>
          {potteries.map((pottery) => (
            <div className="w-full md:w-1/3" key={pottery.id}>
              <PotteryCards pottery={pottery} />
            </div>
          ))}
        </div>} />
        <Route
          path="/potteries/:potteryId"
          element={<PotteryFullDetails potteries={potteries} addToCart={addToCart} />}
        />
        <Route />
        <Route path="/musics" element={<div  style={{margin:'15px',padding:'15px'}} className='flex flex-wrap -mx-4'>
          {musics.map((music) => (
            <div className="w-full md:w-1/3" key={music.id}>
              <MusicCards music={music} />
            </div>
          ))}
        </div>} />
        <Route
          path="/musics/:musicId"
          element={<MusicFullDetails musics={musics} addToCart={addToCart}/>}
        />
        <Route path="/cart"
              element={<Cart cart={cart}  removeFromCart={removeFromCart} writeCartToJson={writeCartToJson} />}
            />
      </Routes>
      <Footer/>
      </>
    );
  };

  export default App;
