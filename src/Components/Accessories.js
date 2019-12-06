import React, { Component } from 'react'

export default class Accessories extends Component {

state = {

            loading: true,
            apiData0: [],
            apiData1: [],
            apiData2: [],
            cartState: [
                        {itemPrice: null},
                        {itemName: ''}
            ],
            inputNumber: 1,
            inputValue: 0

        }


async componentDidMount()
{

    const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url)
        const data = await response.json();
        console.log(data.products[0])
        
        this.setState(
                        {
                            apiData0: data.products[0],
                            apiData1: data.products[1],
                            apiData2: data.products[2],
                            loading: false
                            
                        }
                     )
       // console.log(this.state.apiData0.master.images[0]["product_url"])      
      
}
      
//Functions
//Input Text Function
handleNumberChange = (event) => {
        this.setState({inputNumber: event.target.value})

        console.log("Input Number: " + this.state.inputNumber )  //tried tp add +1 but it is taking the variable as a string

}

//Add to Cart Button

addToCartHandler = (noOfItems) => {
    console.log("Button Clicked!!")

    let btn = this.state.inputNumber;
    
    this.setState(
       
           { inputValue: this.btn }               //UNABLE TO CHANGE THE STATE HERE CAUSING THE MAJOR CART LOGIC PROBLEM
               )
    console.log(this.state.inputValue)        

}


    render()
     {
      return (
            <div>
                {   this.state.loading || !this.state.apiData0 ? (<div>loading...</div>) : 
                (   
                        
                       
                        <div className="container c1">
                            <h1 className="accessoryHeading" style={{color: "#BE933C"}}>Invisalign® accessories</h1>
                            <div className="row r1">
                                <div className="col-md-3">
                                    <img src={this.state.apiData0.master.images[0]["product_url"]} alt="Image1" />
                                </div>
                                <div className="col-md-5">
                                    <h3>{this.state.apiData0.name}</h3>
                                    <p>{this.state.apiData0.description}</p>
                                </div>    
                                <div className="col-md-1">
                                    <div className="vl"></div>    
                                </div>
                                <div className="col-md-3">
                                    <b>Price: ${this.state.apiData0.price}</b>
                                    <input type = "number" className="inputNumber" min="1" value={this.state.inputNumber} onChange={this.handleNumberChange}/>
                                    <br />
                                    <button className="btn btn-primary addToCartButton" onClick={this.addToCartHandler}>Add to Cart</button>
                                </div>

                                
                            </div>

                                <hr />

                            <div className="row">
                                <div className="col-md-3">
                                    <img src={this.state.apiData1.master.images[0]["product_url"]} alt="Image1" />
                                </div>
                                <div className="col-md-5">
                                    <h3>{this.state.apiData1.name}</h3>
                                    <p>{this.state.apiData1.description}</p>
                                </div>    
                                <div className="col-md-1">
                                    <div className="vl"></div>    
                                </div>
                                <div className="col-md-3">
                                    <b>Price: ${this.state.apiData1.price}</b>
                                    <input type = "number" className="inputNumber" min="1"/>
                                    <br />
                                    <button className="btn btn-primary addToCartButton" onClick={this.addToCartHandler}>Add to Cart</button>
                                </div>

                                
                            </div>

                                <hr/>

                                <div className="row">
                                <div className="col-md-3">
                                    <img src={this.state.apiData2.master.images[0]["product_url"]} alt="Image1" />
                                </div>
                                <div className="col-md-5">
                                    <h3>{this.state.apiData2.name}</h3>
                                    <p>{this.state.apiData2.description}</p>
                                </div>    
                                <div className="col-md-1">
                                    <div className="vl"></div>    
                                </div>
                                <div className="col-md-3">
                                    <b>Price: ${this.state.apiData2.price}</b>
                                    <input type = "number" className="inputNumber" min="1" />
                                    <br />
                                    <button className="btn btn-primary addToCartButton" onClick={this.addToCartHandler}>Add to Cart</button>
                                </div>

                                
                            </div>

                               
                            


                        </div>
                )

                }
                
            </div>
        )
    }
}
