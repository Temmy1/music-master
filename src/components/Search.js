import React, { Component } from 'react';

class Search extends Component {
  state = { inputValue: ''}

  inputHandler = event => {
    this.setState({ inputValue: event.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') this.searchArtist();
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.inputValue);
  }

  render() {

    return(
      <div>
        <input 
          onChange={this.inputHandler} type="search" 
          placeholder="Search for an artist" 
          onKeyPress={this.handleKeyPress}
        />
        <button style={{ marginLeft: 15 }}onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}
export default Search;