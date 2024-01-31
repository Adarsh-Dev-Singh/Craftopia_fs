import React from 'react';
import { useParams } from 'react-router-dom';

const PotteryFullDetails = ({ potteries }) => {
  const { potteryId } = useParams();
  const parsedPotteryId = parseInt(potteryId);
  const pottery = potteries.find((e) => e.id === parsedPotteryId);

  if (!pottery) {
    return <div>Pottery not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 style={{fontSize:'1.5em',fontWeight:'bold'}} className="my-4 text-center">{pottery.title}<br /></h1>
      <div className="flex flex-wrap">
        <div className="w-full rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
          <img style={{borderRadius:'20px'}} className="w-full h-auto" src={pottery.urlToImage} alt={pottery.title} />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
          <h3 style={{fontSize:'1.3em',fontWeight:'bold'}} className="my-3">Pottery Description</h3>
          <p style={{fontSize:'1em',fontStyle:'italic'}}>{pottery.description}</p>
          <br />
          <h1 style={{fontSize:'1.5em',fontWeight:'bold'}}> Price: Rs {pottery.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default PotteryFullDetails;
