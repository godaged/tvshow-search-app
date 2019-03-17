import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import PageNavBar from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Show from './Components/Pages/Show';
import Episodes from './Components/Pages/Episodes';
import Footer from './Components/Header/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* main-content and App sets layout and background color*/}
        <div className="main-content App ">
          <div className="">
            <PageNavBar />
          </div>

          <div className=" ">
            <Route exact path="/" component={Home} />
            {/* pases id to show to update state*/}
            <Route path="/Show/:id" component={Show} />
            <Route path="/Episodes/:id" component={Episodes} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
