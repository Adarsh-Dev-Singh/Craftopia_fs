import React from 'react';
import Slider from "react-slick";
const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <div className='text-5xl font-extrabold'>
        <h1 className='font-mono italic text-3xl leading-loose list-inside text-center py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 '>Experience The Culture</h1>
    </div>
    <div className="slider-container p-5 m-5">
      <Slider {...settings}>
        <div>
        <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/multicolored-abstract-painting-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
        <div>
          <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/red-mountains-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
        <div>
        <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/abstract-art-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
        <div>
        <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/-anime-painting-art-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
        <div>
        <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/music-man-stingray-bass-4-string-sunburst-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
        <div>
        <img src="https://free4kwallpapers.com/uploads/wallpaper-cache/alia-bhatt-singer-wallpaper-400x270-MM-100.jpg" alt="" />
        </div>
      </Slider>
    </div>
    </>

    
  );
}


export default Gallery
