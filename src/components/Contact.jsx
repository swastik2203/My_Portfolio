import React from "react";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
    <div
      name="Contact Me"
      className="w-full h-screen bg-gradient-to-r from-black via-gray-900 to-black p-4 text-white mt-11"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Contact Me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/c915a893-226d-4b9d-9dfd-f5b0d52df43b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white placeholder-gray-400 border-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white placeholder-gray-400 border-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-from-orange-600 to-yellow focus:outline-none"
            ></textarea>

            <button className="text-black font-bold bg-gradient-to-r from-blue-700 to-gray-100 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
      
    </div>
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black w-full">
        <a href="https://github.com/swastik2203" className="px-4 ms-4 bg-transparent text-white rounded-md hover:scale-110 duration-300 mb-3"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/swastik2203" className="px-4 ms-4 bg-transparent text-white rounded-md hover:scale-110 duration-300 mb-3"><FaLinkedin size={30} /></a>
        <a href="mailto:mundswastik@gmail.com" className="px-4 ms-4 bg-transparent text-white rounded-md hover:scale-110 duration-300 mb-3"><HiOutlineMail size={30} /></a>
        <a href="/Resume.pdf" download={true} className="px-4 ms-4 bg-transparent text-white rounded-md hover:scale-110 duration-300 mb-3"><BsFillPersonLinesFill size={30} /></a>
      </div>
    </>
  );
};

export default Contact;
