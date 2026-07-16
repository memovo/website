import React from 'react';
import { motion } from 'framer-motion';
import './TrackShowcase.css';

const TrackShowcase = () => {
  return (
    <section className="track-showcase">
      <div className="track-container">
        <motion.div
          className="track-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="track-label">New Release</span>
          <h2 className="track-title">The First One</h2>
          <p className="track-description">
            A cinematic journey through melody and emotion.
            This debut composition showcases Shoolin's unique voice
            in blending classical piano with modern cinematic elements.
          </p>
          <div className="track-meta">
            <div className="meta-item">
              <span className="meta-label">Genre</span>
              <span className="meta-value">Classical · Cinematic</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Release</span>
              <span className="meta-value">2024</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="track-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="vinyl-disc">
            <div className="vinyl-inner">
              <div className="vinyl-label">
                <div className="vinyl-text">THE FIRST ONE</div>
                <div className="vinyl-artist">SHOOLIN VORA</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackShowcase;
