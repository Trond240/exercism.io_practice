import logo from './logo.svg';
import './App.css';
import {NavBar} from './navBar.js'
import {Table} from './table.js'
import React, { Component } from 'react';
import { fetchResturants } from './apiCalls.js';


class App extends Component {
  constructor(){
    super()
    this.State = {
      resutaunts: []
    }
  }

  componentDidMount() {
    fetchResturants()
  }

  render() {
    return (
      <main>
        <NavBar />
        <Table />
      </main>
    )
  }
}

export default App;
