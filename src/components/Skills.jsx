import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiJavascript, SiGo, SiCplusplus,
  SiFastapi, SiFlask, SiDjango, SiReact,
  SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiAmazonaws, SiOracle, SiDocker, SiKubernetes,
  SiPrometheus, SiGrafana, SiLinux, SiNginx,
  SiGit, SiPostman, SiNodedotjs, SiExpress
} from 'react-icons/si';
import { FaDatabase, FaServer, FaCode } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: 'Languages',
      icon: FaCode,
      color: '#C084FC',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Go', icon: SiGo, color: '#00ADD8' },
        { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: FaServer,
      color: '#3B82F6',
      skills: [
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      ],
    },
    {
      category: 'Databases',
      icon: FaDatabase,
      color: '#F472B6',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: FaServer,
      color: '#60A5FA',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
        { name: 'Oracle Cloud', icon: SiOracle, color: '#F80000' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
        { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
      ],
    },
    {
      category: 'Tools & Others',
      icon: FaCode,
      color: '#C084FC',
      skills: [
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
        { name: 'Nginx', icon: SiNginx, color: '#009639' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ],
    },
  ];

  return (
    <div name="Skills" className="w-full min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-screen-lg mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#F472B6] to-[#C084FC] bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#F472B6] mx-auto rounded-full"></div>
          <p className="text-[#94A3B8] mt-4 text-lg">Technologies I work with daily</p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: `${category.color}20`,
                    border: `2px solid ${category.color}40`,
                  }}
                >
                  <category.icon className="text-2xl" style={{ color: category.color }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: category.color }}>
                  {category.category}
                </h3>
              </div>

              {/* Skills Grid with Floating Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2 + skillIndex * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative group"
                    >
                      <div className="p-4 rounded-xl bg-black/50 border-2 border-[#C084FC]/20 backdrop-blur-sm hover:border-[#C084FC]/60 transition-all duration-300 cursor-pointer">
                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"
                          style={{ background: skill.color }}
                        ></div>

                        {/* Pulse Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
                          style={{ borderColor: skill.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />

                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <skill.icon className="text-4xl" style={{ color: skill.color }} />
                          <span className="text-xs text-white font-semibold text-center">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-[#94A3B8] text-lg mb-6">
            Always learning and exploring new technologies
          </p>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#C084FC] to-[#3B82F6] rounded-full font-bold text-white shadow-[0_0_30px_rgba(192,132,252,0.5)]"
          >
            🚀 Constantly Evolving
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;