import React from 'react'
import img from '../Assets/gallery_img3.jpg'
import { RxBorderDotted } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="my-6">
      <div className="bg-black w-[70%] h-[600px] mx-auto ">
        <img src={img} alt="image" className="mx-auto w-[80%] h-[90%]" />
        <div className="w-[200px] h-[10%] mx-auto flex items-center">
          <button className="bg-gray-300 rounded-lg w-[80%] text-[80px] mx-5 h-[60%]">
            <RxBorderDotted className="mx-auto text-[50px] h-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery
