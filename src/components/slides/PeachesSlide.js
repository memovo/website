import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const PeachesSlide = () => {
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
              <h2 className="record-title record-title-compact">Peaches</h2>
              <p className="record-subtitle">THE FIRST MUSE</p>
            </div>
            <p className="record-description">
              Peaches is Shoolin's cat and the inspiration for his first composition. That first
              piece started Shoolin's journey into music composition. Sometimes inspiration comes
              from unexpected places.
            </p>
          </motion.div>

          <motion.div
            className="record-hero"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/peaches.png" alt="Peaches" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PeachesSlide;
