// This is a component for testing purpose. Not used in main component


import React, { Component } from 'react'

export default class FirstItem extends Component {
    
    state = {
                loading: true,
                firstApiData: [],        
                cartState: [
                                {addedItemName: [] },
                                {addedItemQty: 0 }
                           ] 

            };

    

    
    async componentDidMount() {
        const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url);
        const data = await response.json();
        this.setState({firstApiData: data.products[0], loading: false})
        //console.log(this.state.firstApiData);
    }


    
    
    render() {

        function btnCart (event){
            console.log('Button Works!')
           
            console.log(this.state.firstApiData);


    };
    
        let qty=0;
        function updateItem(event) {
            ++qty;
            console.log(qty)
        }
        

        return (
            <div>
                {   this.state.loading || !this.state.firstApiData? (<div>Loading...</div>): (
                    <div>
                        <h3> {this.state.firstApiData.name} </h3>
                        <p>{this.state.firstApiData.description}</p>
                        <img alt = "FirstProduct" src= {this.state.firstApiData.master.images[1]["product_url"]} />
                        <p>Price: {this.state.firstApiData.price}$</p>
                        <input type = "number" name="quantity" min="1" max="5" value="1" onChange={updateItem}></input>    
                        <button className="cartButton" onClick={btnCart}>Add to Cart</button>   
                        <br />
                        <hr />
                    </div>
                )}
            </div>
        )
    }
}
