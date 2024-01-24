// ArtCards.js

import React from 'react';
import { Link } from 'react-router-dom';

const ArtCards = ({ art }) => {
  return (
    <div >
      <div  className="max-w-sm rounded overflow-hidden shadow-lg" style={{ margin: '15px', padding: '10px', textAlign: 'center' ,borderRadius:'25px'}}>
        <img style={{borderRadius:'20px'}} src={art.urlToImage} className="w-full" alt={art.title} />
        <div className="px-6 py-4">
          <h5 className="font-bold text-xl mb-2">{art.title}</h5>
          <p className="text-gray-700 text-base">{art.description.slice(0, 80)}...</p>
          <br/>
          <Link to={`/arts/${art.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View more</button>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default ArtCards;
