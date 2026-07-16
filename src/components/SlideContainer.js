import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SlideContainer.css';
import HeaderBanner from './HeaderBanner';
import TrackSlide from './slides/TrackSlide';
import WorldRecord2Slide from './slides/WorldRecord2Slide';
import WorldRecord1Slide from './slides/WorldRecord1Slide';
import TeacherSlide from './slides/TeacherSlide';
import MohitGuptaSlide from './slides/MohitGuptaSlide';
import BirrajTanejaSlide from './slides/BirrajTanejaSlide';
import PeachesSlide from './slides/PeachesSlide';
import FamilySlide from './slides/FamilySlide';
import AboutSlide from './slides/AboutSlide';

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Autoplay background music on mount
  React.useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay blocked, will retry on first user interaction
        });
      }
    };

    // Try to play immediately
    playAudio();

    // Also try on first user interaction
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const slides = [
    <TrackSlide key="track" audioRef={audioRef} isPlaying={isPlaying} togglePlay={togglePlay} />,
    <WorldRecord2Slide key="wr2" />,
    <WorldRecord1Slide key="wr1" />,
    <TeacherSlide key="teacher" />,
    <MohitGuptaSlide key="mohit" />,
    <BirrajTanejaSlide key="birraj" />,
    <PeachesSlide key="peaches" />,
    <FamilySlide key="family" />,
    <AboutSlide key="about" />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Add keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault(); // Prevent page scroll
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay]);

  return (
    <div className="slide-container">
      <audio ref={audioRef} autoPlay>
        <source src="/background-teaser.mp3" type="audio/mpeg" />
      </audio>
      <HeaderBanner show={currentSlide > 0} audioRef={audioRef} isPlaying={isPlaying} togglePlay={togglePlay} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="slide-wrapper"
          style={{ paddingTop: currentSlide > 0 ? '0' : '0' }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="slide-nav">
        <button
          className="nav-button prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="nav-button next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideContainer;
