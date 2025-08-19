import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiGrid, FiMaximize2, FiMove } from 'react-icons/fi';
import './SlideControls.css';

const SlideControls = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
  onOverview,
  onFullscreen,
  isFullscreen = false
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const canGoNext = currentSlide < totalSlides - 1;
  const canGoPrevious = currentSlide > 0;

  return (
    <motion.div
      className={`slide-controls ${isDragging ? 'dragging' : ''}`}
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      dragConstraints={{
        top: -window.innerHeight * 0.4,
        bottom: 0,
        left: -window.innerWidth * 0.4,
        right: window.innerWidth * 0.4
      }}
      whileDrag={{
        scale: 1.05,
        cursor: 'grabbing'
      }}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
    >
      {/* Drag Handle */}
      <div className="drag-handle">
        <FiMove size={14} />
        <span className="drag-text">Drag to move</span>
      </div>

      {/* Controls Row */}
      <div className="controls-row">
        {/* Previous Button */}
        <motion.button
          className={`control-btn prev-btn ${!canGoPrevious ? 'disabled' : ''}`}
          onClick={onPrevious}
          disabled={!canGoPrevious}
          whileHover={{ scale: canGoPrevious ? 1.1 : 1 }}
          whileTap={{ scale: canGoPrevious ? 0.95 : 1 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronLeft size={20} />
        </motion.button>

        {/* Overview Button */}
        <motion.button
          className="control-btn overview-btn"
          onClick={onOverview}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FiGrid size={18} />
        </motion.button>

        {/* Fullscreen Button */}
        <motion.button
          className="control-btn fullscreen-btn"
          onClick={onFullscreen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <FiMaximize2 size={18} />
        </motion.button>

        {/* Next Button */}
        <motion.button
          className={`control-btn next-btn ${!canGoNext ? 'disabled' : ''}`}
          onClick={onNext}
          disabled={!canGoNext}
          whileHover={{ scale: canGoNext ? 1.1 : 1 }}
          whileTap={{ scale: canGoNext ? 0.95 : 1 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SlideControls;
