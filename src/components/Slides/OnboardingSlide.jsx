import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup/PhoneMockup';

const OnboardingSlide = () => {
  const onboardingSteps = [
    {
      image: '/images/signup_1.png',
      title: 'Welcome Screen',
      description: 'Country selection & app introduction'
    },
    {
      image: '/images/signup_2.png',
      title: 'Registration',
      description: 'User account creation flow'
    },
    {
      image: '/images/signup_3.png',
      title: 'Email Verification',
      description: 'OTP verification process'
    },
    {
      image: '/images/dashboard.png',
      title: 'Dashboard',
      description: 'Main app interface'
    }
  ];

  return (
    <div className="slide onboarding-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Onboarding Flow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
          style={{ maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}
        >
          Clean Architecture separates KYC validation from UI
        </motion.p>

        <div className="grid-4" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <PhoneMockup
                imageSrc={step.image}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Technical Implementation Details */}
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
            maxWidth: '800px',
            margin: 'var(--spacing-2xl) auto 0'
          }}
        >
          <h4 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            Technical Implementation
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-md)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                BLoC Pattern
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                State management for UI
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Use Cases
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Business logic separation
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Validation
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                KYC & form validation
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Navigation
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Route management
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingSlide;
