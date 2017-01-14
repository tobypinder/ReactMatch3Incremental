import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from  '../Item/Item.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
        <Item name="flask" size="32" />
      </div>
    );
  }
}



export default App;
