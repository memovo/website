import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutModal.css';

const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="about-trigger"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/trampoline.png" alt="About Shoolin" />
        <span className="trigger-text">About Shoolin</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="about-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button className="modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>

              <div className="modal-content">
                <h2 className="modal-title">About Shoolin</h2>
                <div className="modal-divider"></div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h3 className="section-title">The Journey</h3>
                    <p className="section-text">
                      At 9 years old, Shoolin Vora is a young composer and pianist whose musical journey
                      has already made history. Based in Campbell, California, he has achieved two world
                      records that showcase his exceptional talent and dedication to music composition.
                    </p>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-title">Musical Style</h3>
                    <p className="section-text">
                      Shoolin's compositions blend classical piano foundations with modern cinematic elements,
                      creating emotionally resonant pieces that transcend his young age. His work demonstrates
                      a sophisticated understanding of melody, harmony, and musical storytelling.
                    </p>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-title">Interests & Vision</h3>
                    <p className="section-text">
                      Beyond composing, Shoolin is passionate about learning music production and exploring
                      the technical aspects of music creation. His vision is to continue developing his unique
                      voice as a composer while inspiring other young musicians to pursue their artistic dreams.
                    </p>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-title">Compositions</h3>
                    <p className="section-text">
                      "The First One" marks Shoolin's debut release, a cinematic composition that showcases
                      his ability to craft emotive musical narratives. This piece represents the beginning
                      of what promises to be an extraordinary musical career.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutModal;
