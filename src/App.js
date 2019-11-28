import React, { Component } from 'react';
import Nav from './Components/Nav';
import Items from './Components/Items';
import FirstItem from './Components/FirstItem'
import SecondItem from './Components/SecondItem'
import ThirdItem from './Components/ThirdItem'
import './App.css';
export class App extends Component {
  render() {


    return (
      <div>
        <Nav /> 
        <FirstItem />
        <SecondItem />
        <ThirdItem />
      </div>
    )
  }
}

export default App
