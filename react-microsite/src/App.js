import React, { Component } from 'react';
// components
import Header from './components/headerComponent/header';

import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
