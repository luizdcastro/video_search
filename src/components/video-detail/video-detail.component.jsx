import React from "react";

const VideoDetail = ({ video, error }) => {
  if (!video) {
    return (
      <div className="ui center aligned icon header">
        <h2 className="ui medium header">HTTP Error 403:</h2>
        <h3 className="sub header">
          Sorry, the YouTube API daily limit has been reached.
        </h3>

        <h3 className="sub header">
          The service will be available again within 24 hours.
        </h3>
        <br />
        <div>
          <img
            className="ui big centered image"
            alt="naruto sad"
            src="https://media.giphy.com/media/4NuAILyDbmD16/giphy.gif"
          />
        </div>
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
