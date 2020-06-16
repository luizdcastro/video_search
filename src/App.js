import React from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/search-bar/search-bar.component";
import VideoList from "./components/video-list/video-list.component";
import VideoDetail from "./components/video-detail/video-detail.component";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("naruto");
  }

  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="app-container ui container stackable grid">
          <div className="ui row">
            <div className="column eleven wide">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
