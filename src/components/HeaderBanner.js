import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = ({ show, audioRef, isPlaying, togglePlay }) => {

  if (!show) return null;

  return (
    <header className="header-banner">
      <div className="banner-content">
        <h1 className="banner-name">SHOOLIN VORA</h1>
        <div className="banner-divider-vertical"></div>
        <p className="banner-subtitle">Composer · Pianist</p>
      </div>

      <div className="player-control">
        <button
          className="play-button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </header>
  );
};

export default HeaderBanner;
