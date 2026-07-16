import React from 'react';
import { motion } from 'framer-motion';
import './TrackSlide.css';

const TrackSlide = ({ audioRef, isPlaying, togglePlay }) => {

  const platforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/track/5clejqUXvGSrdW6pz13PhK', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' },
    { name: 'Apple Music', url: 'https://music.apple.com/us/album/the-first-one-single/1847152246', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg' },
    { name: 'YouTube Music', url: 'https://music.youtube.com/watch?v=Ra4frk52kvw&si=1S5l8nlMtsz0YnP0', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg' },
    { name: 'Amazon', url: 'https://music.amazon.com/artists/B0FWN4RMCX/shoolin-vora', icon: '/amazon-music.png' }
  ];

  return (
    <div className="track-slide">
      <div className="track-content">
        <div className="track-header-wrapper">
          <motion.div
            className="track-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="artist-name">SHOOLIN VORA</h1>
            <div className="header-divider"></div>
            <p className="artist-subtitle">Composer · Pianist</p>
          </motion.div>

          <motion.button
            className="track-play-button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>
        </div>

        <motion.div
          className="track-main"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="album-art">
            <img
              src="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D10508473%2D%2DACA4EEB1%2D7ECC%2D43FA%2D87113DE29E462C21%2D%2D0%2D%2D6516237%2D%2DTheFirstCoverArt.jpg"
              alt="The First One - Cover Art"
            />
          </div>
          <div className="track-info">
            <h2 className="track-title">The First One</h2>
            <p className="track-subtitle">LISTEN NOW ON YOUR FAVORITE MUSIC PLATFORMS</p>
            <div className="platforms-inline">
              {platforms.map((platform, index) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="platform-button-inline"
                  title={platform.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className={`platform-logo ${
                      platform.name === 'Amazon' ? 'large-logo' :
                      platform.name === 'SoundCloud' ? 'tall-logo' :
                      platform.name === 'Apple Music' ? 'apple-logo' :
                      (platform.name === 'Spotify' || platform.name === 'YouTube Music') ? 'medium-logo' : ''
                    }`}
                  />
                  <span className="platform-name">{platform.name}</span>
                </a>
              ))}
            </div>
            <p className="track-description">
              Shoolin composed this track when he was 7 years old under the able guidance of his guru Dr. Aman Bathla.
              It's a classical and cinematic intense piece. It has been beautifully arranged by his mentor Birraj Taneja
              and the production and distribution has been guided by his music production teacher MohitG.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrackSlide;
