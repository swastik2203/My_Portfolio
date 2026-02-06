import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Experience' },
    { id: 4, link: 'Projects' },
    { id: 5, link: 'Skills' },
    { id: 6, link: 'Contact Me' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 px-4 flex justify-between items-center z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
        }`}
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent">Swastik</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-2">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              className="px-4 py-2 cursor-pointer text-gray-400 hover:text-[#C084FC] font-medium transition-all duration-300 hover:scale-105 rounded-lg hover:bg-[#C084FC]/10"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-[#8892B0] hover:text-[#64FFDA] md:hidden transition-colors duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0A192F]/95 backdrop-blur-lg">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

