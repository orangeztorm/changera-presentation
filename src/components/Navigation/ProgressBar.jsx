import React from 'react';
import { motion } from 'framer-motion';
import './ProgressBar.css';

const ProgressBar = ({ currentSlide, totalSlides }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className="progress-text">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default ProgressBar;
