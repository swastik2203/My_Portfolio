import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import AnimatedCharacter from './AnimatedCharacter';

const Home = () => {
  return (
    <div name="Home" className="min-h-screen w-full flex items-center justify-center pt-20 px-4 relative">
      {/* Radial Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C084FC] rounded-full mix-blend-normal filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6] rounded-full mix-blend-normal filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F472B6] rounded-full mix-blend-normal filter blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center w-full"
        >
          {/* Animated 3D Character */}
          <AnimatedCharacter />

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
              Building <span className="text-[#3B82F6] font-semibold">scalable APIs</span> and{' '}
              <span className="text-[#3B82F6] font-semibold">data-intensive systems</span> with{' '}
              <span className="text-[#C084FC] font-semibold">1.5+ years</span> of experience
            </p>
            <p className="text-[#C084FC] text-base md:text-lg mt-4 font-mono">
              📍 Bengaluru, India
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="Experience"
              smooth
              duration={500}
              className="group btn-primary flex items-center gap-2 cursor-pointer"
            >
              View Experience
              <span className="group-hover:rotate-90 transition-transform duration-300">
                <TiArrowRightThick size={20} />
              </span>
            </Link>

            <a
              href="/Resume.pdf"
              download
              className="group px-6 py-3 font-semibold rounded-lg border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC]/10 transition-all duration-300 flex items-center gap-2"
            >
              <HiDownload size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
            className="mt-16"
          >
            <div className="w-6 h-10 border-2 border-[#C084FC] rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-[#C084FC] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;