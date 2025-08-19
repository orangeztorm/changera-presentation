import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiClock, FiUsers, FiShield, FiExternalLink } from 'react-icons/fi';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const ImpactSlide = () => {
  const metrics = [
    {
      icon: FiTrendingUp,
      label: 'Rating Improvement',
      value: '2.5',
      suffix: ' → 3.5★',
      color: '#4ecdc4',
      description: 'App Store rating'
    },
    {
      icon: FiClock,
      label: 'Build Time',
      value: '1',
      suffix: ' day → 30 min',
      color: '#45b7d1',
      description: 'Development efficiency'
    },
    {
      icon: FiUsers,
      label: 'Active Users',
      value: '50',
      suffix: 'K+',
      color: '#96ceb4',
      description: 'Growing user base'
    },
    {
      icon: FiShield,
      label: 'Crash Reduction',
      value: '75',
      suffix: '%',
      color: '#feca57',
      description: 'App stability'
    }
  ];

  return (
    <div className="slide impact-slide">

      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
          style={{ 
            color: 'white',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Impact & Achievements
        </motion.h2>

        <div className="grid-2" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{
                background: metric.color,
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-lg)'
              }}>
                <metric.icon size={36} color="white" />
              </div>

              <h3 style={{ 
                marginBottom: 'var(--spacing-sm)',
                color: 'white',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>{metric.label}</h3>

              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'bold',
                marginBottom: 'var(--spacing-sm)',
                color: metric.color,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                <AnimatedCounter
                  end={parseInt(metric.value)}
                  suffix={metric.suffix}
                  duration={2}
                />
              </div>

              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'rgba(255, 255, 255, 0.9)',
                opacity: 1,
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}>
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Achievement Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: 'var(--spacing-3xl)',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            padding: 'var(--spacing-2xl)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '800px',
            margin: 'var(--spacing-3xl) auto 0'
          }}
        >
          <h3 style={{
            color: '#ffffff',
            marginBottom: 'var(--spacing-lg)',
            fontSize: 'var(--font-size-2xl)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            🎉 Transformation Complete
          </h3>
          <p style={{
            color: '#ffffff',
            fontSize: 'var(--font-size-lg)',
            lineHeight: 1.6,
            marginBottom: 'var(--spacing-lg)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            opacity: 1
          }}>
            Successfully transformed a struggling fintech app into a robust, scalable platform
            serving 50,000+ users with Clean Architecture, automated CI/CD, and comprehensive testing.
          </p>

          {/* Changera Website Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginBottom: 'var(--spacing-lg)' }}
          >
            <a
              href="https://changera.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                color: '#ffffff',
                textDecoration: 'none',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all var(--transition-normal)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span>Learn more about Changera</span>
              <FiExternalLink size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap'
            }}
          >
            <span style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: 'var(--spacing-xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              Clean Architecture
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: 'var(--spacing-xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              Automated CI/CD
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: 'var(--spacing-xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              Comprehensive Testing
            </span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: 'var(--spacing-xs) var(--spacing-sm)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              Performance Optimized
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactSlide;
