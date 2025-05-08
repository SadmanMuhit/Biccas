import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Biccas = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <nav>
        <div className="container m-auto flex justify-between items-center sm:px-[60px] px-4">
          <h3 className="text-[50px] text-logo font-semibold font-inter">
            Biccas
          </h3>
          <ul className="md:flex gap-10 font-inter font-medium text-lg text-nav hidden">
            <li>
              <a href="" className="hover:text-black duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black duration-300">
                Product
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black duration-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black duration-300">
                About Us
              </a>
            </li>
          </ul>
          <div className="md:flex gap-5 text-base font-inter font-medium hidden">
            <button className="text-nav text-base font-medium font-inter">
              Login
            </button>
            <button className="bg-logo w-20 h-10 rounded-[10px] text-nav2 text-base font-inter font-medium">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <FaBars onClick={() => setisopen(!isopen)} />
          </div>
        </div>
      </nav>
      {isopen && (
        <>
          <div className="flxed md:hidden w-full bg-gray-100 px-4">
            <ul className="gap-10 font-inter font-medium text-lg text-nav md:hidden">
              <li>
                <a href="" className="hover:text-black duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black duration-300">
                  Product
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black duration-300">
                  About Us
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 w-fit pb-2">
              <button className="text-nav text-base">Login</button>
              <button className="bg-logo w-20 h-10 rounded-[10px] text-nav2">
                Sign Up
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Biccas;
