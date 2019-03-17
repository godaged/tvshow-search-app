import React, { Component } from 'react';

class SearchShowNumber extends Component {
  constructor() {
    super()
    this.state = {
        searchShowNumber: '',     
      }
  }
  
  
  onsearchShowNumberChange = e => {
    this.setState({ searchShowNumber: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchShowNumber);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               className="search-text"
               onChange={this.onsearchShowNumberChange}
               name="Search" 
               placeholder="Enter Show Number" 
               />
        <button type="submit" id="submit" className="search-button">Search Show Number</button>
      </form>      
    );
  }
}

export default SearchShowNumber;