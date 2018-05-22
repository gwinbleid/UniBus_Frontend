import React, { Component } from 'react';
import './App.css';

// ROUTER
import { 
  Route,
  Link,
  Switch,
} from 'react-router-dom';

// COMPONENTS/CONTAINERS
import Navbar from './components/UI/Navbar/Navbar';
import Auth from './containers/Auth/Auth';
import Table from './components/Table/Table';
import DataGrid from './components/DataGrid/DataGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <section>
          <Switch>
            <Route path="/datagrid" component={DataGrid} />
            <Route path="/table" component={Table} />
            <Route path="/" exact component={Auth} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
