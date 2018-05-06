import React, { Component } from 'react';
import './App.css';

// COMPONENTS/CONTAINERS
import Navbar from './components/Navbar/Navbar';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>

        <section>
          <Auth />
        </section>
      </div>
    );
  }
}

export default App;
