import React from "react";

import "./search-bar.styles.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div className="logo-icon">
          <i className="big play circle outline orange icon"></i>
        </div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="search-bar--input ui fluid action input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
