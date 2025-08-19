import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';

const DecisionsSlide = () => {
  const decisions = [
    {
      title: 'BLoC vs Riverpod',
      chosen: 'BLoC',
      rejected: 'Riverpod',
      reasoning: 'Better team familiarity, extensive documentation, and proven stability for large-scale apps',
      pros: ['Team expertise', 'Rich ecosystem', 'Predictable state'],
      cons: ['More boilerplate', 'Steeper learning curve']
    },
    {
      title: 'SharedPreferences vs SQLite',
      chosen: 'SharedPreferences',
      rejected: 'SQLite',
      reasoning: 'Lightweight storage for unstructured data, faster access, and simpler implementation',
      pros: ['Simple API', 'Fast access', 'No setup required'],
      cons: ['Limited querying', 'No relationships']
    },
    {
      title: 'Shorebird vs Store Updates',
      chosen: 'Shorebird',
      rejected: 'Store Updates',
      reasoning: 'Instant hotfixes without app store review process, critical for fintech applications',
      pros: ['Instant deployment', 'No review delay', 'Hotfix capability'],
      cons: ['Limited to Dart code', 'Additional complexity']
    }
  ];

  return (
    <div className="slide decisions-slide">
      <div className="slide-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          Engineering Decisions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
          style={{ maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}
        >
          Strategic technical choices and their rationale
        </motion.p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xl)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {decisions.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                {decision.title}
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 'var(--spacing-lg)',
                alignItems: 'center',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {/* Chosen Option */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
                    color: 'white',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    <FiCheck size={24} style={{ marginBottom: 'var(--spacing-xs)' }} />
                    <div style={{ fontWeight: 'bold' }}>{decision.chosen}</div>
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Chosen
                  </div>
                </div>

                {/* VS */}
                <div style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 'bold',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  VS
                </div>

                {/* Rejected Option */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
                    color: 'white',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    <FiX size={24} style={{ marginBottom: 'var(--spacing-xs)' }} />
                    <div style={{ fontWeight: 'bold' }}>{decision.rejected}</div>
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Rejected
                  </div>
                </div>
              </div>

              <p style={{
                textAlign: 'center',
                fontSize: 'var(--font-size-base)',
                marginBottom: 'var(--spacing-lg)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)'
              }}>
                {decision.reasoning}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-lg)'
              }}>
                <div>
                  <h5 style={{
                    color: '#4ecdc4',
                    marginBottom: 'var(--spacing-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)'
                  }}>
                    <FiCheck size={16} />
                    Pros
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: 'var(--font-size-sm)'
                  }}>
                    {decision.pros.map((pro, idx) => (
                      <li key={idx} style={{
                        marginBottom: 'var(--spacing-xs)',
                        paddingLeft: 'var(--spacing-md)',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#4ecdc4'
                        }}>•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 style={{
                    color: '#ff6b6b',
                    marginBottom: 'var(--spacing-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)'
                  }}>
                    <FiX size={16} />
                    Cons
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: 'var(--font-size-sm)'
                  }}>
                    {decision.cons.map((con, idx) => (
                      <li key={idx} style={{
                        marginBottom: 'var(--spacing-xs)',
                        paddingLeft: 'var(--spacing-md)',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#ff6b6b'
                        }}>•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecisionsSlide;
