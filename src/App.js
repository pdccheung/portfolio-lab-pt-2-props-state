import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer"
import AboutMe from "./components/AboutMe/AboutMe"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="component"> 
          
        </nav>
        <AboutMe /> 
        <Footer />

      </div>
    );
  }
}

export default App;