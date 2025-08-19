import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiArrowDown, FiArrowUp, FiDatabase, FiSmartphone, FiCpu } from 'react-icons/fi';

const ArchitectureSlide = () => {
  return (
    <div className="slide architecture-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Clean Architecture Implementation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
          style={{ maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}
        >
          Dependency Injection for decoupled, testable code
        </motion.p>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)'
          }}
        >
          <img
            src="/images/how_clean_architecture_work.png"
            alt="How Clean Architecture Works"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '400px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          />
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-lg)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Presentation Layer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="architecture-layer"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <FiSmartphone size={32} />
              <h3 style={{ margin: 0 }}>Presentation Layer</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Flutter UI
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                BLoC Pattern
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Widgets
              </span>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <FiArrowDown size={24} color="var(--primary-purple)" />
          </motion.div>

          {/* Domain Layer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="architecture-layer"
            style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <FiCpu size={32} />
              <h3 style={{ margin: 0 }}>Domain Layer</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Use Cases
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Entities
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Repository Interfaces
              </span>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <FiArrowDown size={24} color="var(--primary-purple)" />
          </motion.div>

          {/* Data Layer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="architecture-layer"
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <FiDatabase size={32} />
              <h3 style={{ margin: 0 }}>Data Layer</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                API Services
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                SharedPreferences
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Repository Implementations
              </span>
            </div>
          </motion.div>
        </div>

        {/* Architecture Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            marginTop: 'var(--spacing-2xl)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-lg)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <FiLayers size={24} style={{ marginBottom: 'var(--spacing-xs)' }} />
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>Separation of Concerns</div>
          </div>

          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <FiArrowUp size={24} style={{ marginBottom: 'var(--spacing-xs)' }} />
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>Dependency Inversion</div>
          </div>

          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <FiCpu size={24} style={{ marginBottom: 'var(--spacing-xs)' }} />
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600' }}>Testability</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
