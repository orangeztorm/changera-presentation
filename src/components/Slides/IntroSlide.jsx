import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import PhoneMockup from '../PhoneMockup/PhoneMockup';

const IntroSlide = () => {
  return (
    <div className="slide intro-slide">

      <div className="slide-content" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-3xl)',
        alignItems: 'center',
        maxWidth: '1400px'
      }}>
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: 'left' }}
        >
          {/* Changera Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: 'var(--spacing-2xl)' }}
          >
            <a
              href="https://changera.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'transform var(--transition-normal)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <img
                src="/images/changera.png"
                alt="Changera Logo"
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  height: 'auto',
                  filter: 'brightness(0) saturate(100%)',
                  marginBottom: 'var(--spacing-sm)',
                  cursor: 'pointer'
                }}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: '#64748b',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500'
              }}>
                <span>Visit Changera</span>
                <FiExternalLink size={14} />
              </div>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: '#1e293b',
              fontSize: 'var(--font-size-5xl)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--spacing-lg)'
            }}
          >
            Changera Mobile Slide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              color: '#475569',
              fontSize: 'var(--font-size-xl)',
              lineHeight: '1.6',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: '500px'
            }}
          >
            Complete architecture rebuild transforming a struggling fintech app into a robust, scalable platform serving 50,000+ users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)'
            }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)'
            }}>
              <span style={{
                color: '#1e293b',
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600'
              }}>
                Mobile Developer | Flutter & Clean Architecture
              </span>
            </div>

            <div style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}>
              <span style={{
                background: 'rgba(59, 130, 246, 0.1)',
                color: '#1e40af',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                Flutter
              </span>
              <span style={{
                background: 'rgba(139, 92, 246, 0.1)',
                color: '#7c3aed',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                Clean Architecture
              </span>
              <span style={{
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#059669',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                50K+ Users
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Phone Mockup */}
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{
            transform: 'scale(1.2)',
            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
          }}>
            <PhoneMockup
              imageSrc="/images/dashboard.png"
              title=""
              description=""
            />
          </div>
        </motion.div>
      </div>


      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .slide-content {
            grid-template-columns: 1fr !important;
            gap: var(--spacing-xl) !important;
            text-align: center !important;
          }
          .slide-content > div:first-child {
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .slide-content {
            gap: var(--spacing-lg) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroSlide;
