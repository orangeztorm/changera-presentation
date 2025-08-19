import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

// Import all slides
import IntroSlide from './components/Slides/IntroSlide';
import ProblemSlide from './components/Slides/ProblemSlide';
import ArchitectureSlide from './components/Slides/ArchitectureSlide';
import OnboardingSlide from './components/Slides/OnboardingSlide';
import FeaturesSlide from './components/Slides/FeaturesSlide';
import TechStackSlide from './components/Slides/TechStackSlide';
import TestingSlide from './components/Slides/TestingSlide';
import DecisionsSlide from './components/Slides/DecisionsSlide';
import ImpactSlide from './components/Slides/ImpactSlide';

// Import navigation components
import SlideControls from './components/Navigation/SlideControls';
import ProgressBar from './components/Navigation/ProgressBar';
import Footer from './components/Navigation/Footer';

// Import styles
import './styles/globals.css';

const TOTAL_SLIDES = 9;

const App = () => {
    const {
        currentSlide,
        isTransitioning,
        showOverview,
        nextSlide,
        previousSlide,
        goToSlide,
        toggleOverview,
        closeOverview,
        totalSlides
    } = useSlideNavigation(TOTAL_SLIDES);

    const [isFullscreen, setIsFullscreen] = useState(false);

    // Keyboard navigation
    useKeyboardNavigation(currentSlide, totalSlides, nextSlide, previousSlide, toggleOverview);

    // Fullscreen functionality
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Handle fullscreen change
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const slides = [
        IntroSlide,
        ProblemSlide,
        ArchitectureSlide,
        OnboardingSlide,
        FeaturesSlide,
        TechStackSlide,
        TestingSlide,
        DecisionsSlide,
        ImpactSlide
    ];

    return (
        <div className="presentation-container">
            {/* Progress Bar */}
            <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />

            {/* Footer with Changera Link */}
            <Footer />

            {/* Slide Controls */}
            <SlideControls
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onNext={nextSlide}
                onPrevious={previousSlide}
                onOverview={toggleOverview}
                onFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
            />

            {/* Slides */}
            <AnimatePresence mode="wait">
                        <motion.div
          key={currentSlide}
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="slide-transition"
        >
                    {React.createElement(slides[currentSlide])}
                </motion.div>
            </AnimatePresence>

            {/* Overview Modal */}
            {showOverview && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 'var(--z-modal-backdrop)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'var(--spacing-2xl)'
                    }}
                    onClick={closeOverview}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        style={{
                            background: 'var(--bg-card)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--spacing-2xl)',
                            maxWidth: '1000px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                            Presentation Overview
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: 'var(--spacing-lg)'
                        }}>
                            {slides.map((Slide, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        goToSlide(index);
                                        closeOverview();
                                    }}
                                    style={{
                                        background: index === currentSlide ? 'var(--gradient-primary)' : 'var(--bg-secondary)',
                                        color: index === currentSlide ? 'white' : 'var(--text-primary)',
                                        border: 'none',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: 'var(--spacing-lg)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all var(--transition-normal)'
                                    }}
                                >
                                    <div style={{
                                        fontSize: 'var(--font-size-lg)',
                                        fontWeight: 'bold',
                                        marginBottom: 'var(--spacing-xs)'
                                    }}>
                                        Slide {index + 1}
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-sm)', opacity: 0.8 }}>
                                        {Slide.name.replace('Slide', '')}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Keyboard Shortcuts Help */}
            <div style={{
                position: 'fixed',
                bottom: 'var(--spacing-md)',
                right: 'var(--spacing-md)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: 'var(--spacing-sm)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                <div>← → Navigate</div>
                <div>ESC Overview</div>
                <div>F Fullscreen</div>
            </div>
        </div>
    );
};

export default App;
