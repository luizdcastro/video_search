import React from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/search-bar/search-bar.component";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
