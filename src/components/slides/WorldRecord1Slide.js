import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const WorldRecord1Slide = () => {
  return (
    <div className="world-record-slide">
      <div className="record-content">
        <div className="record-layout">
          <motion.div
            className="record-details"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="record-title-group">
              <h2 className="record-title record-title-compact">Youngest Diploma Holder in Music Composition</h2>
              <div className="record-subtitle-wrapper">
                <a href="https://goldenbookofworldrecords.com/youngest-diploma-holder-in-music-composition-2/" target="_blank" rel="noopener noreferrer" title="View on Golden Book of World Records">
                  <img src="https://goldenbookofworldrecords.com/wp-content/uploads/2024/01/Logo-Sticker.png.avif" alt="Golden Book Logo" className="gbwr-logo" />
                </a>
                <p className="record-subtitle">GOLDEN BOOK OF WORLD RECORDS</p>
              </div>
            </div>
            <p className="record-description">
              <strong>Feb 10, 2023 —</strong> At 6 years and 8 months, Shoolin successfully completed a yearlong diploma in music composition with Dr. Aman Bathla where he learned all major and minor scales with their inversions.
            </p>
          </motion.div>

          <motion.div
            className="record-hero"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/world-record-1.png" alt="Shoolin Vora with World Record Certificate" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorldRecord1Slide;
