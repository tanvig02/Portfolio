// rafce
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="">
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </div>

      {/* menu */}
      {/* anything above minimun width should display, or its hidden */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      {/* <div onClick={handelClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}

      {/* Mobile Menu */}
      {/* <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#7b98c3] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div> */}

      <div className="flex flex-col relative">
        <button
          onClick={handelClick}
          className=" md:hidden bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex flex-col items-center"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>

        <div className="inline-block relative ml-[-45px] ">
          <ul
            onClick={handelClick}
            // className="  hidden text-gray-700 pt-1 group-hover:block "
            className={
              !nav ? "hidden " : "  text-gray-700 pt-1 absolute block "
            }
          >
            <li>
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icon */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-black">
            <a href="/" className="flex justify-between w-full text-gray-300">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-green-600">
            <a href="/" className="flex justify-between w-full text-gray-300">
              Hackerrank <FaHackerrank size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-purple-600">
            <a href="/" className="flex justify-between w-full text-gray-300">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
