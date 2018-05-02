import React, { Component } from 'react';
import './App.css';

// COMPONENTS/CONTAINERS
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>

        <section>
          <Login />
        </section>
      </div>
    );
  }
}

export default App;
