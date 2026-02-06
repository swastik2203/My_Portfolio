import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Tilt } from 'react-tilt';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (isInView) {
            setStartCount(true);
        }
    }, [isInView]);

    const stats = [
        { number: 1.5, suffix: '+', label: 'Years Experience', color: '#3B82F6' },
        { number: 15, suffix: '+', label: 'Projects Completed', color: '#C084FC' },
        { number: 10, suffix: '+', label: 'Technologies', color: '#F472B6' },
        { number: 99, suffix: '%', label: 'Client Satisfaction', color: '#60A5FA' },
    ];

    const skills = [
        { name: 'Backend Development', level: 95, icon: '⚙️' },
        { name: 'DevOps & CI/CD', level: 90, icon: '🚀' },
        { name: 'Cloud Architecture', level: 85, icon: '☁️' },
        { name: 'System Design', level: 88, icon: '🏗️' },
    ];

    return (
        <div name="About" className="w-full min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-4">
            <div className="max-w-screen-lg mx-auto" ref={ref}>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] mx-auto rounded-full"></div>
                </motion.div>

                {/* Stats Grid with Count Up */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Tilt
                                options={{
                                    max: 25,
                                    scale: 1.05,
                                    speed: 400,
                                    glare: true,
                                    'max-glare': 0.3,
                                }}
                            >
                                <div
                                    className="relative p-6 rounded-2xl backdrop-blur-sm border-2 hover:border-opacity-100 transition-all duration-300 group overflow-hidden"
                                    style={{
                                        borderColor: `${stat.color}40`,
                                        background: 'rgba(0, 0, 0, 0.5)',
                                    }}
                                >
                                    {/* Glow Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                        style={{ background: stat.color }}
                                    ></div>

                                    <div className="relative z-10 text-center">
                                        <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                                            {startCount && (
                                                <CountUp
                                                    end={stat.number}
                                                    duration={2.5}
                                                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                                                    suffix={stat.suffix}
                                                />
                                            )}
                                        </div>
                                        <div className="text-sm text-[#94A3B8] font-semibold">{stat.label}</div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

                {/* About Content with 3D Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#C084FC]/10 to-[#3B82F6]/10 border border-[#C084FC]/30 backdrop-blur-sm hover:border-[#C084FC] transition-all duration-300">
                                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent">
                                    Who I Am
                                </h3>
                                <p className="text-[#94A3B8] leading-relaxed mb-4">
                                    I'm a <span className="text-[#3B82F6] font-semibold">Backend Engineer</span> and{' '}
                                    <span className="text-[#C084FC] font-semibold">DevOps Specialist</span> with 1.5+ years of experience
                                    building scalable, high-performance systems.
                                </p>
                                <p className="text-[#94A3B8] leading-relaxed">
                                    I specialize in designing robust APIs, optimizing cloud infrastructure, and implementing CI/CD pipelines
                                    that streamline development workflows.
                                </p>
                            </div>
                        </Tilt>
                    </motion.div>

                    {/* Skills Progress Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#F472B6]/10 border border-[#3B82F6]/30 backdrop-blur-sm hover:border-[#3B82F6] transition-all duration-300">
                                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] bg-clip-text text-transparent">
                                    Expertise
                                </h3>
                                <div className="space-y-5">
                                    {skills.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-semibold flex items-center gap-2">
                                                    <span>{skill.icon}</span>
                                                    {skill.name}
                                                </span>
                                                <span className="text-[#C084FC] font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                                                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#C084FC] rounded-full"
                                                    style={{
                                                        boxShadow: '0 0 10px rgba(192, 132, 252, 0.5)',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center"
                >
                    <a
                        href="#Contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#C084FC] to-[#F472B6] rounded-full font-bold text-white shadow-[0_0_30px_rgba(192,132,252,0.5)] hover:shadow-[0_0_50px_rgba(192,132,252,0.8)] hover:scale-110 transition-all duration-300"
                    >
                        Let's Work Together 🚀
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
