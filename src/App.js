import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import PageTitleBar from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Show from './Components/Pages/Show';
import Episodes from './Components/Pages/Episodes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PageTitleBar />
          
          <div className="main-content">
            <Route exact path="/" component={Home} />
            <Route path="/Show" component={Show} />
            <Route path="/Episodes" component={Episodes} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
