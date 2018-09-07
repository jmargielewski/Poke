import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'App',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
