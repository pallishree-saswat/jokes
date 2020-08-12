import React, { Component } from 'react';
import './App.css';
import Jokes from "./Joke"


class App extends Component {
  state = {
    isHidding:true
  };
  render() {
    return (
      <div className="App">
        <button className="button" onClick={event => {
          this.setState({isHidding:!this.state.isHidding});
        }}> Surprise...</button>
        {this.state.isHidding === true ? <Jokes/> : null }
      </div>
    )
  }
}

export default App;
