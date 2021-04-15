import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"

class App extends Component {
  render() {
    return (
      <div className="App component">
        <nav className="component"> 
          NavBar
        </nav>
        <AboutMe myName={"Philip Cheung"} /> 
        <Skills />  
        <Portfolio />
        <Footer /> 


      </div>
    );
  }
}

export default App;