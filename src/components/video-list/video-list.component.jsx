import React from "react";

import VideoItem from "../video-item/video-item.component";

import "./video-list.styles.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return (
    <div className="ui container">
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
