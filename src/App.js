import React, { Component } from 'react';
import './App.css';
import PageTitleBar from './Components/Header/Header';
import Body from './Components/Body/Body';

class App extends Component {
  // constructor() {
  //   super()

  //   // this.doSearch();
  // }

  doSearch() {
    // const response = await fetch("http://api.tvmaze.com/search/shows?q=girl");
    //     const jsonData = await response.json();
    //     console.log(jsonData);
    //     this.setState({ tvShows: jsonData });
  }
  render() {
    return (
      <div className="App">
        <PageTitleBar />
        {/* <div className="">                  
            <SearchTextBox onSearch={}/>                 
        </div>     */}
        <div className="main-content">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
