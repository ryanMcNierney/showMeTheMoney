import React, { Component } from 'react'
import './App.css'
import Header from './header/Header'
import DisplaySponsored from './display-sponsored/DisplaySponsored'
import Data from './data/Data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DisplaySponsored />
      </div>
    );
  }
}

export default App;
