import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const TeacherSlide = () => {
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
              <img src="/teacher-aman-bathla.png" alt="Dr. Aman Bathla" />
            </div>
          </motion.div>

          <motion.div
            className="record-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="record-title-group">
              <h2 className="record-title record-title-compact">Dr. Aman Bathla</h2>
              <div className="subtitle-with-icon">
                <p className="record-subtitle">TEACHER · MENTOR</p>
                <a href="https://instagram.com/amanpianist" target="_blank" rel="noopener noreferrer" className="social-link-inline" title="@amanpianist on Instagram">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
                </a>
              </div>
            </div>
            <p className="record-description">
              Dr. Bathla has been Shoolin's piano and composition teacher since 2022. Dr. Bathla's patient
              teaching and guidance have helped Shoolin build a strong foundation and made him a better person.
              Through Dr. Bathla's vision, mentorship and encouragement, Shoolin has established his two world records!
              We are grateful for his constant dedication and support.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSlide;
