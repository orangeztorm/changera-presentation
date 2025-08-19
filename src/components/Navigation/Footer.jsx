import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="presentation-footer"
        >
            <div className="footer-content">
                <div className="footer-links">
                    <a
                        href="https://changera.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span>Changera</span>
                        <FiExternalLink size={14} />
                    </a>
                    <span className="footer-separator">•</span>
                    <span className="footer-text">Mobile Developer Portfolio</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
