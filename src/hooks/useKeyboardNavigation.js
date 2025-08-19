import { useEffect } from 'react';

export const useKeyboardNavigation = (currentSlide, totalSlides, onNext, onPrevious, onOverview) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault();
          if (currentSlide < totalSlides - 1) {
            onNext();
          }
          break;
        
        case 'ArrowLeft':
          event.preventDefault();
          if (currentSlide > 0) {
            onPrevious();
          }
          break;
        
        case 'Escape':
          event.preventDefault();
          onOverview();
          break;
        
        case 'Home':
          event.preventDefault();
          // Jump to first slide
          break;
        
        case 'End':
          event.preventDefault();
          // Jump to last slide
          break;
        
        default:
          // Handle number keys for direct slide navigation
          const slideNumber = parseInt(event.key);
          if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= totalSlides) {
            event.preventDefault();
            // Navigate to specific slide (implement if needed)
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides, onNext, onPrevious, onOverview]);
};
