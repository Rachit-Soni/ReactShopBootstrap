import React, { Component } from 'react';
import Nav from './Components/Nav';
import Items from './Components/Items';
import FirstItem from './Components/FirstItem'
import Accessories from './Components/Accessories'
import Cart from './Components/Cart'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


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
              <Router>

      <div>
        <Nav />
            <Switch>
            
          <Route path = "/Cart" exact component = {Cart} />
            
       {/*  <FirstItem 
        handlerCartAddition={this.handlerCartAddition}
        /> */}
        <Accessories /> 
          </Switch>
      </div>
            </Router>  

    )
  }
}

export default App
