import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="error ui container centered">
        <h2 className="ui icon header">
          <div className="divider content">
            HTTP Error 403:
            <div className="sub header">
              Sorry the YouTube API daily limit has been reached
            </div>
            <div className="sub header">
              The service should be available again within 24 hours.
            </div>
            <div className="ui divider">
              <img
                className="ui big image"
                alt="naruto sad"
                src="https://media.giphy.com/media/4NuAILyDbmD16/giphy.gif"
              />
            </div>
          </div>
        </h2>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
