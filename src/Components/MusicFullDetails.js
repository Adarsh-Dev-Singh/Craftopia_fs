import {useState} from 'react';
import { useParams } from 'react-router-dom';

const MusicFullDetails = ({ musics,addToCart  }) => {
  const { musicId } = useParams();
  const parsedMusicId = parseInt(musicId);
  const music = musics.find((e) => e.id === parsedMusicId);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(music);
    setAddedToCart(true);
  };

  if (!music) {
    return <div>Music not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 style={{fontSize:'1.5em',fontWeight:'bold'}} className="my-4 text-center">{music.title}<br /></h1>
      <div className="flex flex-wrap">
        <div className="w-full rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
          <img style={{borderRadius:'20px'}} className="w-full h-auto" src={music.urlToImage} alt={music.title} />
        </div>
        <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
          <h3 style={{fontSize:'1.3em',fontWeight:'bold'}} className="my-3">Music Description</h3>
          <p style={{fontSize:'1em',fontStyle:'italic'}}>{music.description}</p>
          <br />
          <p style={{fontSize:'1.5em',fontWeight:'revert'}}>Check the Music : </p>

          <br />
          <audio controls >
       <source src={music.urlToAudio} type="audio/mpeg" />
        </audio>
          <br />
          <h1 style={{fontSize:'1.5em',fontWeight:'bold'}}> Price: Rs {music.price} for the show</h1>
          {addedToCart ? (
            <button disabled>Added to Cart</button>
          ) : (
            <button onClick={handleAddToCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicFullDetails;
