import React, { Component } from 'react';
import Nav from './Components/Nav';
import Items from './Components/Items';
import FirstItem from './Components/FirstItem'
import SecondItem from './Components/SecondItem'
import ThirdItem from './Components/ThirdItem'
import Accessories from './Components/Accessories'
import './App.css';
export class App extends Component {

  constructor(){
    super();
       
  }

 
  state ={
    cartItem:0
  };

  handlerCartAddition = (noOfitems) =>{

      console.log("type:"+typeof(this.state.cartItem)) ;
      console.log("type"+typeof(noOfitems));   
      let totalItems = this.state.cartItem+noOfitems;
      
      this.setState({cartItem:totalItems});
      
  }
  render() {
    console.log("Rachit:"+this.state.cartItem);

    return (
      <div>
        <Nav />
       {/*  <FirstItem 
        handlerCartAddition={this.handlerCartAddition}
        /> */}
        <Accessories /> 
      </div>
    )
  }
}

export default App
