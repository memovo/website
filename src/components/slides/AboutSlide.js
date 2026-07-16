import React from 'react';
import { motion } from 'framer-motion';
import './WorldRecordSlide.css';

const AboutSlide = () => {
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
              <h2 className="record-title record-title-compact">About Shoolin</h2>
              <p className="record-subtitle">9-YEAR-OLD COMPOSER & PIANIST</p>
            </div>
            <p className="record-description">
              Shoolin Vora is full of creativity, energy, and curiosity about the world. He loves to express himself through music, writing, and art. Shoolin has a big imagination and a playful side that shines through everything he creates.
              <br /><br />
              He's also very active and loves being outdoors — running, biking, playing sports, or exploring new places with his family. When he's not outside or at the piano, you'll probably find him reading, building something, or playing "Nin" with his sister. Shoolin sees life as one big adventure, always learning, creating, and sliding through it "like it's a water slide."
            </p>
          </motion.div>

          <motion.div
            className="record-hero"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="/trampoline.png" alt="Shoolin" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
