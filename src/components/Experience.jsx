import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const experiences = [
        {
            id: 1,
            company: 'Seekright AI',
            companyUrl: 'https://seekright.com/',
            role: 'Backend Developer | DevOps',
            period: 'Nov 2024 – Present',
            location: 'Bengaluru, KA',
            achievements: [
                'Designed and developed Node.js + Express backend with 7 REST APIs for video processing: batch uploads (5GB files, 20+ concurrent), WebSocket real-time status updates, and Python script integration. Introduced file watchers and background job queues for large-scale batch operations.',
                'Migrated critical Python APIs (2000+ line monolithic files) to Node.js microservices, improving response times 4-5x through better I/O handling and modular architecture. Refactored business logic into separate service layers for maintainability.',
                'Instrumented end-to-end production monitoring using Prometheus and Grafana across API servers and client processing systems. Created custom dashboards tracking API response times, database query performance (critical for tables with millions of records), request failure rates, and P95/P99 latency metrics.',
                'Executed complete infrastructure migration: on-premise → AWS (EC2, RDS, S3) → Oracle Cloud (OCI). Configured compute instances, networking components (VCN, subnets, security lists), migrated databases, and adapted deployment pipelines. Set up Linux servers from scratch using Nginx, Docker (managed via Portainer), and Redis for session caching.',
                'Optimized AWS S3 storage costs by implementing data retention strategy: configured dashboard to display only 3-month rolling window of anomaly images and processing videos, archiving 3 years of historical POC and production data while maintaining automated backup workflows.',
                'Streamlined CI/CD pipelines and Docker multi-stage builds, reducing image size by 60% using Alpine base images and separating build dependencies from runtime layers.',
            ],
            techStack: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'AWS', 'Oracle Cloud', 'Docker', 'Prometheus', 'Grafana', 'Redis', 'Nginx'],
        },
        {
            id: 2,
            company: 'Mindfire Solutions',
            companyUrl: 'https://www.mindfiresolutions.com/',
            role: 'FileMaker Developer',
            period: 'Sept 2024 – Oct 2024',
            location: 'Bhubaneswar, Odisha',
            achievements: [
                'Established workflow automation systems using Claris FileMaker and JavaScript, improving internal business process efficiency.',
            ],
            techStack: ['FileMaker', 'JavaScript'],
        },
        {
            id: 3,
            company: 'Neophyte Ambient Intelligence',
            role: 'Backend Developer Intern',
            period: 'Jan 2024 – June 2024',
            location: 'Remote',
            achievements: [
                'Developed REST APIs using Node.js, Express, MongoDB for computer vision platforms. Designed NoSQL schemas and optimized aggregation pipelines.',
            ],
            techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        },
    ];

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div name="Experience" className="section-container">
            <div className="max-w-screen-lg mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Work Experience</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] rounded-full"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#C084FC] to-transparent"></div>

                    {/* Experience Cards */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-8 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-8px] md:left-[24px] top-6 w-4 h-4 rounded-full bg-[#C084FC] border-4 border-[#0A192F] animate-glow"></div>

                                {/* Card */}
                                <div className="glass-card rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-[#3B82F6] font-semibold mb-2">
                                                <FaBriefcase />
                                                {exp.companyUrl ? (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-[#C084FC] transition-colors duration-300 underline"
                                                    >
                                                        {exp.company}
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                            <p className="text-[#94A3B8] text-sm">
                                                {exp.period} • {exp.location}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => toggleExpand(exp.id)}
                                            className="mt-4 md:mt-0 self-start md:self-center px-4 py-2 rounded-lg border border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC]/10 transition-all duration-300 flex items-center gap-2"
                                        >
                                            {expandedId === exp.id ? (
                                                <>
                                                    <span>Show Less</span>
                                                    <FaChevronUp />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Show More</span>
                                                    <FaChevronDown />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Achievements - Expandable */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedId === exp.id ? 'auto' : 0,
                                            opacity: expandedId === exp.id ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-[#C084FC]/20">
                                            <h4 className="text-[#3B82F6] font-semibold mb-3">Key Achievements:</h4>
                                            <ul className="space-y-3 text-[#94A3B8]">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex gap-3">
                                                        <span className="text-[#C084FC] mt-1.5">▹</span>
                                                        <span className="flex-1">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Tech Stack */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.techStack.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
