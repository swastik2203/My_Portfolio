import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const FixedResumeButton = () => {
    return (
        <motion.a
            href="/Resume.pdf"
            download
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="fixed bottom-8 right-8 z-50 group hidden lg:flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#C084FC] to-[#F472B6] rounded-full font-bold text-white shadow-[0_0_30px_rgba(192,132,252,0.5)] hover:shadow-[0_0_50px_rgba(192,132,252,0.8)] hover:scale-110 transition-all duration-300"
        >
            <BsFillPersonLinesFill className="text-xl" />
            <span>Resume</span>

            {/* Animated glow ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C084FC] to-[#F472B6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
        </motion.a>
    );
};

export default FixedResumeButton;
