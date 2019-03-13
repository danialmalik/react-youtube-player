import React, { Component } from 'react';
import MiniYouTube from './modules/MiniYouTube/MiniYouTube';

import Header from './modules/App/Header/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MiniYouTube />
      </main>
    );
  }
}


export default App;
