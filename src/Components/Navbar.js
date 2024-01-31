import React from 'react'
// import logo from '../Assets/logo.png'
import { IoSearch } from "react-icons/io5"
import { FaCartArrowDown } from "react-icons/fa"
import { Power1, Power3, gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
const Navbar = () => {

  const app = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#one", 
      { stagger: .1 ,
        y:10, 
        duration: 2 ,
        ease: Power1,
        opacity:0
      })
      //gsap.to(".square2", { rotate: 360, duration: 5 });
      //gsap.to(".square3", { rotate: 360, duration: 5 });
    }, app);

    return () => ctx.revert();
  }, []);


  return (
    <nav className="bg-gray-300" ref={app}>
      <div className="flex items-center justify-between lg:mx-10 p-4" id="one">
        {/* Logo Name */}
        <a href="/" className="flex items-center gap-5">
          <img src='https://th.bing.com/th/id/OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7' className="h-10 w-10 md:h-16 md:w-16" alt="Craftopia Logo" />
          <span className="self-center lg:text-3xl font-bold border-b-4 border-red-600 p-1 font-[Lemon]">
            Craftopia
          </span>
        </a>

        {/* Nav Menu List */}
        <ul className="hidden md:flex p-2 font-bold lg:text-xl">
          <li>
            <a
              href="#"
              className="block px-3 text-gray-900 hover:bg-transparent hover:text-blue-700 font-[Salsa]"
            >
              Home
            </a>
          </li>
          <a
            href="/arts"
            className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
          >
            Art
          </a>
          <li>
            <a
              href="/musics"
              className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
            >
              Music
            </a>
          </li>
          <li>
            <a
              href="/potteries"
              className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
            >
              Pottery
            </a>
          </li>
        </ul>

        {/* Search Div */}
        <div className="hidden md:flex items-center gap-2">
          <IoSearch className="w-4 h-4 lg:w-8 lg:h-8" />
          <input
            type="text"
            id="search-navbar"
            className="block p-2 text-sm md:w-[100px] lg:w-[180px] rounded-lg bg-gray-100 text-gray-900"
            placeholder="Search...."
          />
        </div>

        {/* Cart and Login/Signup Div */}
        <div className="ml-3 flex items-center lg:gap-8">
          <button>
            <FaCartArrowDown className="w-5 h-5 lg:h-8 lg:w-8" />
          </button>
          <button className='text-sm'>Login / Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
