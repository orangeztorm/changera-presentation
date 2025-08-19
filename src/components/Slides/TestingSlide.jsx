import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiEye, FiImage, FiPlay } from 'react-icons/fi';

const TestingSlide = () => {
  const testingLevels = [
    {
      icon: FiCheckCircle,
      title: 'Unit Tests',
      description: 'Business logic and use cases',
      coverage: '85%',
      color: '#4ecdc4'
    },
    {
      icon: FiEye,
      title: 'Widget Tests',
      description: 'UI component testing',
      coverage: '90%',
      color: '#45b7d1'
    },
    {
      icon: FiImage,
      title: 'Golden Tests',
      description: 'Visual regression testing',
      coverage: '75%',
      color: '#96ceb4'
    },
    {
      icon: FiPlay,
      title: 'Integration Tests',
      description: 'End-to-end user flows',
      coverage: '70%',
      color: '#feca57'
    }
  ];

  return (
    <div className="slide testing-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Testing Strategy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
          style={{ maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}
        >
          Comprehensive testing approach ensuring code quality and reliability
        </motion.p>

        <div className="grid-2" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {testingLevels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card"
              style={{ textAlign: 'center' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div style={{
                  background: level.color,
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <level.icon size={36} color="white" />
                </div>
              </div>

              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{level.title}</h3>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-md)'
              }}>
                {level.description}
              </p>

              <div style={{
                background: `linear-gradient(90deg, ${level.color} 0%, ${level.color} ${level.coverage}, #e2e8f0 ${level.coverage}, #e2e8f0 100%)`,
                height: '8px',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--spacing-sm)'
              }} />

              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: level.color
              }}>
                {level.coverage} Coverage
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testing Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            marginTop: 'var(--spacing-2xl)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '900px',
            margin: 'var(--spacing-2xl) auto 0'
          }}
        >
          <h4 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            Testing Examples
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            <div>
              <h5 style={{ color: 'var(--primary-purple)', marginBottom: 'var(--spacing-sm)' }}>
                Unit Test Example
              </h5>
              <div style={{
                background: '#1a202c',
                color: '#e2e8f0',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontFamily: 'monospace'
              }}>
                test('transfer amount validation', () {'{'}
                <br />
                &nbsp;&nbsp;expect(validateTransfer(100)).toBe(true);
                <br />
                &nbsp;&nbsp;expect(validateTransfer(-50)).toBe(false);
                <br />
                {'}'});
              </div>
            </div>

            <div>
              <h5 style={{ color: 'var(--primary-purple)', marginBottom: 'var(--spacing-sm)' }}>
                Widget Test Example
              </h5>
              <div style={{
                background: '#1a202c',
                color: '#e2e8f0',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontFamily: 'monospace'
              }}>
                testWidgets('login form validation', (tester) {'{'}
                <br />
                &nbsp;&nbsp;await tester.tap(find.byType(LoginButton));
                <br />
                &nbsp;&nbsp;expect(find.text('Invalid email')).findsOneWidget;
                <br />
                {'}'});
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestingSlide;
