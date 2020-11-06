import React, { Component } from "react";
import "./App.css";
import NewSmurf from './NewSmurf'
import SmurfForm from './SmurfForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <SmurfForm/> 
        <NewSmurf/>
      </div>
    );
  }
}

export default App;
