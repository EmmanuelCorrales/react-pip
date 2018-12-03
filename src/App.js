import React, { Component } from 'react';
import './App.css';
import PictureInPicture from './PictureInPicture';

class App extends Component {
  state = { pip: false }

  render() {
    return (
      <div className="App">
        <PictureInPicture pip={ this.state.pip } />
        <button onClick={ () => this.setState({ pip: !this.state.pip }) } >Press</button>
      </div>
    );
  }
}

export default App;
