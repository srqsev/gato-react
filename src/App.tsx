import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Gato - React - Typescript </p>
          <Game />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
