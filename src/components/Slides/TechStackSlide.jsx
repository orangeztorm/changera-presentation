import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiZap, FiActivity, FiDatabase } from 'react-icons/fi';

const TechStackSlide = () => {
  const techStack = [
    {
      icon: FiSmartphone,
      title: 'Architecture',
      subtitle: 'Flutter + BLoC',
      description: 'Clean Architecture with BLoC pattern for predictable state management',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: FiZap,
      title: 'CI/CD',
      subtitle: 'GitHub Actions + Fastlane + Shorebird',
      description: 'Automated builds, testing, and instant hotfixes without store review',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: FiActivity,
      title: 'Monitoring',
      subtitle: 'Crashlytics + Sentry',
      description: 'Real-time crash reporting and performance monitoring',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: FiDatabase,
      title: 'Storage',
      subtitle: 'SharedPreferences',
      description: 'Lightweight local storage for unstructured data caching',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div className="slide tech-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Technology Stack
        </motion.h2>

        <div className="grid-2" style={{ marginTop: 'var(--spacing-2xl)' }}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card"
              style={{
                background: tech.gradient,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transform: 'translate(30px, -30px)'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <tech.icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 'var(--font-size-xl)' }}>{tech.title}</h3>
                    <p style={{
                      margin: 0,
                      opacity: 0.9,
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: '600'
                    }}>
                      {tech.subtitle}
                    </p>
                  </div>
                </div>

                <p style={{
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 1.6,
                  opacity: 0.95
                }}>
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            Key Benefits
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
                Rapid Development
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Hot reload & fast iteration
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Instant Deployments
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Shorebird hotfixes
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'bold',
                color: 'var(--primary-purple)',
                marginBottom: 'var(--spacing-xs)'
              }}>
                Reliable Monitoring
              </div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                Real-time crash reporting
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSlide;
