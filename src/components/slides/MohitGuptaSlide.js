import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const MohitGuptaSlide = () => {
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
              <h2 className="record-title record-title-compact">Mohit Gupta</h2>
              <div className="subtitle-with-icon">
                <p className="record-subtitle">MUSIC PRODUCTION TEACHER & MENTOR</p>
                <a href="https://instagram.com/mohitgmusic" target="_blank" rel="noopener noreferrer" className="social-link-inline" title="@mohitgmusic on Instagram">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
            <p className="record-description">
              Under the guidance of Mohit Gupta, Shoolin has been learning about recording, mixing and distributing music. Mr. Gupta has introduced him to different elements of music and how to bring musical ideas to life using modern technology. His continued encouragement and support has enabled Shoolin to start distribute his music online.
            </p>
          </motion.div>

          <motion.div
            className="record-hero"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/mohit-gupta.png" alt="Mohit Gupta" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MohitGuptaSlide;
