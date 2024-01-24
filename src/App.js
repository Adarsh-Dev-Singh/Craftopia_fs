
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtCards from './Components/ArtCards';
import ArtFullDetails from './Components/ArtFullDetails'; 
import './output.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [arts, setArts] = useState([]);

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

  return (
    <>
    <Navbar/>
   <Routes>
      <Route />
      <Route path="/arts" element={<div className='flex flex-wrap -mx-4'>
        {arts.map((art) => (
          <div className="w-full md:w-1/3" key={art.id}>
            <ArtCards art={art} />
          </div>
        ))}
      </div>} />
      <Route
        path="/arts/:artId"
        element={<ArtFullDetails arts={arts} />}
      />
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
