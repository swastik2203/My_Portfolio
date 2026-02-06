import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
    const socials = [
        {
            icon: FaGithub,
            href: 'https://github.com/swastik2203',
            label: 'GitHub',
            color: '#C084FC'
        },
        {
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/swastik2203',
            label: 'LinkedIn',
            color: '#3B82F6'
        },
        {
            icon: HiOutlineMail,
            href: 'mailto:mundswastik@gmail.com',
            label: 'Email',
            color: '#F472B6'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6"
        >
            {socials.map((social, index) => (
                <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-black/50 border border-[#C084FC]/30 backdrop-blur-sm transition-all duration-300 hover:border-[#C084FC] hover:bg-[#C084FC]/10 hover:-translate-x-2 hover:scale-110"
                    style={{
                        boxShadow: '0 0 20px rgba(192, 132, 252, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 30px ${social.color}80`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(192, 132, 252, 0.1)';
                    }}
                >
                    <social.icon
                        className="text-2xl transition-colors duration-300"
                        style={{ color: social.color }}
                    />

                    {/* Tooltip */}
                    <span className="absolute left-full ml-4 px-3 py-1 bg-black/90 border border-[#C084FC]/30 rounded-lg text-sm font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {social.label}
                    </span>
                </motion.a>
            ))}

            {/* Vertical line */}
            <div className="w-0.5 h-20 bg-gradient-to-b from-[#C084FC] to-transparent mx-auto mt-2"></div>
        </motion.div>
    );
};

export default SocialSidebar;
