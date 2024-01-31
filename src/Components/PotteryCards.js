import React from 'react';
import { Link } from 'react-router-dom';

const PotteryCards = ({ pottery }) => {
  return (
    <div >
      <div  className="max-w-sm rounded overflow-hidden shadow-lg" style={{ margin: '15px', padding: '10px', textAlign: 'center' ,borderRadius:'25px'}}>
        <img style={{height:'269px',borderRadius:'20px'}} src={pottery.urlToImage} className="w-full" alt={pottery.title} />
        <div className="px-6 py-4">
          <h5 className="font-bold text-xl mb-2">{pottery.title}</h5>
          <p className="text-gray-700 text-base">{pottery.description.slice(0, 80)}...</p>
          <br/>
          <Link to={`/potteries/${pottery.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View more</button>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default PotteryCards;
