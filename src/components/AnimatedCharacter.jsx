import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCharacter = () => {
    const [isCyber, setIsCyber] = useState(false);

    // Auto-switch every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsCyber((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
            {/* 3D Character with Smooth Transition */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-80 h-80 md:w-96 md:h-96"
            >
                {/* Character Container */}
                <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                        {isCyber ? (
                            <motion.img
                                key="cyber"
                                src="/images/character-cyber.png"
                                alt="Developer Character - Cyber Mode"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(192,132,252,0.6)]"
                            />
                        ) : (
                            <motion.img
                                key="real"
                                src="/images/character-real.png"
                                alt="Developer Character"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        )}
                    </AnimatePresence>

                    {/* Floating Animation */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Mode Indicator Badge */}
                <motion.div
                    key={isCyber ? 'cyber-mode' : 'real-mode'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#C084FC] to-[#3B82F6] rounded-full text-white font-bold text-sm shadow-[0_0_20px_rgba(192,132,252,0.5)]"
                >
                    {isCyber ? '🎨 CYBER MODE' : '👨‍💻 DEVELOPER MODE'}
                </motion.div>

                {/* Click to Toggle Overlay */}
                <button
                    onClick={() => setIsCyber(!isCyber)}
                    className="absolute inset-0 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8"
                >
                    <span className="text-white text-sm font-semibold bg-black/70 px-6 py-2 rounded-full backdrop-blur-sm">
                        Click to Switch Mode
                    </span>
                </button>
            </motion.div>

            {/* Name and Title Section */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
            >
                {/* Name with Gradient */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-2 leading-tight"
                    style={{
                        background: 'linear-gradient(135deg, #C084FC, #F472B6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    SWASTIK
                </motion.h1>
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                    style={{
                        background: 'linear-gradient(135deg, #3B82F6, #C084FC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    MUND
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                        background: 'linear-gradient(135deg, #60A5FA, #C084FC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Backend Engineer
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-[#94A3B8] font-semibold mb-6"
                >
                    DevOps Specialist • Cloud Architect
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                >
                    <div className="px-5 py-3 bg-black/50 border border-[#3B82F6]/30 rounded-xl backdrop-blur-sm hover:border-[#3B82F6] transition-all duration-300">
                        <div className="text-2xl font-bold text-[#3B82F6]">1.5+</div>
                        <div className="text-xs text-[#94A3B8]">Years</div>
                    </div>
                    <div className="px-5 py-3 bg-black/50 border border-[#C084FC]/30 rounded-xl backdrop-blur-sm hover:border-[#C084FC] transition-all duration-300">
                        <div className="text-2xl font-bold text-[#C084FC]">15+</div>
                        <div className="text-xs text-[#94A3B8]">Projects</div>
                    </div>
                    <div className="px-5 py-3 bg-black/50 border border-[#F472B6]/30 rounded-xl backdrop-blur-sm hover:border-[#F472B6] transition-all duration-300">
                        <div className="text-2xl font-bold text-[#F472B6]">AWS</div>
                        <div className="text-xs text-[#94A3B8]">Cloud</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AnimatedCharacter;
