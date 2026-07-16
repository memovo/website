import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const WorldRecord2Slide = () => {
  return (
    <div className="world-record-slide">
      <div className="record-content">
        <div className="record-layout">
          <motion.div
            className="record-hero"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/world-record-2.png" alt="Shoolin Vora at the piano" />
            </div>
          </motion.div>

          <motion.div
            className="record-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="record-title-group">
              <h2 className="record-title record-title-compact">Youngest Piano Music Composer</h2>
              <div className="record-subtitle-wrapper">
                <a href="https://goldenbookofworldrecords.com/youngest-piano-music-composer/" target="_blank" rel="noopener noreferrer" title="View on Golden Book of World Records">
                  <img src="https://goldenbookofworldrecords.com/wp-content/uploads/2024/01/Logo-Sticker.png.avif" alt="Golden Book Logo" className="gbwr-logo" />
                </a>
                <p className="record-subtitle">GOLDEN BOOK OF WORLD RECORDS</p>
              </div>
            </div>
            <p className="record-description">
              <strong>Nov 20, 2024 —</strong> At 8 years and 6 months, Shoolin established a new record for the Youngest Piano Music Composer
              in the Golden Book of World Records. He composed 20 compositions and performed them live at an
              online event.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorldRecord2Slide;
