import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import RegularTable from './components/RegularTable';
import SortableTable from './components/SortableTable';
import CustomTable from './components/CustomTable';
import InfinityScroll from './components/InfinityScroll';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/regular-table" exact component={RegularTable} />
          <Route path="/sortable-table" exact component={SortableTable} />
          <Route path="/custom-table" exact component={CustomTable} />
          <Route path="/table-infinity-scroll" exact component={InfinityScroll} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
