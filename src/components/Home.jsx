import React from 'react'
import {TiArrowRightThick} from 'react-icons/ti'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black my-11 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Welcome to My Portfolio
                </h2>
                <p className='text-gray-200 py-4 max-w-md'>
                    My name is Swastik Mund ,I am a passionate Full-Stack web developer with a knack for transforming ideas into captivating digital experiences. With a strong foundation in web technologies and a creative flair.
                    <p>I am currently Working in MERN Stack.</p>
                </p>
                <div>
                <Link
              to="Projects"
              smooth
              duration={300}
                    className='group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-blue-700 to-gray-100'>
                      Projects
                        <span className='group-hover:rotate-90 duration-300'><TiArrowRightThick size={25} className = 'ml-1' /></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home