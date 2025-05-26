import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { RxNotionLogo } from "react-icons/rx";
import { FaUnsplash } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { TbBrandGrammarly } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
const Biccas = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-green-100 to-white">
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
          <div className="flxed md:hidden w-full bg-gray-100 px-4 ">
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
            <div className="flex flex-col  w-fit">
              <button className="text-nav text-base">Login</button>
              <button className="bg-logo w-20 h-10 rounded-[10px] text-nav2">
                Sign Up
              </button>
            </div>
          </div>
        </>
      )}
      {/* banner part start */}
      <section className="bg-gradient-to-l from-green-100 to-white">
        <div className="container m-auto flex flex-col pt-32 px-4 md:flex-row">
          <div>
            <h1 className="text-[80px] font-bold font-inter w-[555px]">
              We’re here to Increase your Productivity
            </h1>
            <img
              src="bannerimg.png"
              alt=""
              className="w-[476px] h-6 mt-5 mb-12"
            />
            <p className="text-lg font-medium font-inter w-[461px]">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
            <div className="flex gap-10 items-center mt-12">
              <button className="bg-logo w-40 h-16  rounded-full text-lg font-medium font-inter text-white">
                Try free trial
              </button>
              <div>
                <button className="text-lg font-inter font-medium flex justify-between items-center gap-3.5">
                  <FiPlayCircle className="w-10 h-10" />
                  View Demo
                </button>
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
      <section className="bg-gradient-to-l from-green-100 to-white pt-32 pb-32 ">
        <div className="container m-auto">
          <h4 className="text-[40px] font-bold font-inter text-center">
            More than 25,000 teams use Collabs
          </h4>
          <div className="flex justify-center gap-[50px] pt-[60px]">
            <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav">
              <FaUnsplash className="w-5 h-7 text-nav" />
              Unsplash
            </p>
            <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav">
              <RxNotionLogo className="w-5 h-7 text-nav" />
              Notion
            </p>
            <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav">
              <FaIntercom className="w-5 h-7 text-nav" />
              INTERCOM
            </p>
            <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav">
              <MdOutlineDescription className="w-5 h-7 text-nav" />
              descript
            </p>
            <p className="flex justify-center items-center text-3xl font-semibold font-inter text-nav">
              <TbBrandGrammarly className="w-5 h-7 text-nav" />
              grammarly
            </p>
          </div>
        </div>
      </section>
      {/* collabs part end */}
      {/* support part start */}
      <section className="bg-bg">
        <div className="container m-auto flex flex-col lg:flex-row pt-[60px] justify-between gap-12">
          <div className="lg:">
            <h3 className="w-[617px] text-[50px] font-semibold font-inter">
              How we support our pratner all over the world
            </h3>
            <p className="font-inter font-medium text-sm text-nav w-[644px] mt-5">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="flex gap-6 flex-col sm:flex-row ">
              <div>
                <div className="flex mt-[70px] text-amber-300 gap-0.5 mb-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-inter text-lg font-bold">4.9 / 5 rating</p>
                <p className="font-inter font-bold text-lg text-nav mt-5">
                  databricks
                </p>
              </div>
              <div>
                <div className="flex mt-[70px] text-amber-300 gap-0.5 mb-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-star">
                    <FaStar />
                  </span>
                </div>
                <p className="font-inter text-lg font-bold">4.5 / 5 rating</p>
                <p className="font-inter font-bold text-lg text-nav mt-5">
                  Chainalysis
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="w-[60px] h-[60px] bg-white shadow text-green-300 flex justify-center items-center">
                <FiActivity className="w-[30px] h-[30px]" />
              </div>
              <div>
                <h2 className="font-inter font-bold text-3xl text-text">
                  Publishing
                </h2>
                <p className="w-[428px] font-medium text-lg text-nav.5">
                  Plan, collaborate, and publishing your contetn that drivees
                  meaningful engagement and growth for your barnd
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-[30px]">
              <div className="w-[60px] h-[60px] bg-white shadow text-green-300 flex justify-center items-center">
                <GrAnalytics className="w-[30px] h-[30px]" />
              </div>
              <div>
                <h2 className="font-inter font-bold text-3xl text-text">
                  Analytics
                </h2>
                <p className="w-[428px] font-medium text-lg text-nav.5">
                  Analyze your performance and create goegeous report
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-[30px]">
              <div className="w-[60px] h-[60px] bg-white shadow text-green-300 flex justify-center items-center">
                <MdKeyboardCommandKey className="w-[30px] h-[30px]" />
              </div>
              <div>
                <h2 className="font-inter font-bold text-3xl text-text">
                  Engagement
                </h2>
                <p className="w-[428px] font-medium text-lg text-nav.5 mb-[60px]">
                  Quiuckly navigate you anda engage with your adience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* support part end */}
      {/* feature part start*/}
      <section className="pb-[130px]">
        <div className="container m-auto">
          <div className="flex items-center justify-between pt-32">
            <p className="w-[331px] text-[50px] font-inter font-semibold">
              Our Features you cab get
            </p>
            <p className="w-[461px] text-lg font-inter font-medium text-nav ">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
            <button className="w-[162px] h-[66px] bg-logo rounded-full">
              Get Started
            </button>
          </div>
          <div className="flex gap-11 justify-center">
            <div className="pt-[75px]">
              <img
                src="/feature1.png"
                alt=""
                className="w-[364px] h-[430px] pb-5"
              />
              <h5 className="text-3xl font-inter font-semibold">
                Collboration Teams
              </h5>
              <p className="w-[340px] text-lg font-inter font-medium text-nav mt-5">
                Here you can handle projects together with team virtually
              </p>
            </div>
            <div className="pt-[75px]">
              <img
                src="/feature2.png"
                alt=""
                className="w-[364px] h-[430px] pb-5"
              />
              <h5 className="text-3xl font-inter font-semibold">
                Collboration Teams
              </h5>
              <p className="w-[340px] text-lg font-inter font-medium text-nav mt-5">
                Here you can handle projects together with team virtually
              </p>
            </div>
            <div className="pt-[75px]">
              <img
                src="/feature3.png"
                alt=""
                className="w-[364px] h-[430px] pb-5"
              />
              <h5 className="text-3xl font-inter font-semibold">
                Collboration Teams
              </h5>
              <p className="w-[340px] text-lg font-inter font-medium text-nav mt-5">
                Here you can handle projects together with team virtually
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* feature part end */}
      {/* benifit part start */}
      <section className="bg-gradient-to-l from-green-100 to-white pb-[130px]">
        <div className="container m-auto pt-[130px] grid grid-cols-1 md:grid-cols-2">
          <div>
            <h6 className="w-[429px] text-[50px] font-bold font-inter">
              What Benifit Will You Get
            </h6>
            <div>
              <div className="flex items-center gap-5 mt-[50px]">
                <div className="w-5 h-5 bg-icon flex items-center justify-center text-white rounded-full">
                  <FaCheck />
                </div>
                <div>
                  <p>Free Consulting With Experet Saving Money</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-[50px]">
                <div className="w-5 h-5 bg-icon flex items-center justify-center text-white rounded-full">
                  <FaCheck />
                </div>
                <div>
                  <p>Online Banking</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-[50px]">
                <div className="w-5 h-5 bg-icon flex items-center justify-center text-white rounded-full">
                  <FaCheck />
                </div>
                <div>
                  <p>Investment Report Every Month</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-[50px]">
                <div className="w-5 h-5 bg-icon flex items-center justify-center text-white rounded-full">
                  <FaCheck />
                </div>
                <div>
                  <p>Saving Money For The Future</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-[50px]">
                <div className="w-5 h-5 bg-icon flex items-center justify-center text-white rounded-full">
                  <FaCheck />
                </div>
                <div>
                  <p>Online Transection</p>
                </div>
              </div>
            </div>
          </div>
          <img src="/benefit.png" alt="" />
        </div>
      </section>
      {/* benifit part end */}
      {/* Plan part start */}
      <section className="bg-gradient-to-l from-green-100 to-white pt-[130px] pb-[130px]">
        <div className="container m-auto flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="w-[492px] text-[50px] font-inter font-bold">
              Choose Plan
            </h2>
            <p className="w-[492px] text-[50px] font-inter font-bold text-center">
              That’s Right For You
            </p>
            <p className="text-lg font-inter font-bold text-nav mt-10">
              Choose plan that works best for you, feel free to contact us
            </p>
          </div>
          <div className="bg-white shadow flex gap-[38px] rounded-[10px] py-[7px] px-[7px] mt-10 mb-16">
            <button className="text-lg font-medium font-inter ml-[38px]">
              Bil Monthly
            </button>
            <button className="hover:text-white hover:bg-logo text-lg font-inter font-medium py-3.5 px-10 rounded-[10px]">
              Bil Yearly
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-[30px]">
            <div className="bg-white rounded-[20px] text-center pt-10 px-5 pb-[25px]">
              <h3 className="text-3xl font-inter font-semibold text-text">
                Free
              </h3>
              <p className="text-lg font-inter font-medium text-nav mt-2.5">
                Have a go and test your <br /> superpowers
              </p>
              <div className="mt-3">
                <span className="text-lg text-nav font-inter font-medium align-top">
                  $
                </span>
                <span className="text-[50px] text-text font-inter font-semibold">
                  0
                </span>
              </div>
              <ul className="bg-check py-37px space-y-3 px-[37px] py-[25px] text-lg font-inter font-medium text-text">
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Users
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Files
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Public Share & Comments
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Chat Support
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  New income apps
                </li>
                <button className="bg-white shadow text-lg font-inter font-semibold text-logo mt-[27px] py-[17px] px-[65px] rounded-[20px]">
                  Signup for free
                </button>
              </ul>
            </div>
            <div className="bg-logo rounded-[20px] text-center pt-10 px-5 pb-[25px] scale-105">
              <h3 className="text-3xl font-inter font-semibold text-white">
                Pro
              </h3>
              <p className="text-lg font-inter font-medium text-white mt-2.5">
                Experiment the power <br /> of infinite possibilities
              </p>
              <div className="mt-3">
                <span className="text-lg text-white font-inter font-medium align-top">
                  $
                </span>
                <span className="text-[50px] text-white font-inter font-semibold">
                  8
                </span>
              </div>
              <div className="mb-4 rounded-[10px] text-[14px] bg-span text-white font-inter inline-block font-semibold py-2.5 px-1.5 w-[130px]">
                Save $50 a year
              </div>
              <ul className="bg-white py-37px space-y-3 px-[37px] py-[25px] text-lg font-inter font-medium text-text rounded-[10px]">
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Users
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Files
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Public Share & Comments
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Chat Support
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  New income apps
                </li>
                <button className="bg-logo shadow text-lg font-inter font-semibold text-white mt-[27px] py-[17px] px-[65px] rounded-[20px]">
                  Signup for free
                </button>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] text-center pt-10 px-5 pb-[25px]">
              <h3 className="text-3xl font-inter font-semibold text-text">
                Business
              </h3>
              <p className="text-lg font-inter font-medium text-nav mt-2.5">
                Unveil new superpowers and <br /> join the Design Leaque
              </p>
              <div className="mt-3">
                <span className="text-lg text-nav font-inter font-medium align-top">
                  $
                </span>
                <span className="text-[50px] text-text font-inter font-semibold">
                  16
                </span>
              </div>
              <ul className="bg-check py-37px space-y-3 px-[37px] py-[25px] text-lg font-inter font-medium text-text rounded-[10px]">
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Users
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  2 Files
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Public Share & Comments
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  Chat Support
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="bg-logo rounded-full p-1 text-white">
                    <FaCheck />
                  </span>
                  New income apps
                </li>
                <button className="bg-white shadow text-lg font-inter font-semibold text-logo mt-[27px] py-[17px] px-[65px] rounded-[20px]">
                  Signup for free
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Plan part end */}
      {/* saying part start */}
      <section className="bg-footer">
        <div className="container m-auto py-[130px] grid grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="text-[50px] w-[444px] font-inter font-semibold text-white mr-[130px]">
              People are Saying About DoWhith
            </h4>
            <p className="text-lg font-inter font-medium text-nav w-[461px] mt-5">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div class="relative w-[45px] h-[38px] py-10">
              <div class="absolute inset-0 transform -skew-x-12 flex justify-center items-center gap-1">
                <div class="w-2 h-5 bg-reg transform -skew-x-12"></div>
                <div class="w-2 h-5 bg-reg transform -skew-x-12"></div>
              </div>
            </div>
            <p className="w-[461px] text-lg font-inter font-medium text-nav flex flex-col">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
              <span className="mt-10">_ Aria Zinanrio</span>
            </p>
          </div>
          <div className="bg-from pb-[66px]">
            <img src="/Vector.png" alt="Vector" className="mx-auto mt-10"/>
            <h5 className="text-center text-3xl font-inter font-medium text-white mt-2.5">
              Get Started
            </h5>
            <form action="#" className="px-[86px]">
              <div className="mt-2.5">
                <label htmlFor="#" className="block text-lg font-inter font-medium text-white">Email</label>
                <input type="email" className="bg-white mt-5 text-[14px] font-medium font-inter w-[440px] py-[17px] pl-5 rounded-[10px] text-nav" placeholder="Enter your email"/>
              </div>
              <div>
                <label htmlFor="#" className="block text-lg font-inter font-medium text-white mt-5">Message</label>
                <input type="text" className="bg-white mt-5 text-nav pt-5 pb-[43px] w-[440px] pl-5 rounded-[10px]" placeholder="What are you say ?"/>
              </div>
              <button className="bg-logo text-base font-semibold font-inter py-[20px] px-[164px] mt-5 rounded-[10px] text-white">Request Demo</button>
            </form>
          </div>
        </div>
      </section>
      {/* saying part end */}
    </>
  );
};

export default Biccas;
