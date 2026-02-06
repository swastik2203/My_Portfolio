import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'Smart LangMail',
      description: 'Engineered email job offer parser using Node.js, LangChain, and OpenAI embeddings. Implemented IMAP integration to parse 1000+ emails, extract structured job data (title, salary, company), and store vector embeddings in Pinecone for semantic search queries like \"remote React jobs in Bangalore\".',
      techStack: ['Node.js', 'LangChain', 'OpenAI', 'Pinecone', 'IMAP', 'React.js'],
      github: 'https://github.com/swastik2203/Smart-LangMail',
      demo: 'https://github.com/swastik2203/Smart-LangMail',
      year: '2025',
      featured: true,
      gradient: 'from-[#C084FC] to-[#F472B6]',
    },
    {
      id: 2,
      title: 'Centralized Labour Management System',
      description: 'Architected full-stack workforce management system with Node.js backend, React frontend, and MongoDB. Executed 4-tier RBAC (Super Admin, Admin, Contractor, Worker) with role-based authentication and authorization. Led development of modules for contractor-worker relationship tracking, attendance management, onboarding/offboarding workflows, and hierarchical data visibility across organizational levels.',
      techStack: ['Node.js', 'React.js', 'MongoDB', 'RBAC', 'REST APIs'],
      github: 'https://github.com/swastik2203/CLMS-Backend',
      demo: 'https://clms.geekhub.co.in/login',
      year: '2025',
      featured: true,
      gradient: 'from-[#3B82F6] to-[#C084FC]',
    },
    {
      id: 3,
      title: 'Personalized Assessment Dashboard',
      description: 'Built a comprehensive assessment platform with personalized dashboards for tracking student performance and analytics.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
      github: 'https://github.com/swastik2203/Personalized_Assessment_Dashboard',
      demo: 'https://github.com/swastik2203/Personalized_Assessment_Dashboard',
      year: '2024',
      featured: false,
      gradient: 'from-[#60A5FA] to-[#3B82F6]',
    },
    {
      id: 4,
      title: 'Dozion - Crypto Platform',
      description: 'One-stop destination for cryptocurrency information and tracking. Built with modern web technologies.',
      techStack: ['React.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/swastik2203/dozion-project',
      demo: 'https://dozion.netlify.app/',
      year: '2023',
      featured: false,
      gradient: 'from-[#F472B6] to-[#C084FC]',
    },
  ];

  return (
    <div name="Projects" className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-black text-white py-20 px-4">
      <div className="max-w-screen-lg mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C084FC] to-[#F472B6] mx-auto rounded-full"></div>
          <p className="text-[#94A3B8] mt-4 text-lg">Building scalable solutions with modern technologies</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Tilt
                options={{
                  max: 20,
                  scale: 1.05,
                  speed: 400,
                  glare: true,
                  'max-glare': 0.4,
                }}
              >
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-black/80 to-[#0a0a0a]/80 border border-[#C084FC]/20 backdrop-blur-sm hover:border-[#C084FC]/60 transition-all duration-300 group overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#C084FC] to-[#F472B6] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.title}
                        </h3>
                        <span className="text-sm text-[#94A3B8] font-mono">{project.year}</span>
                      </div>
                      {project.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-[#C084FC] to-[#F472B6] rounded-full text-xs font-bold">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[#94A3B8] mb-6 leading-relaxed line-clamp-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/50 border border-[#3B82F6]/30 rounded-full text-xs text-[#60A5FA] font-mono hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links with Magnetic Effect */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C084FC]/20 to-[#3B82F6]/20 border border-[#C084FC]/50 rounded-lg text-white font-semibold hover:from-[#C084FC]/30 hover:to-[#3B82F6]/30 transition-all duration-300"
                      >
                        <FaGithub className="text-lg" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F472B6]/20 to-[#C084FC]/20 border border-[#F472B6]/50 rounded-lg text-white font-semibold hover:from-[#F472B6]/30 hover:to-[#C084FC]/30 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/swastik2203"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] rounded-full font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300"
          >
            View All Projects on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;