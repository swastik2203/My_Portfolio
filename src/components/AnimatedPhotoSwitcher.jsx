import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedPhotoSwitcher = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    // Auto-switch every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimated((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex items-center justify-center gap-8">
            {/* Instagram-Style Circular Avatar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                {/* Animated Gradient Ring (Instagram-style) */}
                <motion.div
                    className="absolute inset-0 rounded-full p-1"
                    style={{
                        background: 'linear-gradient(45deg, #C084FC, #F472B6, #3B82F6, #C084FC)',
                        backgroundSize: '200% 200%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {/* Inner Circle Container */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-black p-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {isAnimated ? (
                                <motion.img
                                    key="animated"
                                    src="/images/avatar-animated.png"
                                    alt="Swastik Mund - Cyber Mode"
                                    initial={{ opacity: 0, scale: 1.2, rotate: 180 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <motion.img
                                    key="real"
                                    src="/images/real-photo.jpg"
                                    alt="Swastik Mund"
                                    initial={{ opacity: 0, scale: 1.2, rotate: 180 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Pulsing Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        boxShadow: [
                            '0 0 30px rgba(192, 132, 252, 0.5)',
                            '0 0 50px rgba(59, 130, 246, 0.7)',
                            '0 0 30px rgba(244, 114, 182, 0.5)',
                            '0 0 50px rgba(192, 132, 252, 0.7)',
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Mode Indicator */}
                <motion.div
                    key={isAnimated ? 'cyber' : 'real'}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#C084FC] to-[#3B82F6] rounded-full text-white text-xs font-bold shadow-lg"
                >
                    {isAnimated ? '🎨 CYBER' : '📸 REAL'}
                </motion.div>

                {/* Click to Toggle */}
                <button
                    onClick={() => setIsAnimated(!isAnimated)}
                    className="absolute inset-0 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                >
                    <span className="text-white text-sm font-semibold bg-black/70 px-4 py-2 rounded-full">
                        Click to Switch
                    </span>
                </button>
            </motion.div>

            {/* Name Section */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
            >
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-2"
                    style={{
                        background: 'linear-gradient(135deg, #C084FC, #F472B6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    SWASTIK
                </motion.h2>
                <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-3"
                    style={{
                        background: 'linear-gradient(135deg, #3B82F6, #C084FC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    MUND
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-[#94A3B8] font-semibold"
                >
                    Backend Engineer • DevOps
                </motion.p>
            </motion.div>
        </div>
    );
};

export default AnimatedPhotoSwitcher;
