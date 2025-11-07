"use client";

import React from "react";
import "./_videosection.scss";

const VideoSection = () => {
  return (
    <div className="video-area">
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/vWVm_9ewZ_Q?autoplay=1&rel=0"
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
