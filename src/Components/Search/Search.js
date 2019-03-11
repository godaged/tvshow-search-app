import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor() {
    super()
    this.state = {
        searchShowName: '',     
        // showsPerPage: 10,
      }
  }
  
  
  onSearchShowNameChange = e => {
    this.setState({ searchShowName: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchShowName);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               className="search-text"
               onChange={this.onSearchShowNameChange}
               name="Search" 
               placeholder="Search TV Show Name" 
               />
        <button type="submit" id="submit" className="search-button">Search Show Name</button>
      </form>      
    );
  }
}

export default Search;