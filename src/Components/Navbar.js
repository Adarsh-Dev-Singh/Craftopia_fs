import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    history('/');
  };

  // Check if user is logged in
  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setIsLoggedIn(true);
      setUserName((JSON.parse(user)).name); // Set the username from localStorage
    }
  };

  // Call checkLoggedIn when component mounts
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <nav className="bg-gray-300">
      <div className="flex items-center justify-between lg:mx-10 p-4" id="one">
        <Link to="/" className="flex items-center gap-5">
          <img src='https://th.bing.com/th/id/OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7' className="h-10 w-10 md:h-16 md:w-16" alt="Craftopia Logo" />
          <span className="self-center lg:text-3xl font-bold border-b-4 border-red-600 p-1 font-[Lemon]">
            Craftopia
          </span>
        </Link>

        <ul className="hidden md:flex p-2 font-bold lg:text-xl">
          <li>
            <Link
              to="/"
              className="block px-3 text-gray-900 hover:bg-transparent hover:text-blue-700 font-[Salsa]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/arts"
              className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
            >
              Art
            </Link>
          </li>
          <li>
            <Link
              to="/musics"
              className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              to="/potteries"
              className="block px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-[Salsa]"
            >
              Pottery
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <IoSearch className="w-4 h-4 lg:w-8 lg:h-8" />
          <input
            type="text"
            id="search-navbar"
            className="block p-2 text-sm md:w-[100px] lg:w-[180px] rounded-lg bg-gray-100 text-gray-900"
            placeholder="Search...."
          />
        </div>

        <div className="ml-3 flex items-center lg:gap-8">
          <Link to="/cart">
            <FaCartArrowDown className="w-5 h-5 lg:h-8 lg:w-8" />
          </Link>
          {isLoggedIn ? (
            <>
              <span className='text-lr'>{userName}</span>
              <button onClick={handleLogout} className='text-md'>Logout</button>
            </>
          ) : (
            <Link to="/auth" className='text-md'>Login / Register</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
