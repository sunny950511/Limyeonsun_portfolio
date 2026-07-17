import React from 'react';
import videoSrc from '../assets/projects/museum/section08_loading_video_ae.mp4';

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video 
          className="museum-video"
          src={videoSrc}
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>
    </section>
  );
}

export default VideoSection;
