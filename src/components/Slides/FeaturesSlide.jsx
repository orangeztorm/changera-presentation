import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup/PhoneMockup';

const FeaturesSlide = () => {
  const features = [
    {
      image: '/images/signup_2.png',
      title: 'Send Money Flow',
      description: 'Idempotent transfers with retry logic'
    },
    {
      image: '/images/wallets.png',
      title: 'Multi-Wallet',
      description: 'Multi-currency wallet management'
    },
    {
      image: '/images/virtual_cards.png',
      title: 'Virtual Cards',
      description: 'PCI compliant payment processing'
    },
    {
      image: '/images/events.png',
      title: 'Event Tickets',
      description: 'Offline-first caching system'
    }
  ];

  return (
    <div className="slide features-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Core Features
        </motion.h2>

        <div className="grid-4" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <PhoneMockup
                imageSrc={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: 'var(--spacing-2xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)',
            maxWidth: '1000px',
            margin: 'var(--spacing-2xl) auto 0'
          }}
        >
          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary-purple)', marginBottom: 'var(--spacing-md)' }}>
              Idempotent Transfers
            </h4>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>
              Prevents duplicate transactions with unique request IDs and retry mechanisms
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary-purple)', marginBottom: 'var(--spacing-md)' }}>
              PCI Compliance
            </h4>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>
              Secure payment processing with encrypted card data and tokenization
            </p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <h4 style={{ color: 'var(--primary-purple)', marginBottom: 'var(--spacing-md)' }}>
              Offline-First Caching
            </h4>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>
              SharedPreferences for local data storage with sync capabilities
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSlide;
