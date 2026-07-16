import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const BirrajTanejaSlide = () => {
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
              <img src="/birraj-taneja.png" alt="Birraj Taneja" />
            </div>
          </motion.div>

          <motion.div
            className="record-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="record-title-group">
              <h2 className="record-title record-title-compact">Birraj Taneja</h2>
              <div className="subtitle-with-icon">
                <p className="record-subtitle">PROFESSIONAL ARRANGER</p>
                <a href="https://instagram.com/birrajmusic" target="_blank" rel="noopener noreferrer" className="social-link-inline" title="@birrajmusic on Instagram">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
            <p className="record-description">
              Birraj Taneja professionally arranged "The First One." He helped take Shoolin's
              composition and turn it into a fully produced track with his expertise in
              arrangement and production.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BirrajTanejaSlide;
