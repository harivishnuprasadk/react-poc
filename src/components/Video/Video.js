import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import './Video.css';

const Video = ({ videoUrl, title }) => {
  const playerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBackButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className={`player-container`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`video-wrapper`} ref={playerRef}>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
        />
        {isHovered && (
          <>
            <div className="back-button" onClick={handleBackButtonClick}>
            <i className="fas fa-arrow-left fa-2x text-white"></i>
            </div>
            <div className="title-overlay">
              <p className="video-title">{title}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Video;
