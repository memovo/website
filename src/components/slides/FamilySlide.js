import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const FamilySlide = () => {
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
              <img src="/family.png" alt="Family" />
            </div>
          </motion.div>

          <motion.div
            className="record-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="record-title-group">
              <h2 className="record-title record-title-compact">Family</h2>
              <div className="subtitle-with-icon">
                <span className="emoji-icon-inline">❤️</span>
              </div>
            </div>
            <p className="record-description">
              When he was three, Shoolin would watch his sister learn piano from Hoffman Academy, esp. Mr. Joseph Hoffman with his puppets. This inspired him to learn on his own and dedicate hours of practice at an early age. Since then, Shoolin's family has supported his musical journey with love and care.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FamilySlide;
