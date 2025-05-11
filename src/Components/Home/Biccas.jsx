import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { RxNotionLogo } from "react-icons/rx";
import { FaUnsplash } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { TbBrandGrammarly } from "react-icons/tb";
const Biccas = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <nav className="bg-linear-to-bl from-green-100 to-white">
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
            <button className="text-nav text-base font-medium font-inter hover:text-black">
              Login
            </button>
            <button className="bg-logo w-20 h-10 rounded-[10px] text-nav2 text-base font-inter font-medium hover:text-black">
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
      {/* banner part start */}
      <section className="bg-linear-to-bl from-white to-green-100">
        <div className="container m-auto flex pt-32 px-4">
          <div>
            <h1 className="text-[80px] font-bold font-inter w-[555px]">We’re here to Increase your Productivity</h1>
            <img src="bannerimg.png" alt="" className="w-[476px] h-6 mt-8 mb-12"/>
            <p className="text-lg font-medium font-inter w-[461px]">Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
            <div className="flex gap-10 items-center mt-12">
              <button className="bg-logo w-40 h-16  rounded-full text-lg font-medium font-inter text-white">Try free trial</button>
              <div>
                <button className="text-lg font-inter font-medium flex justify-between items-center gap-3.5"><FiPlayCircle className="w-10 h-10"/>View Demo</button>
              </div>
            </div>
          </div>
          <div>
            <img src="banner.png" alt="" />
          </div>
        </div>
      </section>
      {/* banner part end */}
      {/* collabs part start */}
      <section className="bg-linear-to-r from-green-100 to-white pt-32 pb-32">
        <h4 className="text-[40px] font-bold font-inter text-center">More than 25,000 teams use Collabs</h4>
        <div className="flex justify-center gap-[50px] pt-[60px]">
          <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav"><FaUnsplash className="w-8 h-7 text-nav"/>Unsplash</p>
          <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav"><RxNotionLogo className="w-8 h-7 text-nav"/>Notion</p>
          <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav"><FaIntercom className="w-8 h-7 text-nav"/>INTERCOM</p>
          <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav"><MdOutlineDescription  className="w-8 h-7 text-nav"/>descript</p>
          <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav"><TbBrandGrammarly  className="w-8 h-7 text-nav"/>grammarly</p>
        </div>
      </section>
      {/* collabs part end */}
      {/* support part start */}
      <section> 
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 pt-[60px]">
          <h3 className="w-[617px] text-[50px] font-semibold font-inter">How we support our pratner all over the world</h3>
        </div>
      </section>
      {/* support part end */}
    </>
  );
};

export default Biccas;
