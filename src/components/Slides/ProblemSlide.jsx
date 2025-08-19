import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCheckCircle, FiStar, FiClock, FiUsers, FiZap } from 'react-icons/fi';

const ProblemSlide = () => {
  return (
    <div className="slide problem-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          The Challenge & Solution
        </motion.h2>

        <div className="grid-2" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
              color: 'white'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
              <FiAlertTriangle size={48} style={{ marginBottom: 'var(--spacing-md)' }} />
              <h3>Initial Problems</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiStar size={20} />
                <span>2.5 star rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiAlertTriangle size={20} />
                <span>Frequent crashes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiClock size={20} />
                <span>Manual builds (1+ day)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiAlertTriangle size={20} />
                <span>No architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
              color: 'white'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
              <FiCheckCircle size={48} style={{ marginBottom: 'var(--spacing-md)' }} />
              <h3>Solutions Achieved</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiStar size={20} />
                <span>3.5 star rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiZap size={20} />
                <span>Automated CI/CD</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiUsers size={20} />
                <span>50K+ users</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <FiCheckCircle size={20} />
                <span>Clean Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 'var(--spacing-2xl)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-xl)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--primary-purple)' }}>
              40%
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Rating Improvement
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--primary-purple)' }}>
              95%
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Build Time Reduction
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--primary-purple)' }}>
              75%
            </div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Crash Reduction
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlide;
