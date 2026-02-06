import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div name="Contact Me" className="section-container">
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-[#C084FC] rounded-full"></div>
          <p className="text-[#94A3B8] mt-4">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form
              action="https://getform.io/f/c915a893-226d-4b9d-9dfd-f5b0d52df43b"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 bg-[#112240] border border-[#C084FC]/30 rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#C084FC] transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 bg-[#112240] border border-[#C084FC]/30 rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#C084FC] transition-colors duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="p-3 bg-[#112240] border border-[#C084FC]/30 rounded-lg text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#C084FC] transition-colors duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Email */}
            <div className="glass-card rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/30">
                  <HiOutlineMail className="text-2xl text-[#C084FC]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:mundswastik@gmail.com"
                    className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    mundswastik@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/30">
                  <HiOutlineMail className="text-2xl text-[#C084FC]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+918144774370"
                    className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    +91-8144774370
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/swastik2203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#C084FC]/10 border border-[#C084FC]/30 hover:bg-[#C084FC]/20 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="text-2xl text-[#C084FC]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/swastik2203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 hover:bg-[#3B82F6]/20 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl text-[#3B82F6]" />
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="p-3 rounded-lg bg-[#F472B6]/10 border border-[#F472B6]/30 hover:bg-[#F472B6]/20 hover:scale-110 transition-all duration-300"
                >
                  <BsFillPersonLinesFill className="text-2xl text-[#F472B6]" />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">Location</h4>
              <p className="text-[#94A3B8]">📍 Bengaluru, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

