import { useState, useCallback } from 'react';

export const useSlideNavigation = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentSlide, totalSlides, isTransitioning]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = useCallback((slideIndex) => {
    if (slideIndex >= 0 && slideIndex < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(slideIndex);
        setIsTransitioning(false);
      }, 300);
    }
  }, [totalSlides, isTransitioning]);

  const toggleOverview = useCallback(() => {
    setShowOverview(prev => !prev);
  }, []);

  const closeOverview = useCallback(() => {
    setShowOverview(false);
  }, []);

  return {
    currentSlide,
    isTransitioning,
    showOverview,
    nextSlide,
    previousSlide,
    goToSlide,
    toggleOverview,
    closeOverview,
    totalSlides
  };
};
